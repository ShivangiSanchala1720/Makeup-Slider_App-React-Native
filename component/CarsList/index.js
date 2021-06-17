import React from'react';
import { View , Text, FlatList, Dimensions } from 'react-native';
import CarItem from "../Caritem";

import styles from './styles';
import Cars from './Cars';

const CarsList =(props) =>{
    return (
        
        <View style={styles.container}> 
            <FlatList
            data={Cars}
            renderItem={({item}) => <CarItem car={item}/>} 
            showsHorizontalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
           
            />
        </View>
    );
};
export default CarsList;
