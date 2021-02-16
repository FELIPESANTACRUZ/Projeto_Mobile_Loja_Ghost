import { StyleSheet, Plataform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height:"100%"

        //web 100vh
    },
    // caixa: {
    //     height: Platform.OS === "web" ? "100vh" : "100%"

    //     //web 100vh
    // },
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        color: "white",
        fontSize: 32
    },
    inputs: {
        width: "100%",
        padding: 8
    },
    input: {
        backgroundColor: "white",
        width: "100%",
        padding: 8,
        marginTop: 12
    },
    btn:{
        backgroundColor: "#6A5ACD",
        marginTop: 12,
        padding: 8,
        borderRadius: 4
     },
     textologin:{
         fontSize: 18,
         color: "white",
         textAlign: 'center',
        paddingBottom: "20px"
     }
})

export default styles;
