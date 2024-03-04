import React from "react";
import { Image } from 'react-native';


function ImageGremio(props) {
     const { time } = props;
     let logos = {
          Internacional: require('./inter.png'),
          Grêmio: require('./gremio.png')
     }
     return <Image source={logos[time]} />

}

export default ImageGremio;