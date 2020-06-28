//引入每一屏所对应的组件
import Home from './Home/Home'
import Hot from './Hot/Hot'
//创建一个栈式导航器，每管理每一屏
import {createBottomTabNavigator} from 'react-navigation-tabs'
//创建App导航容器
import {createAppContainer} from 'react-navigation'

//创建一个栈式导航器
const bottomTabNavigator = createBottomTabNavigator(
	{
		Home:{screen:Home},
		Hot:{screen:Hot},
	},
	{
		//initialRouteName:"Home", //默认展示哪一个
	}
)

//创建App导航容器
export default createAppContainer(bottomTabNavigator)