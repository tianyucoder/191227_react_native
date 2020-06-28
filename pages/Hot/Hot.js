import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import List from '../../components/15_FlatList/phoneList'

export default class Hot extends Component {
	static navigationOptions = {
		title:'热门'
	}
	render() {
		return (
			<View style={{flex:1}}>
				<List/>
			</View>
		)
	}
}
