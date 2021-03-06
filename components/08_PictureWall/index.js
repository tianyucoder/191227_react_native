import React, { Component } from 'react'
import { Text, View,Image, StyleSheet,Dimensions,TouchableOpacity } from 'react-native'

export default class Picture extends Component {

	state = {
		imgs:[], //前端学科数组
		itemWidth:120, //每一个图片的宽度
		itemHeight:80 //每一个图片的高度
	}

	componentDidMount(){
		const {data} = this.props
		this.setState({imgs:data})
	}

	renderItem = ()=>{
		const {imgs} = this.state
		//获取样式
		const {itemStyle} = this.styles
		//获取屏幕宽度
		const screenWidth = Dimensions.get('window').width
		//获取每一个图片的宽度
		const {itemWidth} = this.state
		//获取图片总数
		const total = imgs.length
		//计算每一行可以展示几个图片
		const oneRowCount = Math.floor(screenWidth / itemWidth)
		//计算要用几行去展示
		const rows = Math.ceil(total / oneRowCount)
		//计算出要补几个
		const addNumber = oneRowCount * rows - total
		for (let i = 0; i < addNumber; i++) {
			imgs.push({name:'',url:'#'})
		}
		return imgs.map((img,index)=>{
			return (
				<TouchableOpacity key={index} style={{alignItems:'center',marginBottom:10}}>
					<Image source={{uri:img.url}} style={itemStyle}/>
					<Text style={{fontSize:18}}>{img.name}</Text>
				</TouchableOpacity>
			)
		})
	}

	render() {
		const {itemStyle,container} = this.styles
		return (
			<View style={container}>
				{this.renderItem()}
			</View>
		)
	}

	styles = StyleSheet.create({
		itemStyle:{
			width:this.state.itemWidth,
			height:this.state.itemHeight,
			// marginBottom:10
		},
		container:{
			flexDirection:'row',
			flexWrap:'wrap',
			flex:1,
			paddingTop:10,
			justifyContent:"space-around",
			// backgroundColor:'skyblue'
		}
	})
}

