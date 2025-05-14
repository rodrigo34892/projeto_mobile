import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TelaEx2Props } from '../navigation/HomeNavigator';



const Aluno = (props: TelaEx2Props) => {
    const media = (props.route.params.nota1 + props.route.params.nota2) / 2;
    const aprovado = media >= 7;

    return (
        <View style={styles.card}>
            <Text style={styles.nome}>{props.route.params.nome}</Text>
            <Text style={styles.notas}>Notas: {props.route.params.nota1} e {props.route.params.nota2}</Text>
            <Text style={styles.media}>Média: {media.toFixed(1)}</Text>

            {aprovado ? (
                <View style={styles.mensagemContainer}>
                    <Text style={styles.aprovadoTitulo}>Parabéns!</Text>
                    <Text style={styles.aprovadoTexto}>Você foi aprovado!</Text>
                    <Text style={styles.aprovadoTexto}>Continue assim!</Text>
                </View>
            ) : (
                <View style={styles.mensagemContainer}>
                    <Text style={styles.reprovadoTitulo}>Que pena!</Text>
                    <Text style={styles.reprovadoTexto}>Você não atingiu a média!</Text>
                    <Text style={styles.reprovadoTexto}>Não fique desanimado, estude mais na próxima!</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        elevation: 3
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 4,
        color: '#333'
    },
    notas: {
        fontSize: 14,
        color: '#555',
        marginBottom: 4
    },
    media: {
        fontWeight: '600',
        fontSize: 15,
        marginVertical: 6,
        color: '#444'
    },
    mensagemContainer: {
        marginTop: 8,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    aprovadoTitulo: {
        color: '#2e7d32',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4
    },
    aprovadoTexto: {
        color: '#2e7d32',
        fontSize: 14
    },
    reprovadoTitulo: {
        color: '#c62828',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4
    },
    reprovadoTexto: {
        color: '#c62828',
        fontSize: 14
    }
});

export default Aluno;