import React, { Component } from 'react'
import { Text, View,ScrollView,Dimensions } from 'react-native'

export default class MyScrollView extends Component {

	state = {
		colors:['red','orange','yellow','green','blue'],
	}

	render() {
		return (
			<ScrollView
				horizontal={true} //水平滚动
				pagingEnabled={true} //滚动屏幕宽度（或高度）的整数倍
				showsVerticalScrollIndicator={false} //是否展示垂直滚动条
				showsHorizontalScrollIndicator={false} //是否展示水平滚动条
				// scrollEnabled={false} //是否可以滚动说
			>
				{
					this.state.colors.map((color,index)=>{
						return (
							<View key={index} style={{width:Dimensions.get('window').width,height:300,backgroundColor:color}}>
								<Text style={{fontSize:40}}>{index}</Text>
							</View>
						)
					})
				}
			</ScrollView>
		)
	}
}
