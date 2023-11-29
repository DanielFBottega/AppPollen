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
    Label,
  } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'
import DatePicker from "expo-datepicker";
import { Plus, Check, X, ChevronDown, ChevronUp, Calendar } from '@tamagui/lucide-icons'
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
    const [date, setDate] = useState(new Date().toString())
    const [datepicker, setDatePicker] = useState(false)
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
                        width={230}
                        marginBottom={20}
                        justifyContent='space-between'
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
                    <YStack
                      gap={15}
                    >
                        {/* SELECT */}
                        <Label
                          htmlFor='empresa'
                          marginBottom={-15}
                        >Empresa</Label>
                        <Select
                          id="empresa"
                          value={selectedEmpresa}
                          onValueChange={(value) => setSelectedEmpresa(value)}
                          disablePreventBodyScroll
                        >
                          <Select.Trigger iconAfter={ChevronDown}                          >
                            <Select.Value placeholder="Empresas"/>
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
                          <Select.Content>
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
                        {/* input para colocar a data com mascara e icone no lado para abrir datepicker */}
                        <View>
                        <DatePicker
                          date={date}
                          onDateChange={(date) => setDate(date)}
                        />
                        </View>
                        {/* TIMEPICKER */}
                        <Label
                          htmlFor='horario'
                          marginBottom={-15}
                        >Horário</Label>
                        <Input
                            id='horario'
                            placeholder='Horário'
                            value={start}
                            onChangeText={setStart}
                        />
                        {/* select da SALA */}
                        <Label
                          htmlFor='sala'
                          marginBottom={-15}
                        >Sala</Label>
                        <Select
                          id="sala"
                          value={selectedSala}
                          onValueChange={(value) => setSelectedSala(value)}
                          disablePreventBodyScroll
                        >
                          <Select.Trigger iconAfter={ChevronDown}                          >
                            <Select.Value placeholder="Salas"/>
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
                          <Select.Content>
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
                                <Select.Label>Sala</Select.Label>
                                {/* for longer lists memoizing these is useful */}
                                {
                                    salas.map((item, i) => {
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
                        {/* Observações */}
                        <Label
                          htmlFor='descricao'
                          marginBottom={-15}
                        >Observações</Label>
                        <TextArea
                          id='descricao'
                          placeholder='Observações'
                          value={descricao}
                          onChangeText={setDescricao}
                        />
                    </YStack>
                    <Button
                        backgroundColor={'#ACCF80'}
                        borderRadius={10}
                        marginTop={20}
                        onPress={() => setOpen(false)}
                    >
                        <Text>Confirmar</Text>
                    </Button>
                </Form>
            </View>
            </Modal>
        </View>
    )
}