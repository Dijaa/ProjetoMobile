import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CaixaTexto from './src/components/CaixaTexto/CaixaTexto';
import ImageGremio from './src/components/ImageGremio/ImageGremio';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <ImageGremio />
      </View>
      <View style={styles.item}>
        <CaixaTexto />
      </View>
    </View>
  );
}

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