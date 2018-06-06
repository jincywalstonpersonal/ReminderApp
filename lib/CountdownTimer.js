import React from 'react';
import {View,TouchableOpacity,Image } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown'
import styles from './styles';
const CountdownTimer = () => (
    <View style={styles.CircleShapeView}>
    <TimerCountdown
    initialSecondsRemaining={360}
    onTick={() => console.log('tick')}
    onTimeElapsed={() => console.log('complete')}
    allowFontScaling={true}
    style={{flexDirection: 'row',
        alignItems: 'center', fontSize: 20 }}
/>    
</View>  
    );
export default CountdownTimer;
