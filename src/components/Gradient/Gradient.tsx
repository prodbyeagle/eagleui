'use client';
import { JSX, useEffect, useRef } from 'react';

const vertexShaderSrc = `
    attribute vec2 position;
    varying vec2 vUv;
    void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
	}
`;

const fragmentShaderSrc = `
    precision highp float;

    uniform float time;
    uniform vec2 resolution;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    uniform float noiseOpacity;

    float rand(vec2 co) {
      return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
    }

    float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
           (c - a) * u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
    }

    void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 pos = uv * 3.0 + vec2(time * 0.1, time * 0.1);
    
    float n = noise(pos);
    vec3 color = mix(color1, color2, smoothstep(0.0, 1.0, n));
    color = mix(color, color3, smoothstep(0.0, 1.0, n * 0.5 + 0.25));

    float grain = rand(uv) * noiseOpacity;
    color += grain;

    gl_FragColor = vec4(color, 1.0);
    }
`;

/**
 * A component that renders a dynamic gradient background with noise and animation.
 *
 * @param {Object} props - The properties passed to the Gradient component.
 * @param {string} [props.width='100vw'] - The width of the canvas.
 * @param {string} [props.height='100vh'] - The height of the canvas.
 * @param {number} [props.blur=0] - The amount of blur applied to the gradient.
 * @param {number} [props.noiseOpacity=0.05] - The opacity of the noise applied to the gradient.
 * @param {number} [props.speed=1.0] - The speed of the animation.
 * @param {string[]} [props.colors=['#ff6b6b', '#feca57', '#1dd1a1']] - The colors used for the gradient.
 * @param {string} [props.className=''] - Additional class names for custom styling.
 *
 * @returns {JSX.Element} The rendered gradient background component.
 */
export const Gradient = ({
	width = '100vw',
	height = '100vh',
	blur = 0,
	noiseOpacity = 0.05,
	speed = 1.0,
	colors = ['#ff6b6b', '#feca57', '#1dd1a1'],
	className = '',
}: { width?: string; height?: string; blur?: number; noiseOpacity?: number; speed?: number; colors?: string[]; className?: string; }): JSX.Element => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current!;
		const gl = canvas.getContext('webgl')!;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		gl.viewport(0, 0, canvas.width, canvas.height);

		const createShader = (type: number, source: string) => {
			const shader = gl.createShader(type)!;
			gl.shaderSource(shader, source);
			gl.compileShader(shader);
			return shader;
		};

		const program = gl.createProgram()!;
		gl.attachShader(
			program,
			createShader(gl.VERTEX_SHADER, vertexShaderSrc)
		);
		gl.attachShader(
			program,
			createShader(gl.FRAGMENT_SHADER, fragmentShaderSrc)
		);
		gl.linkProgram(program);
		gl.useProgram(program);

		const positionBuffer = gl.createBuffer()!;
		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
			gl.STATIC_DRAW
		);

		const positionLocation = gl.getAttribLocation(program, 'position');
		gl.enableVertexAttribArray(positionLocation);
		gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

		const timeUniform = gl.getUniformLocation(program, 'time');
		const resolutionUniform = gl.getUniformLocation(program, 'resolution');
		const color1Uniform = gl.getUniformLocation(program, 'color1');
		const color2Uniform = gl.getUniformLocation(program, 'color2');
		const color3Uniform = gl.getUniformLocation(program, 'color3');
		const noiseUniform = gl.getUniformLocation(program, 'noiseOpacity');

		const setColor = (uniform: WebGLUniformLocation, color: string) => {
			const c = new Float32Array([
				parseInt(color.slice(1, 3), 16) / 255,
				parseInt(color.slice(3, 5), 16) / 255,
				parseInt(color.slice(5, 7), 16) / 255,
			]);
			gl.uniform3fv(uniform, c);
		};

		gl.uniform2f(resolutionUniform, canvas.width, canvas.height);
		gl.uniform1f(noiseUniform, noiseOpacity);
		if (color1Uniform && color2Uniform && color3Uniform) {
			setColor(color1Uniform, colors[0]);
			setColor(color2Uniform, colors[1]);
			setColor(color3Uniform, colors[2]);
		}

		const animate = (time: number) => {
			gl.uniform1f(timeUniform, time * 0.001 * speed);
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
			requestAnimationFrame(animate);
		};

		animate(0);
	}, [colors, noiseOpacity, speed]);

	return (
		<div
			className={`relative ${className}`}
			style={{
				width,
				height,
				filter: `blur(${blur}px)`,
			}}
		>
			<canvas
				ref={canvasRef}
				className={`absolute inset-0 w-full h-full ${className}`}
			/>
		</div>
	);
};
