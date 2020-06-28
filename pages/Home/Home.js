import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class Home extends Component {
	static navigationOptions = {
		title:'主页'
	}

	gotoHot = ()=>{
		this.props.navigation.navigate('Hot',{name:'老刘',age:18})
		//此时不能用push和replace，因为push和replace是栈式导航所特有的
	}

	render() {
		return (
			<View style={{flex:1,backgroundColor:'skyblue',alignItems:'center'}}>
				<Text style={{fontSize:20}}> 我是Home组件 </Text>
				<View style={{width:150,marginTop:100}}>
					<Button title="点我去热门页面" onPress={this.gotoHot}/>
				</View>
			</View>
		)
	}
}