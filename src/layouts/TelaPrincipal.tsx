import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import Exemplo01 from '../components/Exemplo01';
import Exemplo1 from '../components/Exemplo1';
import Exemplo05_Text from '../components/Exemplo05_Text';
import Exemplo06_TextInput from '../components/Exemplo06_TextInput';
import Exemplo07_Image from '../components/Exemplo07_Image';
import TelaEx1 from '../components/TelaEx1';
import TelaEx2 from '../components/TelaEx2';
import Exemplo14_ParametroFunction from '../components/Exemplo14_ParametroFunction';
import CampoDeTexto from '../components/CampoDeTexto';



const TelaPrincipal = () => {
  const handleTextoEnviado = (texto: string) => {
    Alert.alert('Texto Digitado', texto);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <CampoDeTexto onPressBotao={handleTextoEnviado} />
    </View>
  );
};


//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;
