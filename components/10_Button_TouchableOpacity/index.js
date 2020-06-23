import React, { Component } from 'react'
import { Text, View,Button,TouchableOpacity,StyleSheet } from 'react-native'

export default class MyButton extends Component {
	render() {
		const {btn,text} = styles
		return (
			<View style={{padding:10}}>
				<Button title="点我" width={100} color="orange"/>
				<Text>{'\n'}</Text>
				<TouchableOpacity style={btn}>
					<Text style={text}>点我</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	btn:{
		width:100,
		borderRadius:5,
		height:40,
		backgroundColor:'orange',
		justifyContent:'center'
	},
	text:{
		textAlign:'center',
		fontSize:18,
		color:'black'
	}
})
