import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Constants from 'expo-constants';
import { tsPropertySignature } from '@babel/types';

export default function Results() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{props.results[2]}</Text>
      <Text>{props.results[3]}</Text>
    </SafeAreaView>
  );
}
