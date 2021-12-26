import React from 'react';
import {StyleSheet, View, Image, Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpeg';

const App = () => {

    function handleRedeSocial(rede_social){
      switch(rede_social){
        case 'linkedin':
          Alert.alert('Meu Linkedin:','https://www.linkedin.com/in/mauricio-aparecido-picirillo-34907246/')
        break
        case 'facebook':
        Alert.alert('Meu Facebook:','https://www.facebook.com/mauricio.aparecidopicirillo')
        break
        case 'github':
          Alert.alert('Meu GitHub:','https://github.com/mauriciopicirillo')
        break  
      }
    }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>MAURICIO AP. PICIRILLO</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_socias}>
           
            <TouchableOpacity onPress={() => handleRedeSocial('github')}> 
              <Icon name="github" size={30} /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}> 
              <Icon name="facebook" size={30} /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}> 
              <Icon name="linkedin" size={30} /> 
            </TouchableOpacity>
                       
          </View>
        </View>

        <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>Experiencia Profissional</Text>
          </View>
          <View style={style.card_content}>
          <Text style={style.card_content_text}>Ditus Company</Text>
          <Text style={style.card_content_text}>Rafard World Club</Text>
          <Text style={style.card_content_text}>Hersheys</Text>
          </View>
        </View>
        </View>

        <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>Formação Academica</Text>
          </View>
          <View style={style.card_content}>
          <Text style={style.card_content_text}>Cruzeiro do Sul</Text>
          <Text style={style.card_content_text}>Digital Innovation One</Text>
          <Text style={style.card_content_text}>Microcamp</Text>
          </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
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

  redes_socias: {
    fontSize: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20,
  },

  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF',
  },
  
  card_content: {
    marginTop: 10,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  }
});

export default App;
