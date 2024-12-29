import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Login from './src/screens/Login/Login';
import { Colors } from './src/theme/Colors';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './src/screens/Registration/Registration';
import LoginForm from './src/screens/Login/LoginForm';
import HomePage from './src/screens/HomePage/HomePage';
import ProductList from './src/screens/ViewAllProucuts/ViewProducts';
import Icon from 'react-native-vector-icons/Ionicons';
import MyProfileSection from './src/screens/MyProfile/MyProfile';
import UpdateProfile from './src/screens/MyProfile/UpdateProfile/UpdateProfile';
import AddressSection from './src/screens/MyProfile/Address/Address';
import Notification from './src/screens/MyProfile/Notification/Notification';
import AddNewAddress from './src/screens/MyProfile/Address/AddNewAddress/AddNewAddress';
import MyOrders from './src/screens/MyProfile/MyOrders/MyOrders';
import showProductInfo from './src/screens/ProductInfo/Product';
import { AuthProvider } from './src/context/Auth/Auth';

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
    <AuthProvider>
      {/* <NavigationContainer> */}
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#161D23'}
      />
      {/* <AppNavigator /> */}
      <Stack.Navigator initialRouteName='Login Welcome' >
        <Stack.Screen name='Login Welcome' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='LoginForm' component={LoginForm} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={Registration} options={{ headerShown: false }} />
        <Stack.Screen name='Dashboard' component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name='Products' component={ProductList}
          options={{
            title: 'Products',
            headerRight: () => (
              <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
                <TouchableOpacity>
                  <Icon name="search-outline" size={20} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: 'relative' }} >
                  <Icon name="bag-outline" size={20} color="#000" />
                  <View style={{ position: 'absolute', width: 14.2, height: 14.2, borderRadius: 50, backgroundColor: 'red', bottom: -2, right: -1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 8.5 }}>0</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          }}
        />
        <Stack.Screen name='showProductInfo' component={showProductInfo} options={{
          title: 'Products Info',
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
              <TouchableOpacity>
                <Icon name="search-outline" size={20} color='#000' />
              </TouchableOpacity>
              <TouchableOpacity style={{ position: 'relative' }} >
                <Icon name="bag-outline" size={20} color="#000" />
                <View style={{ position: 'absolute', width: 14.2, height: 14.2, borderRadius: 50, backgroundColor: 'red', bottom: -2, right: -1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#fff', fontSize: 8.5 }}>0</Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        }} />
        <Stack.Screen name='Profile' component={MyProfileSection} options={{ headerShown: false }} />
        <Stack.Screen name='UpdateProfile' component={UpdateProfile} options={{ headerShown: false }} />
        <Stack.Screen name='Address' component={AddressSection} options={{ headerShown: false }} />
        <Stack.Screen name='Notification' component={Notification} options={{ headerShown: false }} />
        <Stack.Screen name='NewAddress' component={AddNewAddress} options={{ headerShown: false }} />
        <Stack.Screen name='Orders' component={MyOrders} options={{ headerShown: false }} />
      </Stack.Navigator>
      {/* </NavigationContainer> */}
    </AuthProvider>
  );
}

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

export default App;
