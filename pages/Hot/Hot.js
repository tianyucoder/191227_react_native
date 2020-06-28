import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class Hot extends Component {
	static navigationOptions = {
		title:'热门',
		headerLeft:()=>(
			<View style={{marginLeft:10}}>
				<Button
					title="扫一扫"
					color="red"
				/>
			</View>
		),
		headerRight: () => ( //导航右侧按钮
			<View style={{marginRight:10}}>
				<Button
					onPress={() => alert('This is a button!')}
					title="点我"
					color="black"
				/>
			</View>
    ),
	}
	render() {
		return (
			<View style={{flex:1,backgroundColor:'pink',alignItems:'center'}}>
					<Text style={{fontSize:20}}> 我是Hot组件 </Text>
					<View style={{width:150,marginTop:100}}>
					<Button 
						title="点我回主页" 
						color="green" 
						onPress={()=>{this.props.navigation.goBack()}}
					/>
					<Button 
						title="点我去热门" 
						color="orange" 
						onPress={()=>{this.props.navigation.navigate('Hot')}}
					/>
				</View>
			</View>
		)
	}
}
