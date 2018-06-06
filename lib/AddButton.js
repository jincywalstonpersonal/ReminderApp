import React from 'react';
import {View,TouchableOpacity,Image } from 'react-native';
import styles from './styles';

const AddButton = () => (
    <View style={styles.addBtnContainer}>
    <TouchableOpacity style={styles.addBtnStyle} 
    onPress={()=>{}}>
    <Image style={styles.imageStyle} source={require ('./assets/add_button.png')} />
   </TouchableOpacity>
   </View>         
    );
export default AddButton;
