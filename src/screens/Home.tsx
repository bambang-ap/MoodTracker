// src/screens/HomeScreen.tsx
import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {moodState, MoodType} from '../recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
	const setMood = useSetRecoilState(moodState);

	AsyncStorage.getAllKeys().then(e => console.log(e));

	// Function to handle button press and update the mood array
	const addMood = (mood: MoodType) => {
		setMood(prevMood => [...prevMood, mood]);
	};

	return (
		<View style={styles.container}>
			<Button title="Happy" onPress={() => addMood('happy')} />
			<Button title="Sad" onPress={() => addMood('sad')} />
			<Button title="Neutral" onPress={() => addMood('neutral')} />
			<Button title="Stress" onPress={() => addMood('stress')} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default HomeScreen;
