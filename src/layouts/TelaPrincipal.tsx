import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import { TelaPrincipalProps } from '../navigation/HomeNavigator';
import Exemplo01 from '../components/Exemplo01';
import Exemplo1 from '../components/Exemplo1';
import Exemplo05_Text from '../components/Exemplo05_Text';
import Exemplo06_TextInput from '../components/Exemplo06_TextInput';
import Exemplo07_Image from '../components/Exemplo07_Image';
import TelaEx1 from '../components/TelaEx1';
import TelaEx2 from '../components/TelaEx2';
import Exemplo14_ParametroFunction from '../components/Exemplo14_ParametroFunction';
import CampoDeTexto from '../components/CampoDeTexto';
import Aluno from '../components/TelaEx2'; 
import Lista from '../components/Listas';
import BancoCad from '../components/BancoCad';
import TelaAtendimentoUPA from '../components/TeleAtendimentoUPA';
import GravarCliente from '../components/GravarCliente';

const TelaPrincipal = (props: TelaPrincipalProps) => {
    return (
        <View style={{ flex: 1 }}>
            <Pressable
                style={styles.botaoNavegacao}
                onPress={() => props.navigation.navigate("GravarCliente")} 
            >
                <Text style={styles.textoBotao}>Gravar Cliente</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    botaoNavegacao: {
        backgroundColor: '#28a745',
        padding: 15,
        margin: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default TelaPrincipal;
