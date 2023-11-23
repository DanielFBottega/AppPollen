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

export default function ModalConfig() {
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
                    padding={10}
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
                            marginBottom={20}
                        >
                            <Text
                                color={'black'}
                                f={1}
                                display='flex'
                                justifyContent='center'
                                alignContent='center'
                                fontFamily={'Inter'}
                            >Preferências</Text>
                            <Button
                                size='$1'
                                //sem background
                                backgroundColor={'transparent'}
                                onPress={() => setOpen(false)}
                            >
                                <X
                                    color={'#ACCF80'}
                                />
                            </Button>
                        </XStack>
                        <XStack>
                            <Checkbox
                                id='checkbox'
                                style={styles.checkbox}
                            >
                                <Checkbox.Indicator>
                                    <CheckIcon
                                        style={styles.icon}
                                    />
                                </Checkbox.Indicator>
                            </Checkbox>
                            <Label htmlFor='checkbox'
                                color={'#000'}
                            >Eventos</Label>
                        </XStack>
                        <XStack>
                            <Checkbox
                                id='checkbox'
                                style={styles.checkbox}
                            >
                                <Checkbox.Indicator>
                                    <CheckIcon 
                                        style={styles.icon}
                                    />
                                </Checkbox.Indicator>
                            </Checkbox>
                            <Label htmlFor='checkbox'
                                color={'#000'}
                            >Visitas</Label>
                        </XStack>
                        <XStack>
                            <Checkbox
                                id='checkbox'
                                style={styles.checkbox}
                            >
                                <Checkbox.Indicator>
                                    <CheckIcon 
                                        style={styles.icon}
                                    />
                                </Checkbox.Indicator>
                            </Checkbox>
                            <Label htmlFor='checkbox'
                                color={'#000'}
                            >Salas de Reunião</Label>
                        </XStack>
                        <XStack>
                            <Checkbox
                                id='checkbox'
                                style={styles.checkbox}
                            >
                                <Checkbox.Indicator>
                                    <CheckIcon 
                                        style={styles.icon}
                                    />
                                </Checkbox.Indicator>
                            </Checkbox>
                            <Label htmlFor='checkbox'
                                color={'#000'}
                            >Editais</Label>
                        </XStack>
                    </YStack>
                  </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        width: 20,
        height: 20,
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 0,
        borderColor: '#08A647',
        borderWidth: 2,
    },
    icon: {
        width: 20,
        height: 20,
        color: '#08A647'
    }
  });