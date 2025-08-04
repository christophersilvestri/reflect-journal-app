import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <LoadingSpinner />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
}); 