import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';


export default class App extends React.Component {
    constructor(){
      super();
      this.state = {
        tempo:''
      }
    }
    componentDidMount(){
      this.pegarTempo()
    }
  
  pegarTempo= async()=>{
    var link = 'https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&APPID=143454aa39bbe3442a890cdbf3f9db36';
      return fetch(link)
      .then(response=>response.json())
      .then(responseJson=>{
        //código para armazenar a resposta da API 
        //na propriedade tempo do state
        this.setState({tempo: responseJson})
      })
      .catch(error=>{
        console.error(error)
      })
  }

  render(){
    if(this.state.tempo==''){
       return (
    
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Carregando... 
      </Text>
    </View>
  );
    } else{
  return (
    
    <View style={styles.container}>
    <View style={styles.subContainer}>
      <Text style={styles.title}>
      Previsão do Tempo
      </Text>
        <Image 
        source={require("./nuvens.png")} 
        style= {styles.imagem}/>
        <Text> Nome: {this.state.tempo.name}</Text>
        <Text> Temperatura : {this.state.tempo.main.temp}ºC</Text>
        <Text> Clima : {this.state.tempo.weather[0].main}</Text>
        <Text> Descrição : {this.state.tempo.weather[0].description}</Text>
    </View>

    </View>
   );
}
}
}


const styles = StyleSheet.create({
 container: {
   flex:1
  },
  subContainer : { 
    flex: 1, 
    borderWidth: 1, 
    alignItems: 'center' 
    },
    title:{ 
      marginTop: 50, 
      fontSize: 30,
      fontWeight: '550' 
    },
    imagem :{ 
      width: 150, 
      height: 150, 
      marginTop: 30 
    },
    textContainer : { 
      flex: 1,
      alignItems: 'center', 
      flexDirection:'row', 
      marginTop:-150
    }
});
