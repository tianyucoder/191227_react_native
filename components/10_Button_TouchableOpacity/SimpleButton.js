import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native'

export default class MyButton extends Component {

	render() {
		const {textColor,bgColor, width, heigth, deg,textSize,onPress} = this.props
		const styles = StyleSheet.create({
			btn:{
				width:width || 100,
				borderRadius: deg || 5,
				height:heigth || 40,
				backgroundColor:bgColor||'orange',
				justifyContent:'center'
			},
			text:{
				textAlign:'center',
				fontSize:textSize ||18,
				color:textColor || 'black'
			}
		})
		const {btn,text} = styles
		return (
			<TouchableOpacity style={btn} onPress={onPress}>
				<Text style={text}>点我</Text>
			</TouchableOpacity>
		)

	}

}
