import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({


    carContainer: {
 
      width: Dimensions.get('window').width,
      height: Dimensions.get('window'). height,
    
      },
      titles:{
        marginTop: '30%',
        width: '100%',
        alignContent: 'center',
        alignItems:'center',
        backgroundColor: '#D0D0D0',
      
    },
      title:{
        fontSize: 18,
        fontFamily: '500',
        color: 'black',
        alignContent: 'center',
        
        
        
      
      },
    
      subtitles:{
        fontSize: 15,
        color:'black',
        
        
    
    
      },
    
      image:{
        width: '100%',
        height: '100%',
        position:'absolute',
      },

      buttonsContainer:{
        position:'absolute',
        bottom:50,
        width:'100%',
      }
    
    
    
    });
    
    export default styles;