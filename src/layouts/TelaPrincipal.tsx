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
import Aluno from '../components/TelaEx2'; // componente aluno que está como TelaEx2
import Lista from '../components/Listas';
import BancoCad from '../components/BancoCad';

const TelaPrincipal = (props: TelaPrincipalProps) => {
    return (

        <View style={{ flex: 1 }}>
            <Pressable
            onPress={()=> {props.navigation.navigate("BancoCad")}}>

                <Text> Teste </Text>

            </Pressable>
        </View>
    );
};


export default TelaPrincipal;
