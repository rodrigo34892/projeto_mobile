import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type AlunoProps = {
    nome: string;
    nota1: number;
    nota2: number;
};

const Aluno = ({ nome, nota1, nota2 }: AlunoProps) => {
    const media = (nota1 + nota2) / 2;
    const aprovado = media >= 7;

    return (
        <View style={styles.card}>
            <Text style={styles.nome}>{nome}</Text>
            <Text>Notas: {nota1} e {nota2}</Text>
            <Text style={styles.media}>Média: {media.toFixed(1)}</Text>
            <Text style={aprovado ? styles.aprovado : styles.reprovado}>
                {aprovado ? 'Aprovado' : 'Reprovado'}
            </Text>
        </View>
    );
};


const TelaEx2 = () => {
    return (
        <View style={styles.container}>
            <Aluno nome="Rodrigo" nota1={8} nota2={9} />
            <Aluno nome="Rafael" nota1={5} nota2={6} />
            <Aluno nome="Ana" nota1={9} nota2={8} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5'
    },
    card: {
        backgroundColor: 'white',
        padding: 12,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4
    },
    media: {
        fontWeight: '600',
        marginVertical: 4
    },
    aprovado: {
        color: 'green',
        fontWeight: 'bold'
    },
    reprovado: {
        color: 'red',
        fontWeight: 'bold'
    }
});

export default TelaEx2;