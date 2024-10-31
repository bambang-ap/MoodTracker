import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useRecoilState} from 'recoil';
import {atomDefaultChart} from '../recoils';

export default function SettingsScreen() {
	const [chart, setChart] = useRecoilState(atomDefaultChart);

	const selected = chart === 'bar';

	return (
		<View className="flex-1 bg-white p-6" style={{gap: 8}}>
			<Text className="text-center text-xl font-semibold">Settings</Text>

			<View className="flex-row justify-between">
				<Text>Choose your default chart type</Text>
				<View className="flex-row">
					<TouchableOpacity
						onPress={() => setChart('bar')}
						className={classNames('p-1 px-2 bg-sad-50 rounded-l-lg', {
							'bg-sad': selected,
						})}>
						<Text className="text-white font-semibold">Bar</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setChart('pie')}
						className={classNames('p-1 px-2 bg-sad-50 rounded-r-lg', {
							'bg-sad': !selected,
						})}>
						<Text className="text-white font-semibold">Pie</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
