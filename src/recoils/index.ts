import {atom} from 'recoil';
import {persistObj} from './persistance';
import {MoodValue} from 'src/constants/enum';

export const atomMood = atom<MoodValue[]>({
	...persistObj,
	key: 'moodState',
	default: [],
});

export const atomDefaultChart = atom<'bar' | 'pie'>({
	...persistObj,
	default: 'bar',
	key: 'atomDefaultChart',
});
