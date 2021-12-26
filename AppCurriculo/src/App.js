import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpeg';

const App = () => {
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>MAURICIO AP. PICIRILLO</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View>
            <Icon name="github" size={30} />
            <Icon name="github" size={30} />
            <Icon name="github" size={30} />
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },

  container_cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },

  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
