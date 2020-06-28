import React from 'react'
import {Image} from 'react-native'
//引入每一屏所对应的组件
import Home from './Home/Home'
import Hot from './Hot/Hot'
import ShopCar from './ShopCar/ShopCar'
import User from './User/User'
//创建一个栈式导航器，每管理每一屏
import {createBottomTabNavigator} from 'react-navigation-tabs'
//创建App导航容器
import {createAppContainer} from 'react-navigation'

//创建一个栈式导航器
const bottomTabNavigator = createBottomTabNavigator(
	{
		Home:{screen:Home},
		Hot:{screen:Hot},
		ShopCar:{screen:ShopCar},
		User:{screen:User},
	},
	{
		//initialRouteName:"Home", //默认展示哪一个
		defaultNavigationOptions:({navigation})=>{//所有底部切换导航的通用配置
			//获取路由名
			const {routeName} = navigation.state
			let iconName = routeName.toLowerCase()
			if(routeName==='ShopCar') iconName = 'fill'
			return { 
				//底部导航图标
				tabBarIcon:({focused})=>(
					<Image style={{width:40,height:40}} source={{uri:focused ? iconName+'_active' : iconName}}/>
				),
				//底部导航颜色设置
				tabBarOptions: { 
					activeTintColor: 'blue',//选中的颜色
					inactiveTintColor: 'gray',//未选中的颜色
				},
			}
		}
	}
)

//创建App导航容器
export default createAppContainer(bottomTabNavigator)