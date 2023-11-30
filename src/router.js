import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Transactions from './pages/Transactions.vue'
import TransactionDetail from './pages/TransactionDetail.vue'
import NotFound from './pages/404.vue'

const routes = [
	{
		path: '/',
		name: 'overview-router',
		component: Home,
	},
	{
		path: '/transactions',
		name: 'transactions-router',
		component: Transactions,
	},
	{
		path: '/transactions/:id',
		name: 'transation-details-router',
		component: TransactionDetail,
	},
	{
		path: '/ts',
		redirect: '/transactions',
	},
	{
		path: '/:pathMatch(.*)*',
		component: NotFound,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
