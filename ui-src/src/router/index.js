import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Search from '@/pages/Search';
import MyFollow from '@/pages/MyFollow';
import Profile from '@/pages/Profile';
import PostDetail from '@/pages/PostDetail';
import MoreComments from '@/pages/MoreComments';
import Community from '@/pages/Community';
import EditHrefList from '@/pages/EditHrefList';
import HeatMap from '@/pages/HeatMap';
import Message from '@/pages/Message';
import Mine from '@/pages/Mine';
import EditPost from '@/pages/EditPost';
import PostList from '@/pages/PostList';
const EditProfile = () => import('@/pages/EditProfile');
const MyComments = () => import('@/pages/MyComments');
const MyCollections = () => import('@/pages/MyCollections');
const tabManager = () => import('@/pages/tabManager');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'homePage',
      component: Home
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
    },
    {
      path: '/editHrefList',
      name: 'EditHrefList',
      component: EditHrefList,
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
    },
    {
      path: '/heatMap',
      name: 'HeatMap',
      component: HeatMap,
    },
    {
      path: '/postDetail/:id',
      name: 'postDetailPage',
      component: PostDetail
    },
    {
      path: '/moreComments/:id',
      name: 'moreComments',
      component: MoreComments
    },
    {
      path: '/search',
      name: 'searchPage',
      component: Search
    },
    {
      path: '/myFollow',
      name: 'myfollowPage',
      component: MyFollow
    },
    {
      path: '/editProfile',
      name: 'editProfile',
      component: EditProfile
    }, {
      path: '/myComments',
      name: 'myCommentsPage',
      component: MyComments
    }, {
      path: '/myCollections',
      name: 'myCollections',
      component: MyCollections
    },
    {
      path: '/tabManager',
      name: 'tabManagerPage',
      component: tabManager
    },
    {
      path: '/profile',
      name: 'profilePage',
      component: Profile
    },
    {
      path: '/register',
      name: 'registerPage',
      component: Register
    },
    {
      path: '/login',
      name: 'loginPage',
      component: Login
    },
    {
      path: '/message',
      name: 'Messaage',
      component: Message,
      meta: '首页',
      children: [
        {
          path: 'postlist',
          name: 'postListPage',
          component: PostList,
          meta: '文章列表',
        },
        {
          path: 'editpost',
          name: 'editPostPage',
          component: EditPost,
          meta: '发布文章',
        }
      ]
    },

  ]
});
