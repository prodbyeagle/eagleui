import { LucideIcon } from 'lucide-react';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'ghost' | 'border' | 'danger';
	size?: 'sm' | 'md' | 'lg';
	icon?: LucideIcon;
	content?: string;
}
