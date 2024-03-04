import React from "react";

import CaixaTexto from '../CaixaTexto/CaixaTexto';
import ImageGremio from '../ImageGremio/ImageGremio';

import { Text, View } from "react-native";

function Agrupador(props) {
    const { styles, time, façanha } = props;
    return (
        <>
            <View >
                <ImageGremio style={styles}  time={time}/>
            </View>
            <View style={styles} >
                <CaixaTexto time={time} façanha={façanha} />
            </View>
        </>)
}

export default Agrupador;

