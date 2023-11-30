import {useState, useEffect} from 'react';
import {
    View,
    XStack,
    YStack,
    Text,
    Switch
} from 'tamagui'
import { ArrowLeft } from '@tamagui/lucide-icons'
import {Modal} from 'react-native'

export default function ModalConfig({onClose}) {
  const [notificacoes, setNotificacoes] = useState(true)
  const [agenda, setAgenda] = useState(true)
  const [eventos, setEventos] = useState(true)
  const [infraestrutura, setInfraestrutura] = useState(true)
  const [noticias, setNoticias] = useState(true)
  const [editais, setEditais] = useState(true)
  const [salas, setSalas] = useState(true)

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
                                Configurações
                            </Text>
                        </YStack>
                    </XStack>
                    <YStack
                      padding={10}
                      marginTop={10}
                      gap={20}
                    >
                      {/* switc na direta e na esquerda label para Notificações, Agenda, Eventos, Infraestrututa, Notícias, Editais, Salas de Reunião */}
                        <XStack
                          justifyContent='space-between'
                          width={'100%'}
                        >
                          <YStack
                            width={'80%'}
                          >
                            <Text
                              fontSize={22}
                              fontFamily={'Inter'}
                              color={'#08A647'}
                            >Notificações</Text>
                          </YStack>
                          <YStack
                            width={'20%'}
                          >
                            <Switch
                              id='notificacoes'
                              backgroundColor={'#CCC'}
                              defaultChecked={notificacoes}
                              onChange={() => setNotificacoes(!notificacoes)}
                            >
                              <Switch.Thumb
                                animation='bouncy'
                                backgroundColor={'#08A647'}
                              />
                            </Switch>
                          </YStack>
                        </XStack>
                        <XStack
                          justifyContent='space-between'
                          width={'100%'}
                        >
                          <YStack
                            width={'80%'}
                          >
                            <Text
                              fontSize={18}
                              fontFamily={'Inter'}
                            >Agenda</Text>
                          </YStack>
                          <YStack
                            width={'20%'}
                          >
                            <Switch
                              id='notificacoes'
                              backgroundColor={'#CCC'}
                              size="$3"
                              defaultChecked={agenda}
                              onChange={() => setAgenda(!agenda)}
                            >
                              <Switch.Thumb
                                animation='bouncy'
                                backgroundColor={'#08A647'}
                              />
                            </Switch>
                          </YStack>
                        </XStack>
                        <XStack
                          justifyContent='space-between'
                          width={'100%'}
                        >
                          <YStack
                            width={'80%'}
                          >
                            <Text
                              fontSize={18}
                              fontFamily={'Inter'}
                            >Eventos</Text>
                          </YStack>
                          <YStack
                            width={'20%'}
                          >
                            <Switch
                              id='notificacoes'
                              backgroundColor={'#CCC'}
                              size="$3"
                              defaultChecked={eventos}
                              onChange={() => setEventos(!eventos)}
                            >
                              <Switch.Thumb
                                animation='bouncy'
                                backgroundColor={'#08A647'}
                              />
                            </Switch>
                          </YStack>
                        </XStack>
                        <XStack
                          justifyContent='space-between'
                          width={'100%'}
                        >
                          <YStack
                            width={'80%'}
                          >
                            <Text
                              fontSize={18}
                              fontFamily={'Inter'}
                            >Infraestrutura</Text>
                          </YStack>
                          <YStack
                            width={'20%'}
                          >
                            <Switch
                              id='notificacoes'
                              backgroundColor={'#CCC'}
                              size="$3"
                              defaultChecked={infraestrutura}
                              onChange={() => setInfraestrutura(!infraestrutura)}
                            >
                              <Switch.Thumb
                                animation='bouncy'
                                backgroundColor={'#08A647'}
                              />
                            </Switch>
                          </YStack>
                        </XStack>
                        <XStack
                          justifyContent='space-between'
                          width={'100%'}
                        >
                          <YStack
                            width={'80%'}
                          >
                            <Text
                              fontSize={18}
                              fontFamily={'Inter'}
                            >Notícias</Text>
                          </YStack>
                          <YStack
                            width={'20%'}
                          >
                            <Switch
                              id='notificacoes'
                              backgroundColor={'#CCC'}
                              size="$3"
                              defaultChecked={noticias}
                              onChange={() => setNoticias(!noticias)}
                            >
                              <Switch.Thumb
                                animation='bouncy'
                                backgroundColor={'#08A647'}
                              />
                            </Switch>
                          </YStack>
                        </XStack>
                        <XStack
                          justifyContent='space-between'
                          width={'100%'}
                        >
                          <YStack
                            width={'80%'}
                          >
                            <Text
                              fontSize={18}
                              fontFamily={'Inter'}
                            >Editais</Text>
                          </YStack>
                          <YStack
                            width={'20%'}
                          >
                            <Switch
                              id='notificacoes'
                              backgroundColor={'#CCC'}
                              size="$3"
                              defaultChecked={editais}
                              onChange={() => setEditais(!editais)}
                            >
                              <Switch.Thumb
                                animation='bouncy'
                                backgroundColor={'#08A647'}
                              />
                            </Switch>
                          </YStack>
                        </XStack>
                        <XStack
                          justifyContent='space-between'
                          width={'100%'}
                        >
                          <YStack
                            width={'80%'}
                          >
                            <Text
                              fontSize={18}
                              fontFamily={'Inter'}
                            >Salas de Reunião</Text>
                          </YStack>
                          <YStack
                            width={'20%'}
                          >
                            <Switch
                              id='notificacoes'
                              backgroundColor={'#CCC'}
                              size="$3"
                              defaultChecked={salas}
                              onChange={() => setSalas(!salas)}
                            >
                              <Switch.Thumb
                                animation='bouncy'
                                backgroundColor={'#08A647'}
                              />
                            </Switch>
                          </YStack>
                        </XStack>
                    </YStack>
                </YStack>
            </Modal>
        </View>
    )
}
