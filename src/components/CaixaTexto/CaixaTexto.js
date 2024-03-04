import React from "react";

import { Text, View } from "react-native";
import Estilo from "./Estilo";

function CaixaTexto(props) {
    const { time } = props;
    let estilo = {

        Grêmio: {
            fontSize: 30,
            color: '#0716e1',
            backgroundColor: '#07ade1',
            padding: 16,
            borderRadius: 16,
            borderStyle: 'dotted',
            borderColor: '#fff',
        },
        Internacional: {
            fontSize: 30,
            color: '#f30f1a',
            backgroundColor: '#e6676d',
            padding: 16,
            borderRadius: 16,
            borderStyle: 'dotted',
            borderColor: '#fff',
        }

    }
    return <View>
        <Text style={estilo[time]}>{props.time}! {props.façanha}</Text>
    </View>
}

export default CaixaTexto;

