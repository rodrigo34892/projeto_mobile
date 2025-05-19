import React, { useState } from 'react';
import { View, Text, TextInput, Image, Switch, Pressable, Alert, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const GravarCliente = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [comorbidade, setComorbidade] = useState(false);

  const handleCadastrar = () => {
    if (verificaCampos()) {
      let cliente = {
        nome,
        telefone,
        email,
        comorbidade: comorbidade ? 'Sim' : 'Não'
      };

      firestore()
        .collection('clientes')
        .add(cliente)
        .then(() => {
          Alert.alert("Cliente", "Cadastrado com sucesso!");
          limparCampos();
        })
        .catch((error) => {
          Alert.alert("Erro", String(error));
        });
    }
  };

  const verificaCampos = () => {
    if (!nome) {
      Alert.alert("Nome em branco", "Digite um nome");
      return false;
    }
    if (!telefone) {
      Alert.alert("Telefone em branco", "Digite um telefone");
      return false;
    }
    if (!email) {
      Alert.alert("Email em branco", "Digite um email");
      return false;
    }
    return true;
  };

  const limparCampos = () => {
    setNome('');
    setEmail('');
    setTelefone('');
    setComorbidade(false);
  };

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
          onChangeText={setNome}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Possui Comorbidade?</Text>
        <Switch
          value={comorbidade}
          onValueChange={setComorbidade}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={comorbidade ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      <View style={styles.botoesContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.botao,
            styles.botaoCadastrar,
            pressed && styles.botaoPressionado
          ]}
          onPress={handleCadastrar}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.botao,
            styles.botaoCancelar,
            pressed && styles.botaoPressionado
          ]}
          onPress={limparCampos}>
          <Text style={styles.textoBotao}>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  );
};

// Mantenha os mesmos estilos do TelaEx1 original
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

export default GravarCliente;