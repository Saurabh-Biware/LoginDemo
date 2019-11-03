import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
    TextInput,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import { Button, Text, Item, Input } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import images from '../images';
import Icon from 'react-native-vector-icons/Entypo';



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
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10

    },
    middle: {
        flex: 7,
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 100,
        height: 100
    },
    textInputContainer: {

        paddingHorizontal: 10,
        marginTop: 10,
        borderRadius: 6
    },
    textInput: {
        width: 280,
        height: 56
    },
    inputBox: {
        flexDirection: 'row',
        width: 280,
        alignItems: 'center',
    },
    buttons: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        
    },
    btnTitle: {
       
        textAlign: 'center'
    }

});

export default class SignInScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            firstname : '',
            lastname : '',
            email:'',
            password:'',
            cpassword:'',
            usersarray:[]
        }
    }




    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.up}>
                    <Image source={images.originalScreen.imageLogo} style={styles.logo} />
                    <Text style={styles.title}>
                        Bitcoin Tracker
                    </Text>
                </View>
                <View style={styles.middle}>
                    <ScrollView>
                        <View style={styles.textInputContainer}>
                            <Item style={styles.inputBox}>
                                <Icon active name='user' size={25} />
                                <Input 
                                    value={this.state.firstname}
                                    placeholder='First Name' 
                                    onChangeText={(firstname)=>this.setState({firstname})}
                                />
                            </Item>
                        </View>
                        <View style={styles.textInputContainer}>
                            <Item style={styles.inputBox}>
                                <Icon active name='user' size={25} />
                                <Input
                                    value={this.state.lastname} 
                                    placeholder='Last Name' 
                                    onChangeText={(lastname)=>this.setState({lastname})}
                                    />
                            </Item>
                        </View>
                        <View style={styles.textInputContainer}>
                            <Item style={styles.inputBox}>
                                <Icon active name='email' size={25} />
                                <Input 
                                    value={this.state.email}
                                    placeholder='Email Id' 
                                    onChangeText={(email)=>this.setState({email})}
                                 />
                            </Item>
                        </View>
                        <View style={styles.textInputContainer}>
                            <Item style={styles.inputBox}>
                                <Icon active name='key' size={25} />
                                <Input
                                      value={this.state.password}
                                      placeholder='Password' 
                                      onChangeText={(password)=>this.setState({password})}
                                 />
                            </Item>
                        </View>
                        <View style={styles.textInputContainer}>
                            <Item style={styles.inputBox}>
                                <Icon active name='key' size={25} />
                                <Input 
                                      value={this.state.cpassword}
                                      placeholder='Confirm Password' 
                                      onChangeText={(cpassword)=>this.setState({cpassword})}
                                 />
                            </Item>
                        </View>
                        <View style={styles.textInputContainer}>
                            <Button
                                rounded={true}
                                style={styles.buttons}
                                onPress={this._signInAsync}>
                                <Text style={styles.btnTitle}>SignUp</Text>
                            </Button>
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }

    _signInAsync = async () => {
     
    };
}

