import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { BancoCadProps } from "../navigation/HomeNavigator";
import { styles } from "../styles/styles";
import firestore from "@react-native-firebase/firestore";

const CadastroCliente = (props: BancoCadProps) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [comorbidade, setComorbidade] = useState('');

  function cadastrar() {
    if (verificaCampos()) {
      let cliente = {
        nome,
        telefone,
        email,
        comorbidade
      };

      firestore()
        .collection('clientes')
        .add(cliente)
        .then(() => {
          Alert.alert("Cliente", "Cadastrado com sucesso!");
          props.navigation.goBack();
        })
        .catch((error) => {
          Alert.alert("Erro", String(error));
        });
    }
  }

  function verificaCampos() {
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
    if (!comorbidade) {
      Alert.alert("Comorbidade em branco", "Informe a comorbidade");
      return false;
    }

    return true;
  }

  return (
    <View style={styles.tela}>
      <Text style={styles.tituloTela}>Cadastro de Cliente</Text>

      <Text style={styles.titulo_campos}>Nome</Text>
      <TextInput
        style={styles.caixa_texto}
        onChangeText={setNome}
      />

      <Text style={styles.titulo_campos}>Telefone</Text>
      <TextInput
        style={styles.caixa_texto}
        keyboardType="phone-pad"
        onChangeText={setTelefone}
      />

      <Text style={styles.titulo_campos}>Email</Text>
      <TextInput
        style={styles.caixa_texto}
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Text style={styles.titulo_campos}>Comorbidade</Text>
      <TextInput
        style={styles.caixa_texto}
        onChangeText={setComorbidade}
      />

      <Pressable
        style={styles.botao}
        onPress={cadastrar}>
        <Text style={styles.texto_botao}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}

export default CadastroCliente;