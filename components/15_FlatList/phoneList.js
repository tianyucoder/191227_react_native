import React, { Component } from 'react'
import { Text, ScrollView,FlatList,Button, Image,View } from 'react-native'
import phoneList from '../../assets/json/phone.json'

export default class Phone extends Component {

	state = {
		phoneArr:[],
	}

	componentDidMount(){
		this.setState({phoneArr:phoneList})
	}

	render() {
		return (
			<FlatList
				data={this.state.phoneArr} //数据源
				// numColumns={4} //几列
				 ListHeaderComponent={<Image style={{width:'100%',height:178,marginBottom:10}} resizeMode="contain" source={require('../../assets/imgs/banner.jpg')}/>}
				ListFooterComponent={<Text style={{textAlign:'center'}}>版权所有</Text> }
				keyExtractor={(_,index)=> index.toString()}//用于生成key的
				renderItem={({item})=>{
					return (
						<View style={{flexDirection:'row',marginBottom:10,paddingRight:120,paddingBottom:10}}>
							<View>
								<Image style={{width:120,height:100}} source={{uri:item.url}}/>
							</View>
							<View style={{justifyContent:'space-between'}}>
								<Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize:18}}>{item.name}</Text>
								<Text style={{fontSize:18,color:'orange',fontWeight:'bold'}}>￥{item.price}</Text>
							</View>
						</View>
					)
				}}
			/>
		)
	}
}
