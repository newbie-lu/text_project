<template>
  <!-- 用户面板 -->
  <div class="user_panel">

    <a-layout>

    <a-layout-sider breakpoint="lg" @breakpoint="onBreakpoint" :collapsed="collapsed">
    
    <!-- 侧边导航栏 -->
    <div class="left" ref="left" v-if="!theSmallScreen">

      <div class="logo">LOGO</div>

      <a-menu
        :default-selected-keys="['用户面板']"
        :open-keys.sync="openKeys"
        :theme="theme"
        mode="inline"
        @click="navClick"
        :inline-collapsed="collapsed"
        :selected-keys="selectedKeys"
      >
        <a-sub-menu key="挖矿">
          <span slot="title"><a-icon type="shopping-cart" /><span>挖矿</span></span>
          <a-menu-item key="用户面板">
            用户面板
          </a-menu-item>
          <a-menu-item key="矿机">
            矿机
          </a-menu-item>
          <a-menu-item key="收益">
            收益
          </a-menu-item>
          <a-menu-item key="观察者">
            观察者
          </a-menu-item>
          <a-menu-item key="收款设置">
            收款设置
          </a-menu-item>
          <a-menu-item key="报警设置">
            报警设置
          </a-menu-item>
          <a-menu-item key="算力转让">
            算力转让
          </a-menu-item>
          <a-menu-item key="常见问题">
            常见问题
          </a-menu-item>
        </a-sub-menu>

        <a-menu-item key="子账户列表">
          <a-icon type="user" />
          <span>子账户列表</span>
        </a-menu-item>

        <a-menu-item key="小额提币">
          <a-icon type="money-collect" />
          <span>小额提币</span>
        </a-menu-item>

        <a-sub-menu key="数据总览">
          <span slot="title"><a-icon type="database" /><span>数据总览</span></span>
          <a-menu-item key="算力总览">
            算力总览
          </a-menu-item>
          <a-menu-item key="矿机数据中心">
            矿机数据中心
          </a-menu-item>
          <a-menu-item key="历史数据">
            历史数据
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="矿池账户">
          <span slot="title"><a-icon type="account-book" /><span>矿池账户</span></span>
          <a-menu-item key="账户总览">
            账户总览
          </a-menu-item>
          <a-menu-item key="挖矿生息">
            挖矿生息
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
      <!-- 导航栏收缩展开按钮 -->
      <div class="collapse_btn" @click="toggleCollapsed" ref="collapse_btn">
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </div>
      <div class="placeholder"></div>
    </div>

    <!-- 小屏幕侧边导航栏 -->
    <the-small-screen-side-nav v-else></the-small-screen-side-nav>
    <div class="small_placeholder" v-if="theSmallScreen"></div>

    </a-layout-sider>

    <div class="right" :style="{marginLeft : theSmallScreen ? '0px' : collapsed ? '64px' : '256px'}">
      <!-- 顶部导航栏 -->
      <head-component 
        :collapsed="collapsed" 
        :the-small-screen="theSmallScreen" 
        v-if="!theSmallScreen"
      ></head-component>
      <!-- 小屏幕顶部导航栏 -->
      <the-small-screen-head v-else></the-small-screen-head>
      <div class="head_placeholder"></div>
      <!-- 面包屑导航提示 -->
      <div class="crumbs" v-show="showCrumbs">
        <a-breadcrumb>
          <a-breadcrumb-item v-for="(item,index) in crumbsKeys" :key="index">{{item}}</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <!-- 内容 -->
      <!-- <components class="content" :is="showComponent"></components> -->
      <router-view
        :the-small-screen="theSmallScreen"
      ></router-view>
    </div>
    
    </a-layout>
  </div>
</template>

<script>
import HeadComponent from '../components/HeadComponent.vue'
import TheSmallScreenHead from '@/components/TheSmallScreenHead.vue';
import TheSmallScreenSideNav from '../components/TheSmallScreenSideNav.vue'
// import Dashboard from '../components/UserViewComponents/Dashboard.vue'
// import Workers from '../components/UserViewComponents/WorkersCom.vue'

