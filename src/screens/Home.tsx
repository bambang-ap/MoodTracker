import React from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {atomMood} from '../recoils';
import {MoodIcon, MoodText, MoodValue} from '../constants/enum';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {configColor} from '../tailwind';

const HomeScreen = () => {
	const setMood = useSetRecoilState(atomMood);

	const addMood = (mood: MoodValue) => {
		setMood(prevMood => [...prevMood, {mood, timeStamp: +new Date()}]);
	};

	return (
		<ScrollView className="bg-white">
			<View className="p-6" style={{gap: 8}}>
				<Text className="text-xl font-semibold">
					How are you feeling right now?
				</Text>
				{MoodText.map((text, index) => {
					const color = text.toLowerCase() as Lowercase<
						(typeof MoodText)[number]
					>;

					const {['50']: backgroundColor, DEFAULT} = configColor[color];

					return (
						<TouchableOpacity
							onPress={() => addMood(index)}
							style={{backgroundColor, borderColor: DEFAULT, gap: 4}}
							className={classNames(
								'px-4 py-2 flex-row items-center',
								'rounded-lg',
								{
									border: true,
								},
							)}>
							<Icon size={24} color={DEFAULT} name={MoodIcon[index]!} />
							<Text className="font-bold text-xl" style={{color: DEFAULT}}>
								{text}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
