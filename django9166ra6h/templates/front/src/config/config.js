export default {
	baseUrl: 'http://localhost:8080/django9166ra6h/',
	name: '/django9166ra6h',
	indexNav: [
		{
			name: '广州新房',
			url: '/index/guangzhouxf',
		},
		{
			name: '线性回归预测',
			url: '/index/guangzhouxfforecast',
		},
		{
			name: '房价资讯',
			url: '/index/news'
		},
	],
	cateList: [
		{
			name: '房价资讯',
			refTable: 'newstype',
			refColumn: 'typename',
		},
	]
}
