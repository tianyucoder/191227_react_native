import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Home extends Component {
	render() {
		return (
			<View style={{flex:1,backgroundColor:'skyblue'}}>
				<Text style={{fontSize:20}}> 我是Home组件 </Text>
			</View>
		)
	}
}
