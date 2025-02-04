# EagleUI 🦅

EagleUI is a modern, customizable UI component library by [@prodbyeagle](https://github.com/prodbyeagle). Originally designed for prodbyeagle's websites, this library is open for everyone to use and contribute to.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Customizable**: Easily tailor components to align with your design system.
- **Modern Design**: Crafted with modern design principles and best practices.
- **Reusable Components**: Speed up your development process with a suite of reusable components.
- **TypeScript Support**: Written in TypeScript for enhanced type safety and developer experience.

## Installation

Before you begin, ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or Yarn) installed.

### Step-by-Step Installation

1. **Using npm**

   Open your terminal and run:

   ```bash
   npm install @prodbyeagle/eagle-ui
   ```

2. **Using Yarn**

   If you prefer Yarn, run:

   ```bash
   yarn add @prodbyeagle/eagle-ui
   ```

3. **Verify Peer Dependencies**

   Some components might rely on additional peer dependencies. Make sure to check the [documentation](#) or package details for any extra requirements.

## Usage

Integrate EagleUI components into your Next.js project by importing them into your pages or components. Below is a simple example:

```tsx
// pages/index.tsx
import React from 'react';
import { Button } from '@prodbyeagle/eagle-ui';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to EagleUI</h1>
      <p>Customize and build fast with our reusable components!</p>
      <Button variant={border} onClick={() => alert('Button Clicked!')}>
        Click Me
      </Button>
    </div>
  );
};

export default Home;
```

This example demonstrates how to import a `Button` component and integrate it into your Next.js page with some basic inline styling.

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository.**
2. **Create a new branch** for your feature or bug fix:

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Make your changes** and commit them with a descriptive message:

   ```bash
   git commit -m "Add feature: YourFeatureName"
   ```

4. **Push your branch** to your fork:

   ```bash
   git push origin feature/YourFeatureName
   ```

5. **Open a pull request** on GitHub to merge your changes.

For major changes, please open an issue first to discuss what you would like to change.

## License

EagleUI is open source and available under the [MIT License](LICENSE).

---

Happy coding! 🦅
