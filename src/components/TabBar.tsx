import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {screens} from '../constants';
import {colors} from '../tailwind';

export default function TabBar(props: BottomTabBarProps) {
	const {navigation, state} = props;

	const {index} = state;

	return (
		<View className="bg-white border-t-[0.5px] border-t-gray-600 py-4 px-16 flex-row justify-between">
			{screens.map(({icon, name}, i) => {
				const selected = i === index;

				return (
					<TouchableOpacity onPress={() => navigation.navigate(name)}>
						<View className="flex gap-5 items-center">
							<Icon
								size={24}
								name={icon}
								color={selected ? colors.blue[700] : 'black'}
							/>
							<Text className={classNames({'text-blue-700': selected})}>
								{name}
							</Text>
						</View>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}
