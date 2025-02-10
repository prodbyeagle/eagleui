# EagleUI 🦅  

EagleUI is a modern, flexible, and highly customizable UI component library by [@prodbyeagle](https://github.com/prodbyeagle). Originally built for prodbyeagle's own projects, it is now open for everyone to use and contribute to.  

## Table of Contents  

- [Features](#features)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)  

## Features  

- **Fully Customizable** – Tailor components to match your design system.  
- **Modern & Minimalist** – Designed with Swiss-inspired aesthetics and best UX practices.  
- **Reusable & Performant** – Speed up development with lightweight, optimized components.  
- **TypeScript Support** – Built with TypeScript for safety and a great developer experience.  

## Installation  

Ensure you have [Node.js](https://nodejs.org/) installed, along with your preferred package manager (`npm`, `pnpm`, or `yarn`).  

### Install via your package manager  

```bash
# npm
npm install @prodbyeagle/eagle-ui

# pnpm
pnpm add @prodbyeagle/eagle-ui

# yarn
yarn add @prodbyeagle/eagle-ui
```  

### Verify Peer Dependencies  

Some components may require additional peer dependencies. Check the [documentation](#) for details.  

## Usage  

Import and use EagleUI components in your Next.js project:  

```tsx
import { Button } from '@prodbyeagle/eagle-ui';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-semibold">Welcome to EagleUI</h1>
      <p className="text-neutral-500">Customize and build fast with reusable components.</p>
      <Button variant="border" onClick={() => alert('Button Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}
```  

## Contributing  

We welcome contributions! To contribute:  

1. **Fork the repository**  
2. **Create a new branch**  

   ```bash
   git checkout -b feature/your-feature-name
   ```  

3. **Make changes and commit**  

   ```bash
   git commit -m "Add: YourFeatureName"
   ```  

4. **Push your branch**  

   ```bash
   git push origin feature/your-feature-name
   ```  

5. **Open a pull request**  

For major changes, please open an issue first to discuss your ideas.  

## License  

EagleUI is open source and available under the [MIT License](LICENSE).  

---

Happy coding! 🦅
