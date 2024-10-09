import React from 'react';
// import type {PropsWithChildren} from 'react';
import Login from './src/screens/Login/Login';
import { Colors } from './src/theme/Colors';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/screens/AppNavigator/AppNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
  useColorScheme,
  View,
  Button
} from 'react-native';
import Registration from './src/screens/Registration/Registration';
import LoginForm from './src/screens/Login/LoginForm';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import EmailVerification from './src/screens/EmailVerification/EmailVerification';

// import {
//   Colors,
//   Header,
//   LearnMoreLinks,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;
// const isDarkMode = useColorScheme() === 'dark';

// function Section({children, title}: SectionProps): React.JSX.Element {
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }


const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>

    // {/* <Login appName="Title Name" /> */ }
    // {/* <Registration /> */ }
    // {/* <ForgotPassword /> */ }
    // {/* <EmailVerification /> */ }
    // {/* <LoginForm /> */ }

    // </SafeAreaView >

    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primary}
      />
      <AppNavigator />
      {/* <Stack.Navigator initialRouteName='Login Welcome' >
        <Stack.Screen name='Login Welcome' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='LoginForm' component={LoginForm} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={Registration} options={{ headerShown: false }} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
