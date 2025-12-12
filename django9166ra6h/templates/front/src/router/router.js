import VueRouter from 'vue-router'
//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import guangzhouxfList from '../pages/guangzhouxf/list'
import guangzhouxfDetail from '../pages/guangzhouxf/detail'
import guangzhouxfAdd from '../pages/guangzhouxf/add'
import guangzhouxfforecastList from '../pages/guangzhouxfforecast/list'
import guangzhouxfforecastDetail from '../pages/guangzhouxfforecast/detail'
import guangzhouxfforecastAdd from '../pages/guangzhouxfforecast/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'guangzhouxf',
					component: guangzhouxfList
				},
				{
					path: 'guangzhouxfDetail',
					component: guangzhouxfDetail
				},
				{
					path: 'guangzhouxfAdd',
					component: guangzhouxfAdd
				},
				{
					path: 'guangzhouxfforecast',
					component: guangzhouxfforecastList
				},
				{
					path: 'guangzhouxfforecastDetail',
					component: guangzhouxfforecastDetail
				},
				{
					path: 'guangzhouxfforecastAdd',
					component: guangzhouxfforecastAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
