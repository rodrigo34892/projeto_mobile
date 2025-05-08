import React from 'react';
import { View, Text, TextInput, Image, Switch, Pressable, Alert, StyleSheet } from 'react-native';

const TelaEx1 = () => {

  const nome = '';
  const email = '';
  const telefone = '';
  const ativado = false;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Cliente</Text>

      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png' }}
        style={styles.imagem}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={nome}

        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o e-mail"
          value={email}
          
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
          value={telefone}
         
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Possui Comorbidade?</Text>
        <Switch
          value={ativado}
       
        />
      </View>

      <View style={styles.botoesContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.botao,
            styles.botaoCadastrar,
            pressed && styles.botaoPressionado
          ]}
          onPress={() => { Alert.alert('Cadastrar') }}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.botao,
            styles.botaoCancelar,
            pressed && styles.botaoPressionado
          ]}
          onPress={() => { Alert.alert('Cancelar') }}>
          <Text style={styles.textoBotao}>Cancelar</Text>
        </Pressable>
      </View>
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
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#495057',
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

  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  botao: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  botaoCadastrar: {
    backgroundColor: '#3498db',
  },
  botaoCancelar: {
    backgroundColor: '#e74c3c',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botaoPressionado: {
    opacity: 0.8,
  },
});

export default TelaEx1;