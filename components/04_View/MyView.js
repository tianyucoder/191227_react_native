import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class MyView extends Component {
	render() {
		const {text} = styles
		return (
			<View style={{flexDirection:'row'}}>
					<Text style={text}> hello </Text>
					<Text style={text}> 1227 </Text>
			</View>
		)
	}
}

//样式
const styles = StyleSheet.create({
	text:{
		fontSize:20
	}
})
