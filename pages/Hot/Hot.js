import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Hot extends Component {
	render() {
		return (
			<View style={{flex:1,backgroundColor:'pink'}}>
					<Text style={{fontSize:20}}> 我是Hot组件 </Text>
			</View>
		)
	}
}
