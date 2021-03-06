import React, { Component } from 'react'
import { Text, View,Image,SectionList } from 'react-native'
import axios from 'axios'

//json-server
export default class index extends Component {

	state = {
		cars:[]
	}

	async componentDidMount(){
		axios.get('http://atguigu.utools.club/total').then(
			response => {
				this.setState({cars:response.data})
			},
			error => {console.log('请求失败',error);}
		)

		/* axios.get('http://atguigu.utools.club/total').then(
			(response)=>{console.log(response);}
		).catch(
			(err)=>{console.log(err);}
		) */

		/* try {
			let result = await axios.get('http://atguigu.utools.club/total') //只考虑了成功的情况
		} catch (error) {
			console.log(error);
		} */

		//使用axios的拦截器统一处理错误
		// let result = await axios.get('http://atguigu.utools.club/total') //只考虑了成功的情况
	}

	renderItem = ({item})=>{
		return (
			<View style={{flexDirection:'row',alignItems:'center'}}>
				<Image style={{width:100,height:100}} source={{uri:item.icon}}/>
				<Text style={{fontSize:20}}>{item.name}</Text>
			</View>
		)
	}

	renderHeader = ({section})=>{
		return <Text style={{backgroundColor:'gray',fontSize:25,fontWeight:"bold"}}>{section.title}</Text>
	}

	render() {
		return (
			<SectionList
				sections={this.state.cars}//数据源
				renderItem={this.renderItem} //渲染每一项
				renderSectionHeader={this.renderHeader}
				keyExtractor={(_,index)=>index.toString()}
			/>
		)
	}
}
