import React from 'react';
import { View, Text, Button } from 'react-native';

const tarefas = [
    {
        nome: "Compras"
    },
    {
        nome: "Lavar louça"
    }
]

function Tarefas() {
    return (
        <View>

            {
                tarefas.map((tarefa, index) => 
                    <Text key={index}>{tarefa.nome}</Text>
                )
            }

            <Button
            title="Home"
            onPress={ () => navigation.navigate('Home')} />


        </View>
    )
}

export default Tarefas;