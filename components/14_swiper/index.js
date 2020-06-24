import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper} //样式
          onMomentumScrollEnd={(e, state, context) => //滑动结束的回调
            console.log('滑动结束了：', state.index)
          }
          dot={ //未激活的小圆点配置
            <View
              style={{
                backgroundColor: 'white',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={//激活的小圆点配置
            <View
              style={{
                backgroundColor: 'yellow',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{ //小圆点容器的位置
            bottom: 5,
            // left: null,
            // right: 10
          }}
          loop //循环轮播
        >
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../assets/imgs/1.jpg')}
            />
          </View>
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../assets/imgs/2.jpg')}
            />
          </View>
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../assets/imgs/3.jpg')}
            />
          </View>
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../assets/imgs/4.jpg')}
            />
          </View>
        </Swiper>
      </View>
    )
  }
}

const styles = {
  container: {
		height:300
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}