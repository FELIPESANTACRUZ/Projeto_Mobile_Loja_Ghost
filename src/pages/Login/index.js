import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';


import styles from './style';
// import Fundo from '../../assets/fundo.jpg';

const apiUsuario = {
    id: 1,
    email: "ghost@streamer.com",
    senha: "123"
}

 function Login({ navigation }) {
    function autenticacao(){   
        if (apiUsuario.email === usuario) {
            Alert.alert("Usuario válido")
            navigation.navigate("tarefas");
        }else {
            Alert.alert("usuario inválido", "Este usuário não existe!")
        }
    }
    const [usuario, setUsuario] = React.useState("")
    const [senha, setSenha] = React.useState("")

        return (
            <View style={styles.caixa}>
            {/* <ImageBackground source={Fundo} style={styles.fundo}> */}

                <View>
                    <Text style={styles.titulo}>Login</Text>
                </View>

                <View style={styles.inputs}>

                    <TextInput placeholder="Digite o email..." style={styles.input}
                     value={usuario}
                         onChangeText={(text) => setUsuario(text)}
                     />
                    <TextInput placeholder="Digite o senha..." style={styles.input} secureTextEntry={true}
                         value={senha}
                         onChangeText={(text) => setSenha(text)}
                     />

                    <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                        <Text style={styles.texto}>Entrar</Text>
                    </TouchableOpacity>

                </View>
                
            {/* </ImageBackground> */}
            <Button
            title="Home"
            onPress={ () => navigation.navigate('Home')} />

        </View>
    )
    }

    export default Login;


    


