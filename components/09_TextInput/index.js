import React, { Component } from 'react'
import { Text, View,TextInput, StyleSheet } from 'react-native'

export default class MyText extends Component {

	state = {
		userInput:''
	}

	show = ()=>{
		alert(this.state.userInput)
	}

	render() {
		const {input} = styles
		return (
			<View style={{padding:10}}>
				<TextInput 
					// keyboardType="phone-pad" //键盘类型
					// placeholder="请输入数字" //提示文字
					// placeholderTextColor="red" //提示文字的颜色
					// multiline={true}//是否可以换行
					// autoCapitalize="sentences" //自动大写
					style={input} 
					onChangeText={(value)=>{this.setState({userInput:value})}}
				/>
				<Text 
					onPress={this.show}
					style={{fontSize:40,backgroundColor:'hotpink'}}
				>
					点我获取上方输入框的内容
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	input:{
		width:300,
		height:80,
		fontSize:20,
		paddingLeft:10,
		borderWidth:1,
		borderColor:'black'
	}
})
