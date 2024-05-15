/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Profile from './src/pages/profile/Pofile';
import {SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Profile />
    </SafeAreaView>
  );
}

export default App;