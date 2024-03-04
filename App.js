import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Agrupador from './src/components/Agrupador/Agrupador';

export default function App() {
  return (
    <View style={styles.container}>
      {times.map((time) => <Agrupador time={time.time} façanha={time.façanha} styles={styles.item} />
        // <CaixaTime time={time.time} façanha={time.façanha} styles={styles.item} />

      )}

    </View>
  );
}
let times = [{
  time: 'Grêmio',
  façanha: 'O único tri-rebaixado de Porto Alegre'
},
{
  time: 'Internacional',
  façanha: 'O único campeão do mundo de Porto Alegre'
}]

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  item: {
    margin: 10, // You can adjust this value
  },
});