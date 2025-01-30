export interface SelectProps<T> {
	value: T;
	onChange: (value: T) => void;
	options: { value: T; label: string }[];
	className?: string;
	placeholder?: string;
}
