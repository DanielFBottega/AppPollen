import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Stack } from 'expo-router'

export default function RootLayout() {

  return (
    <View style={styles.container}>
    <Stack
      screenOptions={{
          headerShown: false,
        }}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