export default {
  name : 'UserPanel',
  components : {
    HeadComponent,
    TheSmallScreenHead,
    TheSmallScreenSideNav,
    // Dashboard,
    // Workers
  },
  data() {
    return {
      // 默认展开的菜单项
      openKeys: ['挖矿'],
      // 导航缩起/展开 开关
      collapsed : false,
      // 面包屑导航数组
      crumbsKeys : ['挖矿', '用户面板'],
      // 显示的内容组件
      // showComponent : 'Dashboard',
      // 导航对应的路由
      pathData : {
        "用户面板": 'Dashboard',
        "矿机": 'Workers',
        "收益": 'Earnings',
        "观察者": 'Watcher',
        "收款设置": 'Withdrawal',
        "报警设置": 'Alert',
        "算力转让": 'HashrateTransfer',
        "常见问题": 'FAQ',
        "子账户列表": 'AccountList',
        "小额提币": 'ManualWithdrawal',
        "算力总览": 'HashrateOverview',
        "矿机数据中心": 'WorkerDataCenter',
        "历史数据": 'HistoricalData',
        "账户总览": 'AccountOverview',
        "挖矿生息": 'DepositWithInterest',
      },
      // 主题色
      theme : 'dark',
      // 是否显示面包屑导航提示
      showCrumbs : true,
      // 是否为小屏幕
      theSmallScreen : false,
      // 当前选中的菜单
      selectedKeys : ['用户面板']
    };
  },
  computed: {
    
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },

    selectedKeys(val){
      console.log("selectedKeys",val);
    }
  },
  methods: {
    // 点击菜单触发
    navClick(e) {
      console.log('click', e);
      this.crumbsKeys = e.keyPath.reverse();
      // this.showComponent = this.pathData[this.crumbsKeys[this.crumbsKeys.length-1]];

      let navStr = this.crumbsKeys[this.crumbsKeys.length-1];
      this.selectedKeys = [navStr];

      // 编程式导航跳转,切换内容
      let path = this.pathData[navStr];
      if(this.$route.path !== `/userPanel/${path}`){
        this.$router.push(`/userPanel/${path}`);
      }
    },

    // 切换侧边导航栏缩起和展开
    toggleCollapsed(){
      this.collapsed = !this.collapsed;
      if(this.collapsed){
        this.openKeys = [];
        this.theme = 'light';
        this.$refs.left.style.width = "64px";
        this.$refs.collapse_btn.style.width = "64px";
      }else{
        this.theme = 'dark';
        this.$refs.left.style.width = "256px";
        this.$refs.collapse_btn.style.width = "256px";
      }
    },

    // 当页面宽度缩小到992px以下时触发
    onBreakpoint(broken){
      console.log('切换小屏',broken);
      if(broken){
        this.collapsed = true;
        this.showCrumbs = false;
        this.theSmallScreen = true;
      }else{
        this.collapsed = false;
        this.showCrumbs = true;
        this.theSmallScreen = false;
      }
    },

    // 改变选中的菜单
    changeSelectedKeys(key){
      this.selectedKeys = [key];
    },
  },

  beforeRouteUpdate(to, from, next){
    let navStr = "";
    for(let key in this.pathData){
      if(to.path === `/userPanel/${this.pathData[key]}`){
        navStr = key;
      }
    }
    this.changeSelectedKeys(navStr);

    next();
    // console.log(to);
  },

  created(){
    // console.log("当前选中的菜单", this.selectedKeys);
    // console.log(this.$route);
    // console.log(this.$router);
  },
}
</script>

<style lang="scss" scoped>
// 用户面板
.user_panel{
  // width: 100vw;

  .ant-layout{
    display: block;
  }

  // 侧边导航栏
  .left{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    background-color: #3898fe;
    width: 256px;

    // 滚动条样式
    overflow: auto;
    &::-webkit-scrollbar{
      width: 2px;
    }

    transition: width .3s ease-in-out;

    .logo{
      font-size: 25px;
      font-weight: bold;
      color: #fff;
      padding-left: 30px;
      height: 50px;
      line-height: 50px;
    }

    // 修改侧边导航栏缩起样式
    .ant-menu-inline-collapsed{
      width: 64px;

      .ant-menu-item,
      :deep(.ant-menu-submenu-title){
        display: flex;
        justify-content: center;
      }
    }
    // 修改侧边导航栏样式
    .ant-menu{
      background-color: transparent;
      color: #fff;

      :deep(.ant-menu){
        background-color: transparent;
        color: #fff;
      }

      :deep(.ant-menu-inline.ant-menu-sub){
        box-shadow: none;
      }

      .ant-menu-submenu-selected{
        color: #fff;
        background-color: rgba(0,0,0,.1);
      }

      :deep(.ant-menu-submenu){
        padding: 5px 0;
      }

      :deep(.ant-menu-submenu-title:hover){
        color: #fff;
        &::before{
          background: hsla(0,0%,100%,0.4);
        }
      }

      .ant-menu-item{
        color: #fff;
      }

      .ant-menu-item-selected{
        color: #fff;
        background-color: transparent;
      }

      .ant-menu-item::before,
      :deep(.ant-menu-submenu-title::before){
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -20px;
        left: 10px;
        right: 10px;
        height: 40px;
        background: hsla(0,0%,100%,0);
        border-radius: 8px;
        transition: all .3s;
      }

      .ant-menu-item-selected::before{
        background: hsla(0,0%,100%,0.4);
      }

      .ant-menu-item:hover{
        color: #fff;
        &::before{
          background: hsla(0,0%,100%,0.4);
        }
      }
    }

    // 导航栏收缩展开按钮
    .collapse_btn{
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 10;
      width: 256px;
      height: 55px;
      background-color: #3898fe;
      border-top: 1px solid hsla(0,0%,100%,.3);
      cursor: pointer;

      transition: width .3s ease-in-out;
      
      display: flex;
      align-items: center;
      padding-left: 20px;

      i{
        font-size: 20px;
        color: #fff;
      }
    }

    .placeholder{
      width: 100%;
      height: 55px;
    }
    
  }

  .small_placeholder{
    width: 100%;
    height: 48px;
  }

  // 顶部导航栏和内容
  .right{
    // margin-left: 256px;
    position: relative;
    z-index: 100;
    background-color: #f9f8fa;

    transition: margin .3s ease-in-out;

    :global(.ant-dropdown-menu-item:hover){
      color: #2ca6e0;
    }

    .head_placeholder{
      width: 100%;
      height: 67px;
    }

    .crumbs{
      font-weight: bold;
      padding: 20px;
    }

    .content{
      padding: 20px;
    }
  }
}

.ant-menu-dark, .ant-menu-dark .ant-menu-sub {
    color: #fff;
    background-color: #3898fe;
}
</style>
