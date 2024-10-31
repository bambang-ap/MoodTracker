import React from 'react';
import {View, Text} from 'react-native';
import {PieChart, BarChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

import tailwindConfig from '../../tailwind.config';

// @ts-ignore
const {happy, sad, neutral} = tailwindConfig.theme?.extend?.colors ?? {};

const screenWidth = Dimensions.get('window').width;

const dataPie = [
	{
		name: 'Happy',
		population: 40,
		color: happy.DEFAULT,
		legendFontColor: '#7F7F7F',
		legendFontSize: 15,
	},
	{
		name: 'Sad',
		population: 30,
		color: sad.DEFAULT,
		legendFontColor: '#7F7F7F',
		legendFontSize: 15,
	},
	{
		name: 'Neutral',
		population: 30,
		color: neutral.DEFAULT,
		legendFontColor: '#7F7F7F',
		legendFontSize: 15,
	},
];

const dataBar = {
	labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	datasets: [{data: [20, 45, 28, 80, 99, 43, 50]}],
};

const StatisticsScreen = () => {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-lg font-bold mb-4">Mood Statistics</Text>

			<PieChart
				data={dataPie}
				width={screenWidth}
				height={220}
				chartConfig={{
					color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
				}}
				accessor="population"
				backgroundColor="transparent"
				paddingLeft="15"
				absolute
			/>

			<BarChart
				data={dataBar}
				width={screenWidth}
				height={220}
				className="mt-4"
				chartConfig={{
					backgroundGradientFrom: '#fb8c00',
					backgroundGradientTo: '#ffa726',
					color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
				}}
			/>
		</View>
	);
};

export default StatisticsScreen;
