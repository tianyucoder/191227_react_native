//引入每一屏所对应的组件
import Home from './Home/Home'
import Hot from './Hot/Hot'
//创建一个栈式导航器，每管理每一屏
import {createStackNavigator} from 'react-navigation-stack'
//创建App导航容器
import {createAppContainer} from 'react-navigation'

//创建一个栈式导航器
const stackNavigator = createStackNavigator(
	{
		Hot:{
			screen:Hot,
			/* navigationOptions:{
				title:'热门'
			} */
		},
		Home:{
			screen:Home,
			/* navigationOptions:{
				title:'主页'
			} */
		}
	},
	{
		initialRouteName:"Home", //默认展示哪一个
		//所有导航的默认样式
		defaultNavigationOptions:{
			headerStyle: { //导航头部样式
				backgroundColor: 'orange',//整个顶部导航条背景
			},
			//headerTintColor: 'orange',//导航中标题的颜色
			headerTitleStyle: { //导航头部标题样式
				fontWeight: 'bold',//标题文字加粗
				color:'white',//导航中标题的颜色
				//backgroundColor:'red'//导航中标题的背景
				textAlign:'center',
			},
		}
	}
)

//创建App导航容器
export default createAppContainer(stackNavigator)