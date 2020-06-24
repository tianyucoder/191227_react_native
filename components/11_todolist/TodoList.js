import React, { Component } from 'react'
import { Text, View,TextInput,StyleSheet } from 'react-native'
import Button from '../10_Button_TouchableOpacity/SimpleButton'

export default class TodoList extends Component {

	state = {
		todoList:['吃饭','睡觉','谈恋爱'],
		userInput:''
	}

	add = ()=>{
		//1.获取用户输入
		const {userInput,todoList} = this.state
		//2.更新状态
		this.setState({todoList:[userInput,...todoList],userInput:''})
		//3.清空输入
		//this.text.clear() //清空
	}

	render() {
		const {container,input,top,font} = styles
		const {todoList} = this.state
		return (
			<View style={container}>
				<View style={top}>
					<TextInput
						value={this.state.userInput}
						//ref={text => this.text = text}
						style={input} onChangeText={value =>this.setState({userInput:value})}
					/>
					<Button
						textColor="white" 
						bgColor="orange" 
						width={100} 
						heigth={40} 
						deg={5} 
						textSize={18}
						onPress={this.add}
					/>
				</View>
				<View>
					{todoList.map((todo,index)=><Text key={index} style={font}>{todo}</Text>)}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		padding:10
	},
	input:{
		borderWidth:1,
		height:40,
		width:200,
		marginRight:10,
		marginBottom:10
	},
	top:{
		flexDirection:'row'
	},
	font:{
		fontSize:20
	}
})
