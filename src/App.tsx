import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
	BottomTabBarProps,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import StatisticsScreen from './screens/Statistics';
import SettingsScreen from './screens/Settings';
import {RecoilRoot} from 'recoil';
import Icon from 'react-native-vector-icons/FontAwesome';

import ReactNativeRecoilPersist, {
	ReactNativeRecoilPersistGate,
} from 'react-native-recoil-persist';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import tailwindConfig from '../tailwind.config';
const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<RecoilRoot>
			<ReactNativeRecoilPersistGate store={ReactNativeRecoilPersist}>
				<NavigationContainer>
					<Tab.Navigator tabBar={TabBar} screenOptions={{headerShown: false}}>
						{screens.map(props => (
							<Tab.Screen {...props} />
						))}
					</Tab.Navigator>
				</NavigationContainer>
			</ReactNativeRecoilPersistGate>
		</RecoilRoot>
	);
}

type ScreenProps = {icon: string} & GetProps<typeof Tab.Screen>;

const screens: ScreenProps[] = [
	{icon: 'home', name: 'Home', component: HomeScreen},
	{icon: 'pie-chart', name: 'Statistics', component: StatisticsScreen},
	{icon: 'gear', name: 'Settings', component: SettingsScreen},
];

function TabBar(props: BottomTabBarProps) {
	const {navigation, state} = props;

	const {index} = state;

	return (
		<View className="bg-white border-t-[0.5px] border-t-gray-600 py-4 px-16 flex-row justify-between">
			{screens.map(({icon, name}, i) => {
				const selected = i === index;

				return (
					<TouchableOpacity onPress={() => navigation.navigate(name)}>
						<View className="flex items-center">
							<Icon
								color={
									selected
										? // @ts-ignore
										  tailwindConfig.theme?.extend?.colors?.blue
										: 'black'
								}
								size={24}
								name={icon}
							/>
							<Text className={classNames({'text-blue': selected})}>
								{name}
							</Text>
						</View>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}
