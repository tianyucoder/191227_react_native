import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class User extends Component {
	static navigationOptions = {
		title:'我的'
	}
	render() {
		return (
			<View style={{flex:1,backgroundColor:'hotpink'}}>
				<Text> User </Text>
			</View>
		)
	}
}
