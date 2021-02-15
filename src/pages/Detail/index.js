import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {

  navigation.setOptions({
     headerTitle: 'Mouse HyperX Pulsefire'
  })

 return (
   <ScrollView style={styles.container}>
       <Image
       source={require('../../assets/mouse.jpg')}
       style={styles.image}
       resizeMode="cover"
       />

       <View>
         <View>
           <Text style={[styles.title, { fontSize: 24 } ]}>R$ 280,90</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 30 } ]}>HyperX Pulsefire</Text>
         </View>

         <View style={styles.dotContainer}>
          <Dot color="#17181a" />
          <Dot color="#FF1493" />
          <Dot color="#00008B" />
          <Dot color="#FFF" />
         </View>

         <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#FFF" >Preto</SizeButton>
            <SizeButton bgColor="#FF1493" color="#FFF">Rosa</SizeButton>
            <SizeButton bgColor="#00008B" color="#FFF">Azul</SizeButton>
            <SizeButton bgColor="#FFF" color="#000">Branco</SizeButton>
          </ScrollView>
         </View>

         <View style={styles.textContent}>
          <Text style={styles.textTitle}>
          HyperX Pulsefire
          </Text>
          <Text style={styles.textContent}>
            O TO HyperX Pulsefire Surge™ oferece aos jogadores o melhor em estilo e conteúdo, oferecendo extrema precisão graças a seu sensor Pixart 3389 e efeitos de iluminação RGB espetaculares em 360° com seu exclusivo anel de luzes. O Pulsefire Surge possui configurações DPI nativas até 16.000 DPI para uma precisão que vai satisfazer até os gamers mais exigentes. Switches Omron com capacidade para 50 milhões de cliques asseguram que assim que você tenha aquele tiro na mira, seu clique será registrado. Personalize o DPI do mouse, defina cores de LED individualizadas, atribua macros e salve diretamente no seu mouse com o software HyperX NGenuity. O Pulsefire Surge também vem equipado com grandes skates para permitir um deslizar suave e controlado.
          </Text>
          <Text style={styles.textList}>
            - Categoria: Mouse Gamer
          </Text>
          <Text style={styles.textList}>
            Garantia: 5 anos
          </Text>
         </View>

        <Button/>

        <View style={styles.line} />

        <Footer/>

       </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});