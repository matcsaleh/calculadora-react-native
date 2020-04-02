

import React,{Component, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Button from './src/components/Button';
import Display from './src/components/Display';

export default class App extends Component {
  
  state = {
    displayValue: '0'
  }
  

  addDigit = n => {
    this.setState( {displayValue: n});
  }
  
  clearMemory = () =>{
    this.setState( {displayValue: '0'});
  }

  setOperation = operation =>{

  }
  render() {
    return (
      
        <View style={styles.container}>
          <Display value={ this.state.displayValue }/>
          <View style={ styles.buttons }>
              <Button label='1' onClick={ () => this.addDigit( 1 ) }></Button>
              <Button label='2' onClick={ () => this.addDigit( 2 ) }></Button>
              <Button label='3' onClick={ () => this.addDigit( 3 ) }></Button>
              <Button label='4' onClick={ () => this.addDigit( 4 ) }></Button>
              <Button label='5' onClick={ () => this.addDigit( 5 ) }></Button>
              <Button label='6' onClick={ () => this.addDigit( 6 ) }></Button>
              <Button label='7' onClick={ () => this.addDigit( 7 ) }></Button>
              <Button label='8' onClick={ () => this.addDigit( 8 ) }></Button>
              <Button label='9' onClick={ () => this.addDigit( 9 ) }></Button>
              
              <Button label='/' operation onClick={ () => this.setOperation( '/' ) }></Button>
              <Button label='*' operation onClick={ () => this.setOperation( '*' ) }></Button>
              <Button label='+' operation onClick={ () => this.setOperation( '+' ) }></Button>
              <Button label='-' operation onClick ={ () => this.setOperation( '-' ) }></Button>
              <Button label='=' operation onClick ={ () => this.setOperation( '=' ) }></Button>
              <Button label='.' operation onClick = { this.addDigit( '.' ) }></Button>
              <Button label='C' triple onClick= { this.clearMemory }></Button>

          </View>
        </View>
    
    );
}
  
  
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap:'wrap'
  }
});

