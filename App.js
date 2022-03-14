import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

export default function App() {
  const [showHome, setShowHome] =useState(false)

  const slides = [
    {
      key : 1 ,
      title : 'Naruto',
      text : 'Jovem orfão, que no futuro se tornara o 7 hokage',
      image : require('./src/assets/Naruto.png')
    },
    {
      key : 2,
      title : 'Luffy',
      text : 'Pirata que estica, quer se torna o rei dos piratas',
      image : require('./src/assets/Luffy.jpeg')
    },
    {
      key : 3,
      title : 'Hinata Shoyo',
      text : 'menino pequeno que pula alto, quer se torna o pequeno gigante no vôlei',
      image : require('./src/assets/Hinata2.png')
    }
  ]

  const renderSlides = ({item}) =>{
    return(
      <View >
        <Image source={item.image}  style={{resizeMode : 'cover', 
          height : '400px',
          width : '100%' ,}}/>
        <Text> 
          {item.title}
        </Text>
        <Text>
          {item.text}
        </Text>

          
      </View>
    )

  }

  if(showHome) {
    return(
     <Text>
        Entrou na Home
     </Text>
    )
  } else{

  
  return (
    <AppIntroSlider renderItem={renderSlides}
    data={slides}
    activeDotStyle={{
      backgroundColor : '#009CFF', 
      width : 30 }}/>
    
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
