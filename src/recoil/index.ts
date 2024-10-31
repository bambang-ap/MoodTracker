import {atom} from 'recoil';
import {persistObj} from './persistance';

export type MoodType = 'happy' | 'sad' | 'neutral' | 'stress';

export const moodState = atom<MoodType[]>({
	...persistObj,
	key: 'moodState',
	default: [],
});
