import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import Lista from "../components/Listas";
import CampoDeTexto from "../components/CampoDeTexto";
import TelaEx2 from "../components/TelaEx2";
import GravarCliente from "../components/GravarCliente"; 
import TelaAtendimentoUPA from "../components/TeleAtendimentoUPA";

type RootStackParamList = {
  TelaPrincipal: undefined;
  Listas: undefined;
  CampoDeTexto: { onPressBotao: (texto: string) => void };
  TelaEx2: { nome: string; nota1: number; nota2: number };
  GravarCliente: undefined; 
  TeleAtendimentoUPA: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
      <Stack.Screen name="GravarCliente" component={GravarCliente} /> 
      <Stack.Screen 
        name="TeleAtendimentoUPA" 
        component={TelaAtendimentoUPA}
        options={{ 
          headerShown: true,
          title: 'Atendimento UPA'
        }} 
      />
    </Stack.Navigator>
  );
}

// Atualize os tipos de props
type TelaPrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;
type ListasProps = NativeStackScreenProps<RootStackParamList, 'Listas'>;
type CampoDeTextoProps = NativeStackScreenProps<RootStackParamList, 'CampoDeTexto'>;
type TelaEx2Props = NativeStackScreenProps<RootStackParamList, 'TelaEx2'>;
type GravarClienteProps = NativeStackScreenProps<RootStackParamList, 'GravarCliente'>; 
type TeleAtendimentoUPAProps = NativeStackScreenProps<RootStackParamList, 'TeleAtendimentoUPA'>;

export default HomeNavigator;

export type {
  TelaPrincipalProps,
  ListasProps,
  CampoDeTextoProps,
  TelaEx2Props,
  GravarClienteProps, 
  TeleAtendimentoUPAProps
};