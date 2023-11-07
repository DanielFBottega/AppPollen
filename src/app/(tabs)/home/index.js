import {
  XStack,
  YStack,
  Text,
  Image,
  Avatar,
  View,
  Button
} from 'tamagui';
import * as Linking from 'expo-linking';



export default function Home() {
  const nome = 'Pedrinho Matador';
  const empresa = 'PCC';
  return (
    <YStack>
      <YStack>
        <Image source={require('@assets/List.svg')} />
      </YStack>
      <YStack
      marginTop={10}
      >
        <XStack
          justifyContent='space-between'
        >
          <YStack>
            <Text
            fontFamily={'InterBold'}
            >Olá, {nome}</Text>
            <Text
            fontFamily={'InterThin'}
            >{empresa}</Text>
          </YStack>
          <Avatar circular size="$5"
            borderWidth={3}
            borderColor={'#08A647'}
          >
            <Avatar.Image src="http://placekitten.com/200/300" />
            <Avatar.Fallback bc={'#08A647'} />
          </Avatar>
        </XStack>
      </YStack>
      <XStack
        justifyContent='space-evenly'
        marginTop={30}
      >
          <YStack
            backgroundColor={'white'}
            width={100}
            padding={10}
            height={95}
            justifyContent='space-between'
            borderRadius={10}
            onPress={() =>  {
              Linking.openURL('/reuniao');
            }}
          >
          <View
            justifyContent='center'
            backgroundColor={'#08A647'}
            width={40}
            borderRadius={5}

          >
            <Image
            source={require('@assets/Reunião.svg')}
            tintColor={'#FFF'}
            />
          </View>
          <Text
            fontFamily={'InterThin'}
            fontSize={14}
          >Salas de Reunião</Text>
          </YStack>
          <YStack
            backgroundColor={'white'}
            width={100}
            padding={10}
            justifyContent='space-between'
            borderRadius={10}
            onPress={() =>  {
              Linking.openURL('/noticias');
            }}
          >
          <View
          justifyContent='center'
          backgroundColor={'#08A647'}
          width={40}
          borderRadius={5}
          >
            <Image
            source={require('@assets/News.svg')}
            tintColor={'#FFF'}
            />
          </View>
          <Text
            fontFamily={'InterThin'}
            fontSize={14}
          >Notícias</Text>
          </YStack>
          <YStack
            backgroundColor={'white'}
            width={100}
            padding={10}
            justifyContent='space-between'
            borderRadius={10}
          >
          <View
          justifyContent='center'
          backgroundColor={'#08A647'}
          width={40}
          borderRadius={5}
          >
            <Image
            source={require('@assets/Reunião.svg')}
            tintColor={'#FFF'}
            />
          </View>
          <Text
            fontFamily={'InterThin'}
            fontSize={14}
          >Eventos</Text>
          </YStack>
      </XStack>
    </YStack>
  );
}

