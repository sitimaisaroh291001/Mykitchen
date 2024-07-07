import React from "react";
import {View, Text,} from "react-native";
import AppNavigator from './src/AppNavigator';
const App = () => {
    return AppNavigator(
        <View>My Kitchen
            Hidup Sehat dengan Makanan Buatan Sendiri
        </View>
    )
};
export default App;
