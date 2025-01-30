# EagleUI ( DOCS SOON! )

EagleUI is a customizable and modern UI component library built with React and TailwindCSS. It provides a set of reusable components to help you build beautiful and consistent user interfaces quickly and efficiently.

## Features

- **Customizable**: Easily customize the components to match your design system.
- **Modern Design**: Built with modern design principles and best practices.
- **Reusable Components**: A set of reusable components to speed up your development process.
- **TypeScript Support**: Written in TypeScript for type safety and better developer experience.

## Installation

To install EagleUI, you need to have Node.js and npm installed. Then, you can install the library using npm:

```bash
npm install @prodbyeagle/preagle-ui
```

## Usage

Here is an example of how to use the `Button` component from EagleUI:

```tsx
import React from 'react';
import { Button } from '@prodbyeagle/preagle-ui';

const App = () => {
	return (
		<div>
			<Button variant='primary' size='md' content='Click Me' />
		</div>
	);
};

export default App;
```

## Components

### Button

A customizable button component with different variants and sizes.

```tsx
import { Button } from '@prodbyeagle/preagle-ui';

<Button variant='primary' size='md' content='Click Me' />;
```

### Dialog

A flexible dialog component with customizable content, title, and styling.

```tsx
import { Dialog } from '@prodbyeagle/preagle-ui';

<Dialog isOpen={true} onClose={() => {}} title='Dialog Title'>
	<p>Dialog Content</p>
</Dialog>;
```

### Input

A customizable input component with optional label, icon, and error message.

```tsx
import { Input } from '@prodbyeagle/preagle-ui';

<Input label='Username' placeholder='Enter your username' />;
```

### Select

A custom dropdown select component with an accessible and modern design.

```tsx
import { Select } from '@prodbyeagle/preagle-ui';

const options = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
];

<Select value='option1' onChange={(value) => {}} options={options} />;
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.

## Author

Created by prodbyeagle.
