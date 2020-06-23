import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MyText extends Component {

	persons = [
		{id:1,name:'老刘',info:'会开车！'},
		{id:2,name:'圆圆的海峰',info:'土豪！'}
	]

	show = ()=>{
		console.log(this.persons);
	}

	render() {
		return (
			<View>
				<Text 
					style={{fontSize:20}}
					numberOfLines={1} //文本显示的函数，超出部分被....代替
					ellipsizeMode="middle" //省略号的位置
					onPress={this.show}
					selectable={true}
				>
					苦其心志，饿其体肤，空乏其身，行拂乱其所为。忘记本身就是一件不可能的事情，别妄想了。没有调查就没有发言权
				</Text>
			</View>
		)
	}
}
