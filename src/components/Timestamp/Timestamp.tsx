'use client';

import { format, formatDistanceToNow } from 'date-fns';
import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';
import type { TimeStampProps } from './Timestamp.types';

/**
 * A component to display a formatted timestamp with optional live updates, an icon, and extended text.
 *
 * @param timestamp The timestamp to display, formatted relative to the current time.
 * @param className Optional additional classes for styling.
 * @param showIcon Whether to show a clock icon next to the timestamp. Default: `true`.
 * @param extended Whether to show additional text if provided. Default: `false`.
 * @param text Optional additional text to display when `extended` is enabled.
 * @param live Whether to update the timestamp dynamically (every 10 seconds). Default: `false`.
 * @param addSuffix Whether to add a suffix (e.g., "ago"). Default: `true`.
 * @returns A time element displaying a human-readable timestamp.
 */
export const TimeStamp = ({
	timestamp,
	className,
	showIcon = true,
	icon: CustomIcon,
	extended = false,
	text,
	live = false,
	addSuffix = true,
}: TimeStampProps) => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		if (live) {
			const interval = setInterval(() => {
				setCurrentTime(new Date());
			}, 10000);

			return () => clearInterval(interval);
		}
	}, [live]);

	return (
		<time
			suppressHydrationWarning
			title={format(new Date(timestamp), 'dd.MM.yyyy HH:mm:ss')}
			dateTime={timestamp}
			className={cn(
				'flex items-center text-xs text-neutral-600 dark:text-neutral-400',
				className
			)}
		>
			{showIcon &&
				(CustomIcon ? (
					<CustomIcon
						size={13}
						className='mr-1 text-neutral-500 dark:text-neutral-400'
					/>
				) : (
					<Clock
						size={13}
						className='mr-1 text-neutral-500 dark:text-neutral-400'
					/>
				))}
			{extended && text && (
				<span className='mr-1 text-xs text-neutral-500 dark:text-neutral-400'>
					{text}
				</span>
			)}
			{formatDistanceToNow(new Date(timestamp), {
				includeSeconds: true,
				addSuffix: addSuffix,
			})}
		</time>
	);
};
