import React, { Component } from 'react'
import { Text, ScrollView,RefreshControl } from 'react-native'

export default class Pull extends Component {

	state = {
		newsList:[],
		isLoading:false
	}

	componentDidMount(){
		const arr = []
		for (let i = 1; i <= 40; i++) {
			arr.push({id:i,content:'新闻'+i})
		}
		this.setState({newsList:arr})
	}

	handlePull = ()=>{
		this.setState({isLoading:true})
		const {newsList} = this.state
		const count = newsList.length
		setTimeout(()=>{
			this.setState({
				newsList:[{id:count+1,content:'新闻'+(count+1)*1},...newsList],
				isLoading:false
			})
		},2000)
	}

	render() {
		return (
			<ScrollView
				refreshControl={
					<RefreshControl 
						refreshing={this.state.isLoading} //是否展示loading
						onRefresh={this.handlePull} //用于指定下拉的回调
						colors={['red','blue','yellow']}
					/>
				}
			>
				{
					this.state.newsList.map(news=>{
						return (
							<Text 
								style={{
									fontSize:30,
									backgroundColor:news.id % 2 === 0 ? 'green' : 'orange',
									borderWidth:1,
								}} 
								key={news.id}
							>
								{news.content}
							</Text>
						)
					})
				}
			</ScrollView>
		)
	}
}
