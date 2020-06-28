import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ShopCar extends Component {
	static navigationOptions = {
		title:'购物车'
	}
	render() {
		return (
			<View style={{flex:1,backgroundColor:'orange'}}>
				<Text> ShopCar </Text>
			</View>
		)
	}
}
