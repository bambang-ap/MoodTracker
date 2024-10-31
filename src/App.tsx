import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RecoilRoot} from 'recoil';
import ReactNativeRecoilPersist, {
	ReactNativeRecoilPersistGate,
} from 'react-native-recoil-persist';
import {screens} from './constants';
import TabBar from './components/TabBar';

export const Tab = createBottomTabNavigator();

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
