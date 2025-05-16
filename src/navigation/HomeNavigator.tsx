import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import Lista from "../components/Listas"; 
import CampoDeTexto from "../components/CampoDeTexto";
import TelaEx2 from "../components/TelaEx2";
import BancoCad from "../components/BancoCad";

// Define quais as telas e os parâmetros de cada tela
type RootStackParamList = {
  TelaPrincipal: undefined; 
  Listas: undefined;
  CampoDeTexto: {onPressBotao: (texto:string) => void};
  TelaEx2: {nome: string; nota1: number; nota2: number;}; 
  BancoCad: undefined;
};

// Cria a Stack
const Stack = createNativeStackNavigator<RootStackParamList>();

// Cria o navegador da pilha
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TelaPrincipal"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="Listas" component={Lista} />
      <Stack.Screen name="CampoDeTexto" component={CampoDeTexto} /> 
      <Stack.Screen name="TelaEx2" component={TelaEx2} />
      <Stack.Screen name="BancoCad" component={BancoCad} />
    </Stack.Navigator>
  );
}

// Tipos para as props de navegação
type TelaPrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;
type ListasProps = NativeStackScreenProps<RootStackParamList, 'Listas'>; 
type CampoDeTextoProps = NativeStackScreenProps<RootStackParamList, 'CampoDeTexto'>;
type TelaEx2Props = NativeStackScreenProps<RootStackParamList, 'TelaEx2'>;
type BancoCadProps = NativeStackScreenProps<RootStackParamList, 'BancoCad'>;

export default HomeNavigator;

// Exporta todos os tipos
export type {
  TelaPrincipalProps,
  ListasProps,
  CampoDeTextoProps,
  TelaEx2Props,
  BancoCadProps
};