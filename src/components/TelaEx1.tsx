import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Switch, Pressable, Alert, StyleSheet } from 'react-native';

const TelaEx1 = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [ativado, setAtivado] = useState(false);

  return (

    <View
      style={styles.container}>
      <Text
        style={styles.titulo}>Cadastro de Cliente</Text>

      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png' }}
        style={styles.imagem}
      />
      <Text
        style={styles.label}>Nome:</Text>
      <TextInput placeholder="Digite o nome" value={nome} onChangeText={setNome} />

      <Text
        style={styles.label}>Email:</Text>
      <TextInput placeholder="Digite o e-mail" value={email} onChangeText={setEmail} />

      <Text
        style={styles.label}>Telefone:</Text>
      <TextInput placeholder="Digite o telefone" value={telefone} onChangeText={setTelefone} />

      <Text
        style={styles.label}>Possui Comorbidade?</Text>
      <Switch
        style={styles.switchContainer}
        value={ativado}
        onValueChange={(value) => { setAtivado(value) }} />


      <Pressable
       style={({ pressed }) => [
        styles.botaoCadastrar,
        styles.Botao,
        pressed && styles.botaoPressionado]}

        onPress={() => { Alert.alert('Cadastrar') }}>
        <Text>Cadastrar</Text>
      </Pressable>

      <Pressable
        style={styles.Botao}
        onPress={() => { Alert.alert('Cancelar') }}>
        <Text>Cancelar</Text>
      </Pressable>


    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fffacd',

  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  imagem: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 600,
    color: '#495057',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 15,
  },
  Botao: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: 120,
    alignItems: 'center',
  },
  botaoCadastrar: {
    backgroundColor: '#3498db', 
  },
  botaoCancelar: {
    backgroundColor: '#e74c3c', 
  },

});


export default TelaEx1;