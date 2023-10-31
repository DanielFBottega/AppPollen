import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet } from 'react-native';

export function GradientBackground({children, style}) {
  return (
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 2 }}
        locations={[0.0, 0.99]}
        colors={['#08A647', '#ACCF80']}
        style={style}>
            {children}
        </LinearGradient>
  );
}


export function Button({children, style}) {
  return (
        <GradientBackground style={style}>
            <Pressable
            style={styles.button}>
                {children}
            </Pressable>
        </GradientBackground>
  );
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    width: '90%',
    height: 50,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

