import { LucideIcon } from 'lucide-react';

export interface TimeStampProps {
	timestamp: string;
	className?: string;
	showIcon?: boolean;
	icon?: LucideIcon;
	extended?: boolean;
	text?: string;
	live?: boolean;
	addSuffix?: boolean;
}
