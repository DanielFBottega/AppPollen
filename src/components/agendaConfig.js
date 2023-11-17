import {useState} from 'react';
import {
    View,
    XStack,
    Image,
    YStack,
    Checkbox,
    Text,
    Label,
    Button
  } from 'tamagui'
  import { Check as CheckIcon, X } from '@tamagui/lucide-icons'
  import {Modal, StyleSheet} from 'react-native'

export function ModalConfig() {
    const [open, setOpen] = useState(false)

    return(
        <View>
            <Image src={require('@assets/Settings.svg')} onPress={() => setOpen(true)} />
            <Modal
                visible={open}
                animationType='slide'
                transparent={true}
                onRequestClose={() => setOpen(false)}
            >
        <View
            f={1}
            justifyContent='center'
            alignItems='center'
        >
          <View
            backgroundColor={'white'}
            padding={20}
            width={200}
            borderRadius={20}
            borderColor={'#08A647'}
            borderWidth={1}
            shadowColor={'#000'}
            shadowOffset={{
                width: 0,
                height: 4,
            }}
            shadowOpacity={0.25}
            shadowRadius={4}

          >
            <YStack>
                <XStack
                    width={200}
                >
                    <Text
                        color={'black'}
                        flex={1}
                        justifyContent='center'
                        alignContent='center'
                    >Preferências</Text>
                    <Button
                        size='$1'
                        //sem background
                        backgroundColor={'transparent'}
                        onPress={() => setOpen(false)}
                    >
                        <X
                            color={'#000'}
                        />
                    </Button>
                </XStack>
                <XStack>
                    <Checkbox
                        id='checkbox'
                    >
                        <Checkbox.Indicator>
                            <CheckIcon />
                        </Checkbox.Indicator>
                    </Checkbox>
                    <Label htmlFor='checkbox'
                        color={'#000'}
                    >Checkbox</Label>
                </XStack>
                <XStack>
                    <Checkbox
                        id='checkbox'
                    >
                        <Checkbox.Indicator>
                            <CheckIcon />
                        </Checkbox.Indicator>
                    </Checkbox>
                    <Label htmlFor='checkbox'
                        color={'#000'}
                    >Checkbox</Label>
                </XStack>
                <XStack>
                    <Checkbox
                        id='checkbox'
                    >
                        <Checkbox.Indicator>
                            <CheckIcon />
                        </Checkbox.Indicator>
                    </Checkbox>
                    <Label htmlFor='checkbox'
                        color={'#000'}
                    >Checkbox</Label>
                </XStack>
                <XStack>
                    <Checkbox
                        id='checkbox'
                    >
                        <Checkbox.Indicator>
                            <CheckIcon />
                        </Checkbox.Indicator>
                    </Checkbox>
                    <Label htmlFor='checkbox'
                        color={'#000'}
                    >Checkbox</Label>
                </XStack>
            </YStack>

          </View>
        </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      color: '#08A647',
    },
  });