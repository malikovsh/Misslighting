import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LanguageScreen from './src/screens/Auth/LanguageScreen/LanguageScreen'
import LoginScreen from './src/screens/Auth/login/LoginScreen'
import TabNavigation from './src/screens/Home/bottomTab/TabNavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FamousList from './src/screens/Allproducts/FamousList'
import DiscountList from './src/screens/Allproducts/DiscountList'
import NewproductList from './src/screens/Allproducts/NewproductList'
import OrderList from './src/screens/Allproducts/OrderList'
import MarketList from './src/screens/Allproducts/MarketList'
import News from './src/screens/Allproducts/News'
import SignUPScreen from './src/screens/Auth/signUP/SignUPScreen'
import { StackNavigationProp } from '@react-navigation/stack'

type ScreenNames = ['Tab', 'SignUp', 'Language', 'LogIn', 'Famouse',
  'Discount', 'Newproduct', 'Orderproduct', 'Market', 'News'];
type RootStackParamList = Record<ScreenNames[number], undefined>
export type StackNavigationType = StackNavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Language" component={LanguageScreen} />
          <Stack.Screen name="LogIn" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUPScreen} />
          <Stack.Screen name="Tab" component={TabNavigation} />
          <Stack.Screen name="Famouse" component={FamousList} />
          <Stack.Screen name="Discount" component={DiscountList} />
          <Stack.Screen name="Newproduct" component={NewproductList} />
          <Stack.Screen name="Orderproduct" component={OrderList} />
          <Stack.Screen name="Market" component={MarketList} />
          <Stack.Screen name="News" component={News} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})