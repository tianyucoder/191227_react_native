import React, { Component } from 'react'
import { Text, View,Image,SectionList } from 'react-native'
import carList from '../../assets/json/car.json'

export default class index extends Component {

	state = {
		cars:carList.total
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
