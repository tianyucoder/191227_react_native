//入口文件
//引入AppRegistry，用于注册应用
import {AppRegistry} from 'react-native';
//引入App，即所有组件的最外层组件
import App from './App';
//引入应用名字(代表整个应用)
import {name as appName} from './app.json';

//注册应用
AppRegistry.registerComponent(appName, () => App);