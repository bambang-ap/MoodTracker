import {Tab} from '../App';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import StatisticsScreen from '../screens/Statistics';

type ScreenProps = {icon: string} & GetProps<typeof Tab.Screen>;

export const screens: ScreenProps[] = [
	{icon: 'home', name: 'Home', component: HomeScreen},
	{icon: 'pie-chart', name: 'Statistics', component: StatisticsScreen},
	{icon: 'gear', name: 'Settings', component: SettingsScreen},
];
