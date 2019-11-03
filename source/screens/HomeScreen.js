import React from 'react';
import {
ActivityIndicator,
StatusBar,
Button,
StyleSheet,
View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { FlatList } from 'react-native-gesture-handler';
import { Text, Card,CardItem,Body } from 'native-base';

export default class HomeScreen extends React.Component {
static navigationOptions = {
title: 'Welcome to my app!',
};
constructor(props){
super(props)
this.state={
keys:{},
data:[]
}
}

async componentDidMount(){
await fetch("https://blockchain.info/ticker")
.then((res)=> res.json())
.then((json)=> this.setState({data:Object.values(json),keys:Object.keys(json)}) )

//alert(JSON.stringify(this.state.data))

}

render() {
return (
<View style={{flex:1}}>
<FlatList
data={Object.keys(this.state.data)}
renderItem={({ item,index }) => 
<Card>
<CardItem>
<Body style={{flexDirection:'column'}}>

<Text>Currency : {this.state.keys[index]} ({this.state.data[item].symbol})</Text>
<Text>Buying Price : {this.state.data[item].buy}</Text>
<Text>Sell Price : {this.state.data[item].sell}</Text>
<Text>Most recent market price : {this.state.data[item].last}</Text>
</Body>
</CardItem>
</Card>
}
keyExtractor ={(item) =>{this.state.data[item].symbol.toString()}}
/>
<Button title="SignOut" onPress={this._signOutAsync} />
</View>
);
}

_showMoreApp = () => {
this.props.navigation.navigate('Other');
};

_signOutAsync = async () => {
await AsyncStorage.clear();
this.props.navigation.navigate('Auth');
};
}
export {HomeScreen}