import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const Colors = {
    mBackColor: '#efefef',
    mBorderColor: '#efefef',
    white: '#FFFFFF',
    shadowColor: '#A69E9E',
    sBackgroundColor: 'red'
};

const Metrics = {
    containerWidth: width ,
    switchWidth: width / 4
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E5F9FF',
      },
    container: {
        width: Metrics.containerWidth,
        height: 55,
        flexDirection: 'row',
        backgroundColor: '#E5F2FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E5F9FF',
        borderRadius: 27.5
    },
      DateContainer: {
        justifyContent: 'flex-start',
        height: height/5,
        width: width,
        marginTop: 50,
        alignItems: 'center'
      },
      addBtnContainer: {
        justifyContent: 'flex-start',
        height: height/5,
        width: width,
        alignItems: 'center'
      },
      imageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    switcher: {
        flex:1,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#7EB9F8',
        borderRadius: 28,
        height: 53,
        alignItems: 'center',
        justifyContent: 'center',
        width: Metrics.switchWidth,
        elevation: 4,
        shadowOpacity: 0.31,
        shadowRadius: 10,
        shadowColor: Colors.shadowColor
    },
    buttonStyle: {
        flex: 1,
        flexDirection: 'row',
        width: Metrics.containerWidth / 4,
        height: height/3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addBtnStyle: {
        flex: 1,
        flexDirection: 'row',
        width: Metrics.containerWidth / 4,
        height: height/3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    DateStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        color: '#3B6AA0'
    },
    DayStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#009ACD'

    }
});

export default styles;
