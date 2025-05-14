import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Lista = () => {
    const [texto, setTexto] = useState('');
    const [itens, setItens] = useState<string[]>([]);

    //estado para armazenar a frase selecionada
    const [fraseSelecionada, setFraseSelecionada] = useState('');

    const adicionarItem = () => {
        if (texto.trim()) {
            setItens([...itens, texto]);
            setTexto(''); // limpa o campo 
        }
    };

    // função para o click
    const selecionarItem = (item: string) => {
        setFraseSelecionada(item); // atualiza o estado com o item clicado
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={texto}
                    onChangeText={setTexto}
                    placeholder="Digite um item"
                />
                <Button title="Adicionar" onPress={adicionarItem} />
            </View>

            <FlatList
                data={itens}
                renderItem={({ item }) => (
                    //touchableopacity para torna clicável
                    <TouchableOpacity onPress={() => selecionarItem(item)}>
                        <Text style={styles.item}>Nome: {item}</Text>
                    </TouchableOpacity>
                )}
            />

            {fraseSelecionada ? (
                <Text style={styles.fraseSelecionada}>
                    Frase selecionada: {fraseSelecionada}
                </Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 4,
        marginRight: 8,
        borderRadius: 6,
    },
    item: {
        padding: 8,
        fontSize: 25,
        color: 'black',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        margin: 5,
    },

    fraseSelecionada: {
        fontSize: 20,
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        textAlign: 'center',
    },
});

export default Lista;