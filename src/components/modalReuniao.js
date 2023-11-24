import {useState} from 'react';
import {
    View,
    XStack,
    Image,
    YStack,
    Text,
    Button,
    Form,
    Input,
    TextArea,
    Select,
    Adapt,
    Sheet,
  } from 'tamagui'
  import { LinearGradient } from 'tamagui/linear-gradient'
  import { Plus, Check, X, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
  import {Modal} from 'react-native'

export default function ModalReuniao() {
    const [open, setOpen] = useState(false)
    const [empresas, setEmpresas] = useState([
        {
            label: 'Dimo',
            value: 1
        },
        {
            label: 'Demo',
            value: 2
        },
        {
            label: 'Mido',
            value: 3
        },
        {
            label: 'Modo',
            value: 4
        },
    ])
    const [selectedEmpresa, setSelectedEmpresa] = useState(1)
    const [salas, setSalas] = useState([
        {
            label: '1º/Mezanino',
            value: 1
        },
        {
            label: '2º/Mezanino',
            value: 2
        },
        {
            label: '3º Andar',
            value: 3
        },
        {
            label: '4º Andar',
            value: 4
        },
    ])
    const [selectedSala, setSelectedSala] = useState('')
    const [date, setDate] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [descricao, setDescricao] = useState('')
    const [error, setError] = useState('')


    return(
        <View>
            <View
                onPress={() => setOpen(true)}
            >
            <Plus
                size={30}
                color='#fff'
            />
            </View>
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
                backgroundColor={'rgba(0,0,0,0.3)'}

            >
                <Form
                    backgroundColor={'#fff'}
                    padding={10}
                    borderRadius={10}

                >
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
                        >Reservar Sala</Text>
                        <Button
                            size='$1'
                            backgroundColor={'transparent'}
                            borderRadius={5}
                            onPress={() => setOpen(false)}
                        >
                            <X
                                size={25}
                                color='#08A647'
                            />
                        </Button>
                    </XStack>
                    <YStack>
                        {/* SELECT */}
                        <Select
                          id="food"
                          value={selectedEmpresa}
                          onValueChange={(value) => setSelectedEmpresa(value)}
                          disablePreventBodyScroll
                        >
                          <Select.Trigger width={220} iconAfter={ChevronDown}>
                            <Select.Value placeholder="Something" />
                          </Select.Trigger>
                          <Adapt when="sm" platform="touch">
                            <Sheet
                              modal
                              dismissOnSnapToBottom
                              animationConfig={{
                                type: 'spring',
                                damping: 20,
                                mass: 1.2,
                                stiffness: 250,
                              }}
                            >
                              <Sheet.Frame>
                                <Sheet.ScrollView>
                                  <Adapt.Contents />
                                </Sheet.ScrollView>
                              </Sheet.Frame>
                              <Sheet.Overlay
                                animation="lazy"
                                enterStyle={{ opacity: 0 }}
                                exitStyle={{ opacity: 0 }}
                              />
                            </Sheet>
                          </Adapt>
                          <Select.Content zIndex={200000}>
                            <Select.ScrollUpButton
                              alignItems="center"
                              justifyContent="center"
                              position="relative"
                              width="100%"
                              height="$3"
                            >
                              <YStack zIndex={10}>
                                <ChevronUp size={20} />
                              </YStack>
                              <LinearGradient
                                start={[0, 0]}
                                end={[0, 1]}
                                fullscreen
                                colors={['$background', 'transparent']}
                                borderRadius="$4"
                              />
                            </Select.ScrollUpButton>
                            <Select.Viewport
                              // to do animations:
                              // animation="quick"
                              // animateOnly={['transform', 'opacity']}
                              // enterStyle={{ o: 0, y: -10 }}
                              // exitStyle={{ o: 0, y: 10 }}
                              minWidth={200}
                            >
                              <Select.Group>
                                <Select.Label>Empresa</Select.Label>
                                {/* for longer lists memoizing these is useful */}
                                {
                                    empresas.map((item, i) => {
                                      return (
                                        <Select.Item
                                          debug="verbose"
                                          index={i}
                                          key={item.value}
                                          value={item.value}
                                        >
                                          <Select.ItemText>{item.label}</Select.ItemText>
                                          <Select.ItemIndicator marginLeft="auto">
                                            <Check size={16} />
                                          </Select.ItemIndicator>
                                        </Select.Item>
                                      )
                                    })
                                  }
                              </Select.Group>
                              {/* Native gets an extra icon */}
                            </Select.Viewport>
                            <Select.ScrollDownButton
                              alignItems="center"
                              justifyContent="center"
                              position="relative"
                              width="100%"
                              height="$3"
                            >
                              <YStack zIndex={10}>
                                <ChevronDown size={20} />
                              </YStack>
                              <LinearGradient
                                start={[0, 0]}
                                end={[0, 1]}
                                fullscreen
                                colors={['transparent', '$background']}
                                borderRadius="$4"
                              />
                            </Select.ScrollDownButton>
                          </Select.Content>
                        </Select>
                        {/* DATEPICKER */}
                        <Input
                            placeholder='Data'
                            value={date}
                            onChangeText={setDate}
                        />
                        {/* TIMEPICKER */}
                        <Input
                            placeholder='Início'
                            value={start}
                            onChangeText={setStart}
                        />
                        {/* TIMEPICKER */}
                        <Input
                            placeholder='Fim'
                            value={end}
                            onChangeText={setEnd}
                        />
                    </YStack>
                </Form>
            </View>
            </Modal>
        </View>
    )
}