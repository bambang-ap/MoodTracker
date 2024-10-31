export enum MoodValue {
	HAPPY,
	SAD,
	NEUTRAL,
	STRESS,
}

export const MoodText = ['Happy', 'Sad', 'Neutral', 'Stress'] as const;
export const MoodIcon = [
	'emoticon',
	'emoticon-sad',
	'emoticon-neutral',
	'emoticon-dead',
] as const;
