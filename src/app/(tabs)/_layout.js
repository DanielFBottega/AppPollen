import React from 'react';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';



const AppNavigator = () => {
  return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarLabelStyle: { display: 'none' },
            tabBarStyle: {
              // tabbar solta do rodapé
              position: 'absolute',
              bottom: 10,
              left: 20,
              right: 20,
              borderTopWidth: 0,
              borderBottomEndRadius: 20,
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              borderBottomStartRadius: 20,
            },
          }}
          sceneContainerStyle={{
            backgroundColor: 'transparent',
            margin: 10,
            marginBottom: 60,
          }}
          >
          <Tabs.Screen
            name="home/index"
            options={{
              // icone house.svg do assets
              tabBarIcon: ({ focused }) => (
                <Image
                  source={focused ? require('../../../assets/HouseFocused.svg') : require('../../../assets/House.svg')}
                  resizeMode="contain"
                  style={{
                    width: 32,
                    height: 32,
                  }}
                />
              ),
            }}
            />
          <Tabs.Screen
          name="reuniao/index"
          options={{
            // icone house.svg do assets
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../../../assets/ReuniãoFocused.svg') : require('../../../assets/Reunião.svg')}
                resizeMode="contain"
                style={{
                  width: 32,
                  height: 32,
                }}
              />
            ),
          }} />
          <Tabs.Screen
          name="noticias/index"
          options={{
            // icone house.svg do assets
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../../../assets/CalendarFocused.svg') : require('../../../assets/Calendar.svg')}
                resizeMode="contain"
                style={{
                  width: 32,
                  height: 32,
                }}
              />
            ),
          }} />
          <Tabs.Screen
          name="eventos/index"
          options={{
            // icone house.svg do assets
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../../../assets/NewsFocused.svg') : require('../../../assets/News.svg')}
                resizeMode="contain"
                style={{
                  width: 32,
                  height: 32,
                }}
              />
            ),
          }} />
          <Tabs.Screen
          name="agenda/index"
          options={{
            tabBarButton: () => null,
          }}
          />
        </Tabs>
  );
};

export default AppNavigator;
