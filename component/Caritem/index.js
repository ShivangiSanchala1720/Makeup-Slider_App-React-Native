import React from 'react';
import {  View , Text, ImageBackground} from 'react-native';
import StyledButton from './StyledButton';
// import StyledButton from '../StyledButton';
import styles from './styles';

const  CarItem =(props)=>{
  const { name , taglines , image}=props.car;

    return(

        <View style={styles.carContainer}>
        <ImageBackground 
    
        source={image}
        style={styles.image}
        />
  
        <View style={styles.titles}> 
          <Text style={styles.title}> {name}  </Text> 
          <Text style={styles.subtitles}>{  taglines }</Text> 
        </View>

        <View style={styles.buttonsContainer}> 

        <StyledButton 
        type='primary'
        content={"Order Now "}
        onPress={() => {
        console.warn( " Order Conform ");
        }}
        
        />

          
        <StyledButton 
        type="secondary"
        content={"Add to Cart"}
        onPress={() => {
        console.warn(" Add To Cart successful ");
        }}
        
        /> 


</View> 
   </View>

    );

}; 
export default CarItem;