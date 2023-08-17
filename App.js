import React, { Component } from "react";
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ' ',
      img: require('./src/biscoito.png')

    }
    
    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'Há ainda tanta coisa linda na vida para se descobrir.',
      'Nós somos como o clima: feitos de dias de chuva e de sol!',
      'Somos capazes de fazer muito mais do que imaginamos!',
      'A palavra “impossível” foi inventada para ser desafiada.',
      'Abra os olhos e aventure-se nessa jornada chamada vida!',
      'Que todos os nossos passos nos levem para o que nos faz feliz de verdade.',
      'Os dias difíceis são a forma mais rápida de aprendermos a apreciar os bons.',
      'Hoje é um novo dia. Não fique pensando no ontem.',
      'A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.',
      'Os sonhos são a melhor forma de termos uma direção na vida e um motivo para caminhar.',

    ]
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: ' " ' + this.frases[numeroAleatorio] + ' " ',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Image
        source={this.state.img}
        style={styles.img}
        />

        <Text style={styles.textFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botão} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:240,
    height: 240,
  },
  textFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botão:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 20,
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText:{
    fontSize: 18,
    fontWeight: 'bold',
  }

});
export default App;