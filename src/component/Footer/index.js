import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Produtos from '../Produtos';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
                <Produtos img={require('../../assets/keyboard4.jpg')} cost="110,90">
                HyperX Alloy Origins 
                </Produtos>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Produtos img={require('../../assets/chargeplay2.png')} cost="360,90">
                Porta de carregamento EXT
                </Produtos>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Produtos img={require('../../assets/mic2.jpg')} cost="890">
                Pedestal flexível HyperX
                </Produtos>
            </View>
        </ScrollView> 
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})