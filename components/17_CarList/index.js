import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

export default class index extends Component {
	render() {
		return (
			<View>
				<Image style={{width:100,height:100}} source={{uri:'demo'}}/>
			</View>
		)
	}
}
