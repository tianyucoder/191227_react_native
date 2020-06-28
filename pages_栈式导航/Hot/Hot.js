import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class Hot extends Component {
	static navigationOptions = ({navigation})=>(
		{
			// title:navigation.getParam('name')+'的信息',
			// title:"热门",
			headerTitle:()=>(<Button title="热门"/>),
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
	)
	render() {
		const {navigation} = this.props
		return (
			<View style={{flex:1,backgroundColor:'pink',alignItems:'center'}}>
					<Text style={{fontSize:30}}> 我是Hot组件 </Text>
					<Text style={{fontSize:30}}> 
						我的名字是{navigation.getParam('name')}，
						年龄是{navigation.getParam('age')}
					</Text>
					<Text style={{fontSize:20}}> 
						{/* {JSON.stringify(navigation.state)} */}
					</Text>
					<View style={{width:150,marginTop:100}}>
					<Button 
						title="点我回主页" 
						color="green" 
						onPress={()=>{navigation.goBack()}}
					/>
					<Button 
						title="点我去热门" 
						color="orange" 
						onPress={()=>{navigation.navigate('Hot')}}
					/>
				</View>
			</View>
		)
	}
}
