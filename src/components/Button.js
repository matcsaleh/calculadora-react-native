import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
        },
    operationButton:{
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: ( Dimensions.get('window').width / 4 ) * 2
    },
    buttonTriple: {
        width: ( Dimensions.get('window').width / 4 ) * 3
    }
});

Button = (props) =>{
    const stylesButton = [ styles.button ] 

    if( props.double ){ stylesButton.push( styles.buttonDouble ); } // Botão que é o dobro
    if( props.triple ){ stylesButton.push( styles.buttonTriple ); } // Botão que é o triplo
    if( props.operation ){ stylesButton.push( styles.operationButton ); } // Botão operacional

    return(
        <TouchableHighlight onPress = { props.onClick } >
            <Text style = { stylesButton }> { props.label } </Text>
        </TouchableHighlight>
    )
}

export default Button;
    
