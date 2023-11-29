import { Suspense, useEffect } from "react";
import {
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { TamaguiProvider, Text, Theme } from "tamagui";
import config from "../../tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Regular.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    InterThin: require("@tamagui/font-inter/otf/Inter-Thin.otf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={'light'} defaultTheme={'light'}
        >
          <ThemeProvider
            value={{
              colors: {
                primary: '#08A647',
                secondary: '#ACCF80',
                background: '#F2F2F2',
                backgroundInverted: '#fff',
                text: '#2D2D2D',
                textInverted: '#F2F2F2',
                surface: '#FFFFFF',
            }}
          }
          >
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  fontFamily: 'Inter',
                },
              }}
            />
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}