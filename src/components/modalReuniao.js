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