import React, { Component } from 'react'
import { Text, View,Dimensions, StyleSheet,Platform } from 'react-native'

export default class index extends Component {
	render() {
		return (
			<View>
				<Text style={styles.text}>当前窗口的宽为：{Dimensions.get('window').width}</Text>
				<Text style={styles.text}>当前窗口的高为：{Dimensions.get('window').height}</Text>
				<Text style={styles.text}>当前操作系统为：{Platform.OS}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	text:{
		fontSize:20
	}
})
