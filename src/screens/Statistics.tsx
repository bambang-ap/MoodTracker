import React, {useState} from 'react';
import {View, Text, LayoutRectangle} from 'react-native';
import {useRecoilValue} from 'recoil';
import {atomDefaultChart, atomMood} from '../recoils';
import {MoodIcon, MoodText} from '../constants/enum';
import {configColor} from '../tailwind';
import {BarChart, PieChart} from 'react-native-gifted-charts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StatisticsScreen = () => {
	const [{width}, setLayout] = useState({width: 100} as LayoutRectangle);
	const mood = useRecoilValue(atomMood);
	const chartType = useRecoilValue(atomDefaultChart);

	const isPie = chartType === 'pie';
	const spacing = 15;
	const barChartWidth = width - 40;

	const moodData = MoodText.map((name, index) => {
		const color = name.toLowerCase() as Lowercase<(typeof MoodText)[number]>;
		const count = mood.filter(e => e === index);

		const {DEFAULT} = configColor[color];
		const topLabelComponent = () => (
			<View className="bottom-2">
				<Icon color={DEFAULT} size={32} name={MoodIcon[index]!} />
			</View>
		);

		return {
			name,
			icon: MoodIcon[index]!,
			color: DEFAULT,
			topLabelComponent,
			frontColor: DEFAULT,
			value: count.length,
		};
	});

	const array = moodData.map(e => e.value);
	const total = array.reduce((acc, num) => acc + num, 0); // Total = 10
	const percentages = array.map(num => {
		let percent = num / total;
		if (Number.isNaN(percent)) {
			percent = 0;
		}
		return (percent * 100).toFixed(2);
	});

	const barWidth =
		(barChartWidth - 40) / moodData.length -
		(spacing * moodData.length + 1) / moodData.length;

	return (
		<View
			style={{gap: 8}}
			onLayout={e => setLayout(e.nativeEvent.layout)}
			className="flex-1 items-center justify-center bg-white pt-6">
			<Text className="text-center text-xl font-semibold">Statistics</Text>

			<View
				style={{width: barChartWidth}}
				className={classNames(
					'flex-1 border rounded-lg items-center justify-center',
					{'py-4': isPie},
				)}>
				{isPie ? (
					<PieChart data={moodData} />
				) : (
					<BarChart
						data={moodData}
						hideRules
						barWidth={barWidth}
						width={barChartWidth}
						disablePress
						barBorderRadius={10}
						yAxisThickness={0}
						xAxisThickness={0}
						yAxisLabelWidth={0}
						xAxisIndicesWidth={0}
					/>
				)}
			</View>
			<View className="flex-1 w-full px-4 pt-4">
				<View className="flex-row flex-wrap">
					{moodData.map(({name, color, icon}, i) => {
						return (
							<View className="p-1 w-1/2">
								<View
									style={{gap: 4}}
									className="rounded-lg flex-row items-center border p-2">
									<Icon size={24} color={color} name={icon} />
									<Text className="flex-1 text-xl font-bold" style={{color}}>
										{name}
									</Text>
									<Text>{percentages[i]}%</Text>
								</View>
							</View>
						);
					})}
				</View>
			</View>
		</View>
	);
};

export default StatisticsScreen;
