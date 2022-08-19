import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'IndexView',
    component: IndexView,
    meta : {
      hideHeadColor : true
    }
  },

  // 用户面板
  {
    path: '/userPanel',
    name: 'UserPanel',
    component: () => import('../views/UserPanel.vue'),
    children: [
      {
        path: '/',
        redirect: 'Dashboard'
      },
      // 用户面板
      {
        path: 'Dashboard', 
        component: () => import('../components/UserPanelComponents/DashboardCom.vue')
      },
      // 矿机
      {
        path: 'Workers',
        component: () => import('../components/UserPanelComponents/WorkersCom.vue')
      },
      // 收益
      {
        path: 'Earnings',
        component: () => import('../components/UserPanelComponents/EarningsCom.vue')
      },
      // 观察者
      {
        path: 'Watcher',
        component: () => import('../components/UserPanelComponents/WatcherCom.vue')
      },
      // 收款设置
      {
        path: 'Withdrawal',
        component: () => import('../components/UserPanelComponents/WithdrawalCom.vue')
      },
      // 报警设置
      {
        path: 'Alert',
        component: () => import('../components/UserPanelComponents/AlertCom.vue')
      },
      // 算力转让
      {
        path: 'HashrateTransfer',
        component: () => import('../components/UserPanelComponents/HashrateTransfer.vue')
      },
      // 常见问题
      {
        path: 'FAQ',
        component: () => import('../components/UserPanelComponents/FAQ.vue')
      },
      // 子账户列表
      {
        path: 'AccountList',
        component: () => import('../components/UserPanelComponents/AccountList.vue')
      },
      // 小额提币
      {
        path: 'ManualWithdrawal',
        component: () => import('../components/UserPanelComponents/ManualWithdrawal.vue')
      },
      // 算力总览
      {
        path: 'HashrateOverview',
        component: () => import('../components/UserPanelComponents/HashrateOverview.vue')
      },
      // 矿机数据中心
      {
        path: 'WorkerDataCenter',
        component: () => import('../components/UserPanelComponents/WorkerDataCenter.vue')
      },
      // 历史数据
      {
        path: 'HistoricalData',
        component: () => import('../components/UserPanelComponents/HistoricalData.vue')
      },
      // 账户总览
      {
        path: 'AccountOverview',
        component: () => import('../components/UserPanelComponents/AccountOverview.vue')
      },
      // 挖矿生息
      {
        path: 'DepositWithInterest',
        component: () => import('../components/UserPanelComponents/DepositWithInterest.vue')
      },
    ]
  },

  // 测试
  {
    path : '/test',
    component : () => import('../views/TestView.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
