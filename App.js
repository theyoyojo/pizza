/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Avatar from './test';
import Pizza from './pizza';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.darker : colors.lighter,
  };

  return (
      // <ScrollView
      //   contentInsetAdjustmentBehavior="automatic"
      //   style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? colors.black : colors.white,
          }}>
	<Pizza />
	<Avatar formal="https://joelsavitz.com/me.jpg" casual="https://joelsavitz.com/also_me.jpg" name="Joel" />
        </View>
      // </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

const colors = {
	  primary: '#1292B4',
	  white: '#FFF',
	  lighter: '#F3F3F3',
	  light: '#DAE1E7',
	  dark: '#444',
	  darker: '#222',
	  black: '#000',
};

export default App;
