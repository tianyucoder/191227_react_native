import React, { Component } from 'react'
import { Text, View,SectionList,StyleSheet } from 'react-native'

export default class index extends Component {
	state = {
		newsList:[
			{type:'国内新闻',data:['从青楼女子到百万女富豪','端午小长假能出去玩吗?','“疫”后花开 迈向诗和远方']},
			{type:'国际新闻',data:['某国疫情严重','某国暴乱了','某国向中国学习抗疫医疗方案']},
			{type:'本地新闻',data:['楼下的麻辣烫开业了','KTV营业了','烧烤摊开业了']}
		]
	}

	//渲染每一个组里每一项
	renderItem = ({item})=>{
		const {itemStyle} = styles
		return <Text style={itemStyle}>{item}</Text>
	}

	//渲染每一组的头部
	renderHeader = ({section})=>{
		const {header} = styles
		return <Text style={header}>{section.type}</Text>
	}
	
	render() {
		return (
			<SectionList
				sections={this.state.newsList} //数据源
				renderItem={this.renderItem} //渲染每一个组里每一项
				renderSectionHeader={this.renderHeader}//渲染分组头部信息
				keyExtractor={(_,index)=>index.toString()}//生成key
			/>
		)
	}
}

const styles = StyleSheet.create({
	itemStyle:{
		fontSize:30
	},
	header:{
		fontSize:30,
		fontWeight:'bold',
		backgroundColor:"green"
	}
})
