import React from 'react';
import Camera from './src/pages/camera/Camera';
import Profile from './src/pages/profile/Pofile';
import {SafeAreaView, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Camera/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Isso assegura que SafeAreaView use todo o espaço disponível
  }
});

export default App;
