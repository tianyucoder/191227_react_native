import React, { Component } from 'react'
import { Text, View,SectionList } from 'react-native'

export default class index extends Component {

	state = {
		newsList:[
			{type:'国内新闻',data:['从青楼女子到百万女富豪','端午小长假能出去玩吗?','“疫”后花开 迈向诗和远方']},
			{type:'国际新闻',data:['某过疫情严重','某国暴乱了','某国向中国学习抗疫医疗方案']},
			{type:'本地新闻',data:['楼下的麻辣烫开业了','KTV营业了','烧烤摊开业了']}
		]
	}
	
	render() {
		return (
			<SectionList
			
			/>
		)
	}
}
