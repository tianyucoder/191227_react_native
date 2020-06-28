import React, { Component } from 'react'
import { Text, View,ScrollView,Button, StyleSheet } from 'react-native'
import frontEnd from '../../assets/json/front_end.json'
import bigData from '../../assets/json/big_data.json'
import Carousel from '../../components/14_swiper'
import PictureWall from '../../components/08_PictureWall'

export default class Home extends Component {
	static navigationOptions = {
		title:'主页'
	}
	render() {
		const {lesson,text} = styles
		return (
			<ScrollView style={{flex:1}}>
				{/* 轮播图 */}
				<Carousel/>
				<View>
					<View style={lesson}>
						<Text style={text}>前端课程</Text>
						<Button title="更多..."/>
					</View>
					<PictureWall data={frontEnd}/>
				</View>
				<View>
					<View style={lesson}>
						<Text style={text}>大数据课程</Text>
						<Button title="更多..."/>
					</View>
					<PictureWall data={bigData}/>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	lesson:{
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		padding:10
	},
	text:{
		fontSize:20,
		fontWeight:"bold"
	}
})