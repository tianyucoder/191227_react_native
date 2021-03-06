import React, { Component } from 'react'
import {Text,View,StyleSheet,StatusBar} from 'react-native'

/* 
规矩：
		1.样式可以直接写style={{}}，或借助特定的API创建样式，不能用传统的css或less文件来写。
		2.React Native中已经默认开启flex布局，且主轴默认是纵向的。
		3.React Native中依然使用jsx语法，但是不允许编写html标签，要写组件标签。
		4.样式中不要写px，直接写数值
*/

export default class App extends Component {
	render() {
		const {container,textStyle} = styles
		return (
			<>
				{/* 状态栏 */}
				<StatusBar 
					barStyle="light-content" //控制状态栏文字颜色 light-content 或 dark-content
					backgroundColor="gray" //控制状态栏背景颜色
					// hidden //隐藏状态栏
					animated //过度动画
					//translucent//沉浸式状态栏
				/>
				<View style={container}>
					<Text style={textStyle}>hello,ReactNative!</Text>
				</View>
			</>
		)
	}
}

//样式
const styles = StyleSheet.create({
	container:{
		backgroundColor:'skyblue',
		flex:1,
		justifyContent:'center'
	},
	textStyle:{
		fontSize:30,
		textAlign:'center',
		fontWeight:'bold'
	}
})
