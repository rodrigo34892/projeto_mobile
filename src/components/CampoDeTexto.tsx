import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { CampoDeTextoProps } from '../navigation/HomeNavigator';


const CampoDeTexto = (props: CampoDeTextoProps) => {
    const [texto, setTexto] = useState('');

    return (

        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={texto}
                onChangeText={setTexto}
                placeholder="Digite algo... "
            />


            <Button
                title="Enviar"
                onPress={() => {
                    props.route.params.onPressBotao(texto);
                    setTexto('');
                }}

            />


        </View>
    );



};

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,

    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },



});


export default CampoDeTexto;


