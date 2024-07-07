import React, {useState, useEffect} from "react";
import {View, Text, FlatList, TouchableOpacity} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const App = () => {

    const [kategori, setKategori] = useState([
        {
            nama: 'Ayam',
        },
        {
            nama: 'Sayur',
        },
        {
            nama: 'Minuman',
        },
        {
            nama: 'Salad',
        },
        {
            nama: 'Gorengan',
        },
        {
            nama: 'Rebus',
        },
        {
            nama: 'Telur',
        },
    ]);

    return (
        <View style={{flex: 1}}> 
            <Text>My Kitchen</Text>
            <View>
            <FlatList
                data={kategori}
                horizontal
                style={{marginLeft: 10}}
                renderItem={({item}) => (
                    <TouchableOpacity
                    style={{
                        marginRight: 5,
                        backgroundColor: '#FFFFFF',
                        elevation: 3,
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        marginBottom: 10,
                        borderRadius: 8,
                        marginLeft: 5,
                    }}>
                        <Text>{item.nama}</Text>
                    </TouchableOpacity>
                )}
            />
            </View>  
        </View>
    );
};

export default App;

