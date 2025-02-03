import { LucideIcon } from 'lucide-react';

export interface BadgeProps {
	variant?: 'primary' | 'secondary' | 'border' | 'danger' | 'success';
	icon?: LucideIcon;
	text?: string;
}
