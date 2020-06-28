import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class Hot extends Component {
	static navigationOptions = {
		title:'热门'
	}
	render() {
		const {navigation} = this.props
		return (
			<View style={{flex:1,backgroundColor:'pink',alignItems:'center'}}>
					<Text style={{fontSize:30}}> 我是Hot组件 </Text>
					<Button 
						title="点我回主页" 
						color="green" 
						onPress={()=>{navigation.goBack()}}
					/>
			</View>
		)
	}
}
