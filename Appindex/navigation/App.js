import React, { Component, useEffect, useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    FlatList
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackRouterOptions } from "@react-navigation/native";
import { Login,Welcome,tracnghiem,Danhsach,Tracnghiemsu} from "../view";
import 'react-native-gesture-handler';
//import tabBar from './tabBar'
import TabBar from "./TabBar";
const Stack = createStackNavigator();


function App(props){
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="TabBar" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="TabBar" component={TabBar} />
            <Stack.Screen name="TracNghiem" component={tracnghiem} />
            <Stack.Screen name="DanhSach" component={Danhsach}/>
            <Stack.Screen name="TracNghiemSu" component={Tracnghiemsu}/>
        </Stack.Navigator>
    </NavigationContainer>
}
export default App;