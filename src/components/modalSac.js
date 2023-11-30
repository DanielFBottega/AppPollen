import {useState, useEffect} from 'react';
import {
    View,
    XStack,
    YStack,
    Text,
    TextArea,
    Label,
    Button
} from 'tamagui'
import { ArrowLeft } from '@tamagui/lucide-icons'
import {Modal} from 'react-native'

export default function ModalSac({onClose}) {
  const [sugestao, setSugestao] = useState('')


    return(
        <View>
            <Modal
                visible={true}
                animationType='slide'
                transparent={true}
                onRequestClose={() => {
                    onClose()
                }}

            >
                <YStack
                    f={1}
                    backgroundColor={'#f2f2f2'}
                >
                    {/* cabeçalho com seta de voltar que fecha o modal */}
                    <XStack
                        width={'100%'}
                        borderRadius={10}
                        padding={10}
                        marginTop={10}
                    >
                        <YStack
                            onPress={() => {
                              onClose()
                            }}
                            justifyContent='center'
                            alignItems='center'
                        >
                            <ArrowLeft
                                size={30}
                                color={'#08A647'}
                            />
                        </YStack>
                        <YStack
                          justifyContent='center'
                          alignItems='center'
                          width={'80%'}
                        >
                            <Text
                                display='auto'
                                justifyContent='center'
                                fontFamily={'Inter'}
                                fontSize={24}
                            >
                                SAC
                            </Text>
                        </YStack>
                    </XStack>
                    <YStack>
                      <Text
                        fontFamily={'Inter'}
                        fontSize={20}
                        padding={10}
                        justifyContent='center'
                        alignItems='center'
                        textAlign='center'
                      >
                      Esse é o espaço onde você pode fazer sugestões de melhorias
                      </Text>
                    </YStack>
                    <YStack
                      padding={10}
                      marginTop={10}
                      gap={20}
                    >
                      <Label
                        htmlFor='sugestao'
                        fontSize={18}
                        fontFamily={'Inter'}
                        marginBottom={-15}
                      >
                        Deixe sua sugestão:
                      </Label>
                      <TextArea
                        id='sugestao'
                        value={sugestao}
                        onChange={e => setSugestao(e.target.value)}
                        fontFamily={'Inter'}
                        fontSize={18}
                        padding={10}
                        backgroundColor={'#fff'}
                        borderRadius={10}
                        height={500}
                        borderColor={'#08A647'}
                      />
                      <Button
                        backgroundColor={'#08A647'}
                        borderRadius={10}
                        padding={10}
                        justifyContent='center'
                        alignItems='center'
                        fontFamily={'Inter'}
                        fontSize={18}
                      >
                        Enviar
                      </Button>
                    </YStack>
                </YStack>
            </Modal>
        </View>
    )
}
