import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, ScrollView } from 'react-native';

type Paciente = {
    id: number;
    nome: string;
    idade: string;
    descricao: string;
    gravidade: number;
};

const TelaAtendimentoUPA = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [descricao, setDescricao] = useState('');
    const [gravidade, setGravidade] = useState(1);
    const [fila, setFila] = useState<Paciente[]>([]);
    const [idCounter, setIdCounter] = useState(1);

    const handleAdicionar = () => {
        if (!nome.trim() || !idade.trim() || !descricao.trim()) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }

        const novoPaciente: Paciente = {
            id: idCounter,
            nome: nome.trim(),
            idade: idade.trim(),
            descricao: descricao.trim(),
            gravidade
        };

        setFila([...fila, novoPaciente]);
        setIdCounter(idCounter + 1);
        limparCampos();
        Alert.alert('Sucesso', 'Paciente adicionado à fila!');
    };

    const limparCampos = () => {
        setNome('');
        setIdade('');
        setDescricao('');
        setGravidade(1);
    };

    const getGravidadeTexto = (nivel: number): string => {
        switch (nivel) {
            case 1: return 'Leve';
            case 2: return 'Menos Grave';
            case 3: return 'Urgência';
            case 4: return 'Muita Urgência';
            case 5: return 'Emergência';
            default: return 'Leve';
        }
    };

    const getGravidadeCor = (nivel: number): string => {
        switch (nivel) {
            case 1: return '#007bff'; // cor azul
            case 2: return '#28a745'; //  cor verde
            case 3: return '#ffc107'; //  cor amarelo
            case 4: return '#fd7e14'; //  cor laranja
            case 5: return '#dc3545'; //  cor vermelho
            default: return '#007bff';
        }
    };

    const removerPaciente = (id: number) => {
        setFila(fila.filter(paciente => paciente.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro de Pacientes - UPA</Text>

            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do paciente"
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Idade:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Idade do paciente"
                        value={idade}
                        onChangeText={setIdade}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Descrição da Enfermidade:</Text>
                    <TextInput
                        style={[styles.input, styles.descricaoInput]}
                        placeholder="Descreva os sintomas"
                        value={descricao}
                        onChangeText={setDescricao}
                        multiline
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Gravidade (1-5):</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nível de gravidade"
                        value={gravidade.toString()}
                        onChangeText={(text) => {
                            if (text === '') {
                                setGravidade(1);
                                return;
                            }
                            const num = parseInt(text);
                            if (!isNaN(num)) {
                                const gravidadeValidada = Math.max(1, Math.min(5, num));
                                setGravidade(gravidadeValidada);
                            }
                        }}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.botoesContainer}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.botao,
                            styles.botaoAdicionar,
                            pressed && styles.botaoPressionado
                        ]}
                        onPress={handleAdicionar}>
                        <Text style={styles.textoBotao}>Adicionar à Fila</Text>
                    </Pressable>

                    <Pressable
                        style={({ pressed }) => [
                            styles.botao,
                            styles.botaoLimpar,
                            pressed && styles.botaoPressionado
                        ]}
                        onPress={limparCampos}>
                        <Text style={styles.textoBotao}>Limpar</Text>
                    </Pressable>
                </View>
            </View>

            <Text style={styles.subtitulo}>Fila de Atendimento ({fila.length})</Text>

            <ScrollView style={styles.filaContainer}>
                {fila.length === 0 ? (
                    <Text style={styles.listaVazia}>Nenhum paciente na fila</Text>
                ) : (
                    fila.map((paciente) => (
                        <View
                            key={paciente.id}
                            style={[
                                styles.pacienteItem,
                                { borderLeftColor: getGravidadeCor(paciente.gravidade) }
                            ]}
                        >
                            <View style={styles.pacienteHeader}>
                                <Text style={styles.pacienteNome}>{paciente.nome}, {paciente.idade} anos</Text>
                                <Text style={[
                                    styles.pacienteGravidade,
                                    { color: getGravidadeCor(paciente.gravidade) }
                                ]}>
                                    {getGravidadeTexto(paciente.gravidade)}
                                </Text>
                            </View>
                            <Text style={styles.pacienteDescricao}>{paciente.descricao}</Text>
                            <Pressable
                                style={({ pressed }) => [
                                    styles.botaoRemover,
                                    pressed && styles.botaoPressionado
                                ]}
                                onPress={() => removerPaciente(paciente.id)}>
                                <Text style={styles.textoBotaoRemover}>Atendido</Text>
                            </Pressable>
                        </View>
                    ))
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
        color: '#343a40',
    },

    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#495057',
    },
    formContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
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
    descricaoInput: {
        height: 80,
        textAlignVertical: 'top',
    },
    botoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    botao: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    botaoAdicionar: {
        backgroundColor: '#28a745',
    },
    botaoLimpar: {
        backgroundColor: '#6c757d',
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
    },
    botaoPressionado: {
        opacity: 0.8,
    },
    filaContainer: {
        flex: 1,
        marginTop: 10,
    },
    listaVazia: {
        textAlign: 'center',
        marginTop: 20,
        color: '#6c757d',
        fontStyle: 'italic',
    },
    pacienteItem: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
        borderLeftWidth: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    pacienteHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    pacienteNome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212529',
    },
    pacienteGravidade: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    pacienteDescricao: {
        fontSize: 14,
        color: '#495057',
        marginBottom: 10,
    },
    botaoRemover: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: '#dc3545',
    },
    textoBotaoRemover: {
        color: '#fff',
        fontSize: 12,
    },
});

export default TelaAtendimentoUPA;