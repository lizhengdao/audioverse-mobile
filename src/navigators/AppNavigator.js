import React from 'react'
import {
  Easing,
  Animated
} from 'react-native'
import { createSwitchNavigator } from '@react-navigation/core'
import { createAppContainer } from '@react-navigation/native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/Feather'

import { GlobalStyles, headerTintColor, primaryColor } from 'src/styles'
import HeaderTitle from './headertitle'
import HeaderRight from './HeaderRight'
import BottomTabBarLabel from './bottomtabbarlabel'
import withPlayer from 'src/HOCs/withPlayer'
import Loading from 'src/containers/auth/loading'
import Login from 'src/containers/auth/login'
import Discover from 'src/containers/discover'
import Post from 'src/containers/blog/post'
import PresentationsNavigator from './PresentationsNavigator'
import BibleNavigator from './BibleNavigator'
import BooksNavigator from './BooksNavigator'
import MenuNavigator from './MenuNavigator'
import Player from 'src/containers/player'
import Transcript from 'src/containers/player/transcript'
import VideoPlayer from 'src/containers/player/Video'
import AddToPlaylist from 'src/containers/lists/playlists/addtoplaylist'
import NewPlaylist from 'src/containers/lists/playlists/newplaylist'
import Search from 'src/containers/search'
import Presenter from 'src/containers/presenters/presenter'
import Conference from 'src/containers/conferences/conference'
import Sponsor from 'src/containers/sponsors/sponsor'
import Serie from 'src/containers/series/serie'

const DiscoverNavigator = createStackNavigator({
  Discover,
  Search,
  Post,
  Conference,
  Sponsor,
  Serie,
},{
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: GlobalStyles.header,
    headerTintColor: headerTintColor,
    headerTitle: <HeaderTitle title="discover" />,
    headerRight: <HeaderRight navigation={navigation} />,
  }),
})

const WithPlayerPresentationsNavigator = withPlayer(PresentationsNavigator)
const WithPlayerDiscoverNavigator = withPlayer(DiscoverNavigator)
const WithPlayerBibleNavigator = withPlayer(BibleNavigator)
const WithPlayerBooksNavigator = withPlayer(BooksNavigator)
const WithPlayerMenuNavigator = withPlayer(MenuNavigator)

const screenNavigationOptions = (title, icon) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    return <Icon name={icon} size={25} color={tintColor} />
  },
  tabBarLabel: ({ tintColor, orientation }) => <BottomTabBarLabel tintColor={tintColor} orientation={orientation} title={title} />,
})

const BottomTabNavigator = createBottomTabNavigator({
  Presentations: {
    screen: WithPlayerPresentationsNavigator,
    navigationOptions: screenNavigationOptions('home', 'home'),
  },
  Discover: {
    screen: WithPlayerDiscoverNavigator,
    navigationOptions: screenNavigationOptions('discover', 'zap'),
  },
  Bible: {
    screen: WithPlayerBibleNavigator,
    navigationOptions: screenNavigationOptions('bible', 'bookmark'),
  },
  Books: {
    screen: WithPlayerBooksNavigator,
    navigationOptions: screenNavigationOptions('books', 'book'),
  },
  Menu: {
    screen: WithPlayerMenuNavigator,
    navigationOptions: screenNavigationOptions('menu', 'menu'),
  },
}, {
  tabBarOptions: {
    activeTintColor: primaryColor,
  },
})

const PlayerStackNavigator = createStackNavigator({
  Player: {
    screen: Player,
    navigationOptions: {
      header: null,
    },
  },
  Transcript,
  Sponsor,
  Presenter,
  Conference,
  Serie,
},{
  defaultNavigationOptions: {
    headerStyle: GlobalStyles.header,
    headerTintColor: headerTintColor,
  },
})

const StackModalNavigator = createStackNavigator({
  Home: BottomTabNavigator,
  Player: PlayerStackNavigator,
  VideoPlayer,
  AddToPlaylist,
  NewPlaylist,
},{
  transparentCard: true,
  mode: 'modal',
  headerMode: 'none',
  defaultNavigationOptions: {
    gesturesEnabled: true,
    gestureResponseDistance: {
      vertical: 400
    }
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps
      const { index } = scene

      const height = layout.initHeight
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      })

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.10, index],
        outputRange: [0, 1, 1],
      })

      return { opacity, transform: [{ translateY }] }
    },
  })
})

const AppNavigator = createSwitchNavigator({
  Loading,
  Login,
  StackModalNavigator,
})

export default createAppContainer(AppNavigator)
