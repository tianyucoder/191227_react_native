import React, { Component } from 'react'
import { Text, ScrollView,FlatList,Button } from 'react-native'

export default class Demo extends Component {

	state = {
		persons:[
			{id:1,name:'老刘',age:18},
			{id:2,name:'海峰',age:20},
			{id:3,name:'刘渊',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
			{id:4,name:'键哥',age:80},
		],
	}

	goToEnd = ()=>{
		this.refs.list.scrollToEnd()
	}

	render() {
		return (
			<FlatList
				ref="list"
				data={this.state.persons} //数据源
				// numColumns={4} //几列
				ListHeaderComponent={<Button onPress={this.goToEnd} title="点我去尾部"/> }
				ListFooterComponent={<Button title="我是尾部的按钮"/> }
				keyExtractor={({id})=> id.toString()}//用于生成key的
				renderItem={({item})=>{
					return (
						<Text style={{fontSize:20}}>
							{item.id}{item.name}{item.age}
						</Text>
					)
				}}
			/>
		)
	}
}
