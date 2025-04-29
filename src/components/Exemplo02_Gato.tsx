import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/styles';

/*
Tenho uma constante que contém uma função mas que não
é um componente React Native pois ela não retorna
as tags React Native
*/
const getNomeCompleto = (primeiroNome: string, nomeMeio: string, ultimoNome: string) => {
  return primeiroNome + ' ' + nomeMeio + ' ' + ultimoNome;
};

/*
Gato é um componente React Native pois retorna as tags.
No retorno das funções é possível adicionar javascrit
com as chaves {}, o que estiver dentro será javascript
no caso do componente Gato eu consigo chamar a função
getNomeCompleto para montar o texto da tag Text
*/

const Gato = () => {
  //Posso colocar javascript aqui antes do return

  //O retorno tem que ser as tags React Native, mas podem conter javascript dentro de chaves {}
  return (
    <Text style={styles.titulo1}> {/* o que estiver dentro de chaves{} é javascript no meio dos componentes ReactNative */}
      
      {/* Esse comentário é javascript, está dentro de chaves{} */}

      Olá, eu sou o gato 
      {getNomeCompleto('Fulano', 'da Silva', 'Sauro')} !
    </Text>
  )
};

export default Gato;