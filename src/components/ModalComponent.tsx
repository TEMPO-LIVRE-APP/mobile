import { useState } from "react";
import { View, StyleSheet, Modal, Text, Button } from "react-native"

const ModalComponent = (text: string) => {

    const onModalClosed = () => setIsVisible(false);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={onModalClosed}
            >
                <View style={[styles.centeredView, styles.modalView]}>
                <Text style={styles.textStyle}>{text}</Text>
                <Button title="Close Modal" onPress={onModalClosed} />
                </View>
            </Modal>
            <Button title="Show Modal" onPress={() => setIsVisible(true)} />
        </View>
    )
}

export default ModalComponent;

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
height: 2,
width: 0,
},
},
textStyle: {
fontWeight: 'bold',
textAlign: 'center',
},
});