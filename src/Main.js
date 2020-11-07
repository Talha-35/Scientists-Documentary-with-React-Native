import React from 'react' ;
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import {FirstPage, MainPage ,SecondPage} from './pages'




const OtherPage = () => {
    return(
        <Stack.Navigator
            screenOptions={{headerShown : false}}
        >
            <Stack.Screen name='First Page' component={FirstPage} />
            <Stack.Screen name='Second Page' component={SecondPage} />
        </Stack.Navigator>
    )
}


const Main = () => {
    return (
        <NavigationContainer 
            tabBarOptions
        >
            <Tab.Navigator
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Main Page') {
                        iconName = "angle-double-left"
                    } else if (route.name === 'Page') {
                        iconName = "angle-double-right"
                    }
                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} style={{marginTop : 35 , marginRight : 150}} color={color} />;
                },
            })
            }
                tabBarOptions ={{
                    activeTintColor  :'white',
                     // Seçili olan sayfanın icon ve yazıların rengini değiştirir
                    inactiveTintColor : 'black',
                    // Seçili olmayan sayfanın icon ve yazıların rengini değiştirir
                    activeBackgroundColor : '#404040',   
                        // bu şekilde arka plan rengi verilebilir                 
                    inactiveBackgroundColor : '#bfbfbf',

                    // bu şekilde de bottom daki sayfa adına style vs verilebilir.
                    labelStyle: {
                        fontSize: 20,
                        borderRadius : 10,
                        bottom : 8 ,
                        fontWeight :'bold'
                      } 
                }}>
                <Tab.Screen  name='Main Page' component={MainPage}  options={{ title : 'Main Page' }} />
                <Tab.Screen  name='Page' component={OtherPage} options={{title : 'Scientists'}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({})
