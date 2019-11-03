import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
    TextInput,
    Image,
    SafeAreaView
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { Button, Text, Item, Input } from 'native-base'
import Icon from 'react-native-vector-icons/Entypo';
import { TextField } from 'react-native-material-textfield';
import images from '../images/index'
import { KeyboardAvoidingView } from 'react-native';
import { from } from 'rxjs';


const styles = StyleSheet.create({
    container: {
        top: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        // backgroundColor: 'rgb(234,195,176)'
    },
    up: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    down: {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'

    },
    title: {
        color: 'black',
        textAlign: 'center',
        width: 400,
        fontSize: 23
    },
    textInputContainer: {

        paddingHorizontal: 10,
        marginTop: 20,
        borderRadius: 6
    },
    textInput: {
        width: 280,
        height: 56
    },
    logo: {
        width: 100,
        height: 100
    },
    inputBox:{
        flexDirection: 'row',
        width: 280,
        alignItems: 'center',
    },
    buttons:{ 
        marginTop: 15, 
        alignSelf: 'center', 
        marginBottom: 5, 
        marginLeft: 20, 
        marginRight: 20 
    },
    btnTitle:{
         width: '100%',
         textAlign: 'center'
    }
});

export default class LoginScreen extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.up}>
                    <Image source={images.originalScreen.imageLogo} style={styles.logo} />
                    <Text style={styles.title}>
                        Bitcoin Tracker
                    </Text>
                </View>
                <View style={styles.down}>
                    <View style={styles.textInputContainer}>
                        <Item style={styles.inputBox}>
                            <Icon active name='user' size={25} />
                            <Input placeholder='Email Id'/>
                        </Item>
                    </View>
                    <View style={styles.textInputContainer}>
                        <Item style={styles.inputBox}>
                            <Icon active name='key' size={25} />
                            <Input placeholder='Password'
                                   secureTextEntry={true}  />
                        </Item>
                    </View>
                    <Button
                        rounded={true}
                        style={styles.buttons}
                        onPress={this._logInAsync}>
                        <Text style={styles.btnTitle}>Log In</Text>
                    </Button>
                    <Button
                        rounded={true}
                        style={styles.buttons}
                        onPress={this._signInAsync}>
                        <Text style={styles.btnTitle}>SignUp</Text>
                    </Button>
                </View>
            </View>

        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('SignIn');//App
    };
    _logInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');//App
    };
}
