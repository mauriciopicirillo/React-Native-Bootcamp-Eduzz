import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import foto from './assets/foto.jpeg';

const App = () => {
    return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto}/>
        </View>

      </View>
    </> 
  );
};

const style = StyleSheet.create({
  page:{
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
  }
})


export default App;
