'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ShaderMaterial, Color, Vector2 } from 'three';

/**
 * Vertex shader for the gradient effect.
 */
const vertexShaderSrc = `
    varying vec2 vUv;
    void main() {
        vUv = position.xy * 0.5 + 0.5;
        gl_Position = vec4(position, 1.0);
    }
`;

/**
 * Fragment shader for the gradient effect with noise and warp.
 */
const fragmentShaderSrc = `
precision highp float;

uniform float time;
uniform vec2 resolution;
uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;
uniform float noiseOpacity;
uniform float warpIntensity;

varying vec2 vUv;

float rand(vec2 co) {
	return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
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

float voronoi(vec2 uv) {
	vec2 i = floor(uv);
	vec2 f = fract(uv);
	float minDist = 1.0;
	
	for (int y = -1; y <= 1; y++) {
		for (int x = -1; x <= 1; x++) {
			vec2 offset = vec2(x, y);
			vec2 point = i + offset + rand(i + offset);
			float d = length(f - (point - i));
			minDist = min(minDist, d);
		}
	}
	return minDist;
}
	
float cubicBezier(float t, float p0, float p1, float p2, float p3) {
    float u = 1.0 - t;
    return u * u * u * p0 + 3.0 * u * u * t * p1 + 3.0 * u * t * t * p2 + t * t * t * p3;
}

void main() {
	vec2 uv = gl_FragCoord.xy / resolution.xy;
	float n = noise(uv * 0.1);

	vec2 warp = vec2(voronoi(uv * 1.0), voronoi(uv * 10.0 + vec2(1.0)));
	n += warp.x * warpIntensity;
	float colorNoise = noise(uv * 3.0 + time * 0.1);  

    float t = smoothstep(0.0, 1.0, n + colorNoise);
    vec3 color = mix(color1, color2, cubicBezier(t, 0.0, 0.5, 0.5, 1.0));
    color = mix(color, color3, cubicBezier(t, 0.0, 0.5, 0.5, 1.0));

	float grain = rand(uv) * noiseOpacity;
	color += grain;

	gl_FragColor = vec4(color, 1.0);
}
`;

/**
 * A mesh that renders a full‑screen plane with the custom shader material.
 *
 * @param props.speed - Animation speed multiplier.
 * @param props.colors - Array of three color strings for the gradient.
 * @param props.noiseOpacity - Opacity of the noise effect.
 * @param props.warpIntensity - Intensity of the Voronoi warp effect.
 */
const ShaderPlane: React.FC<{
	speed: number;
	colors: string[];
	noiseOpacity: number;
	warpIntensity: number;
}> = ({ speed, colors, noiseOpacity, warpIntensity }) => {
	const materialRef = useRef<ShaderMaterial>(null!);
	const timeRef = useRef(0);
	const { size } = useThree();

	useFrame((_, delta) => {
		timeRef.current += delta * speed;
		if (materialRef.current) {
			materialRef.current.uniforms.time.value = timeRef.current;
			materialRef.current.uniforms.resolution.value.set(size.width, size.height);
		}
	});
	
	return (
		<mesh>
			<planeGeometry args={[2, 2]} />
			<shaderMaterial
				ref={materialRef}
				uniforms={{
					time: { value: 0 },
					resolution: { value: new Vector2(size.width, size.height) },
					color1: { value: new Color(colors[0]) },
					color2: { value: new Color(colors[1]) },
					color3: { value: new Color(colors[2]) },
					noiseOpacity: { value: noiseOpacity },
					warpIntensity: { value: warpIntensity },
				}}
				vertexShader={vertexShaderSrc}
				fragmentShader={fragmentShaderSrc}
			/>
		</mesh>
	);
};

/**
 * A React component that renders a dynamic gradient background using Three.js.
 *
 * @param props.width - The width of the canvas.
 * @param props.height - The height of the canvas.
 * @param props.noiseOpacity - The opacity of the noise effect.
 * @param props.warpIntensity - The intensity of the warp effect.
 * @param props.speed - The speed of the animation.
 * @param props.colors - Array of three color strings for the gradient.
 * @param props.className - Additional class names for custom styling.
 */
export const Gradient: React.FC<{
	width?: string;
	height?: string;
	noiseOpacity?: number;
	warpIntensity?: number;
	speed?: number;
	colors?: string[];
	className?: string;
}> = ({
	width = '100vw',
	height = '100vh',
	noiseOpacity = 0.05,
	warpIntensity = 0.1,
	speed = 1.0,
	colors = ['#ff6b6b', '#feca57', '#1dd1a1'],
	className = '',
}) => {
	return (
		<div
			className="relative"
			style={{
				width,
				height
			}}
		>
			<Canvas
				className={`${className}`}
				style={{ width: '100%', height: '100%' }}
				orthographic
				camera={{ position: [0, 0, 1], zoom: 1 }}
			>
				<ShaderPlane
					speed={speed}
					colors={colors}
					noiseOpacity={noiseOpacity}
					warpIntensity={warpIntensity}
				/>
			</Canvas>
		</div>
	);
};

export default Gradient;
