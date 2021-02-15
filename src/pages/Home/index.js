import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';

import Produtos from '../../component/Produtos';

export default function Home() {
 const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <Image
          source={require('../../assets/logo_mobile_ghost.jpg')}
          style={styles.image}
         />

         <View style={styles.textContainer}>
            <Text style={styles.text}>SETUP</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>•</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>GAMER</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
         </View>
       </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Produtos img={require('../../assets/mouse.jpg')} cost="R$140,90" onClick={()=> navigation.navigate('Detail') }>
          Mouse para jogos HyperX Pulsefire
          </Produtos>
          <Produtos img={require('../../assets/headset3.jpg')} cost="R$280,90" onClick={()=> navigation.navigate('Detail') }>
          HyperX Cloud Stinger™
          </Produtos>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Produtos img={require('../../assets/mic.jpg')} cost="R$560,90" onClick={()=> alert('CLICOU')}>
          HyperX QuadCast
          </Produtos>
          <Produtos img={require('../../assets/keyboard3.jpg')} cost="R$220" onClick={()=> alert('CLICOU')}>
          HyperX Alloy Core
          </Produtos>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Produtos img={require('../../assets/memory.jpg')} cost="R$120,90" onClick={()=> alert('CLICOU')}>
          HyperX Predator DDR4
          </Produtos>
          <Produtos img={require('../../assets/chargeplay.jpg')} cost="R$920" onClick={()=> alert('CLICOU')}>
          HyperX ChargePlay
          </Produtos>
        </View>

      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});