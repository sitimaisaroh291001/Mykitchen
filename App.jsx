import React from "react";
import {View, Text,} from "react-native";
import AppNavigator from './src/AppNavigator';
const App = () => {
    return AppNavigator(
        <View>My Kitchen</View>
    )
};
export default App;
