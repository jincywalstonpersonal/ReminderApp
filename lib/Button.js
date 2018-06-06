/* Switch Button Component class
 */
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const getIcon = (type, active) => {
    let icn;
    switch (type) {
    case 'Open':
        icn = active
            ? require('./assets/slider/active/to-do_active.png')
            : require('./assets/slider/inactive/to-do_in_active.png');
            
        break;
    case 'In Progress':
        icn = active
            ? require('./assets/slider/active/dark_timer_active.png')
            : require('./assets/slider/inactive/dark_timer_in_active.png');
           
        break;
    case 'Complete':
        icn = active
            ? require('./assets/slider/active/scheduled_active.png')
            : require('./assets/slider/inactive/scheduled_in_active.png');
        break;
     case 'Finished':
        icn = active
            ? require('./assets/slider/active/previous_list_active.png')
            : require('./assets/slider/inactive/previous_list_in_active.png');
        break;
    }
    return icn;
};

const Button = props => {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.buttonStyle}
            >
                <Image source={getIcon(props.type, props.active)} />
            </TouchableOpacity>
        </View>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    active: PropTypes.bool,
    onPress: PropTypes.func
};

Button.defaultProps = {
    active: false
};

export default Button;
