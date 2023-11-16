import { YStack, Image, XStack, Text } from 'tamagui';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GradientBackground } from './Themed';
import { useState } from 'react';
import Home from '@app/(tabs)/home';
import Reuniao from '@app/(tabs)/reuniao';

const Drawer = createDrawerNavigator();
export default function LateralMenu() {
    const [menu, setMenu] = useState(false);

  return (
      <YStack>
        <Image source={require('@assets/List.svg')}
            onPress={() => {
                setMenu(!menu);
            }
            }
        />
        <GradientBackground
            style={{
                width: '50%',
                height: '100vh',
                position: 'absolute',
                zIndex: 1000,
                top: 0,
                left: 0,
                display: menu ? 'flex' : 'none',
            }}
            onPressOut={() => {
                setMenu(!menu);
            }}
        >
        <YStack
        >
            <XStack>
                <Image source={require('@assets/Reunião.svg')} 
                    tintColor={'#FFF'}
                />
                <Text>Salas de Reunião</Text>
            </XStack>
        </YStack>
        </GradientBackground>
      </YStack>
  );
}


function Menu() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={props => <CustomDrawerContent {...props} />}
                drawerStyle={{
                    backgroundColor: '#333',
                    paddingVertical: 20,
                }}
                drawerContentOptions={{
                    labelStyle: {
                        fontWeight: 'bold',
                    },
                    activeTintColor: '#7cc',
                    activeBackgroundColor: 'transparent',
                    inactiveTintColor: '#ccc',
                    itemStyle: {
                        marginVertical: 5,
                    },
                }}
            >
                <Drawer.Screen
                    name="Início"
                    component={Home}
                    options={{
                        drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#7cc' : '#ccc' }}>Início</Text>),
                        drawerIcon: (({ focused }) => <Icon name="home" size={20} color={focused ? '#7cc' : '#ccc'} />)
                    }}
                />
                <Drawer.Screen
                    name="Salas de Reunião"
                    component={Reuniao}
                    options={{
                        drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#7cc' : '#ccc' }}>Salas de Reunião</Text>),
                        drawerIcon: (({ focused }) => <Icon name="home" size={20} color={focused ? '#7cc' : '#ccc'} />)
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}