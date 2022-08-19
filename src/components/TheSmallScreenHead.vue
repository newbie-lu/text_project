<template>
  <!-- 小屏幕的导航栏 -->
  <header class="the_small_screen_head">
    <!-- 导航栏 -->
    <div class="nav" @click="showNav">
      <span class="iconfont icon-liebiao1 nav-icon"></span>
    </div>

    <!-- 导航弹出层 -->
    <div class="nav_drawer" v-if="navVisible">
      <a-drawer 
        placement="left" 
        :visible="navVisible"
        @close="navClose"
        width="100%"
        :bodyStyle="{padding : '0px'}"
      >
        <div class="the_small_screen_head_logo">LOGO</div>
        <ul class="nav_drawer_list">
          <li @click="navClose"><router-link to="/">首页</router-link></li>
          <li @click="navClose"><router-link to="/userPanel/Dashboard">用户面板</router-link></li>
          <li><a href="javascript:void(0);">账户总览</a></li>
          <li><a href="javascript:void(0);">矿池App</a></li>
          <li><a href="javascript:void(0);">矿机排行</a></li>
          <li><a href="javascript:void(0);">工具</a></li>
          <li><a href="javascript:void(0);">帮助</a></li>
        </ul>
      </a-drawer>
    </div>

    <!-- logo -->
    <div class="logo">LOGO</div>

    <!-- 用户和语言 -->
    <div class="user_and_language">
      
      <!-- 用户 -->
      <span class="iconfont icon-jurassic_user" @click="showUser"></span>
      <!-- 用户弹出层 -->
      <div class="user_drawer">
        <a-drawer 
          placement="left" 
          :visible="userVisible"
          @close="userClose"
          width="100%"
          :bodyStyle="{padding : '0px'}"
        >
          <div class="the_small_screen_head_logo">LOGO</div>
          <div class="user_info">
            <img src="../assets/images/user_icon.png" alt="user">
            <p>xxxxxxxxxx.com</p>
            <p>UID: xxxxxxxxxx</p>
          </div>
          <ul class="nav_drawer_list">
            <li><a href="javascript:void(0);">API管理</a></li>
            <li><a href="javascript:void(0);">用户中心</a></li>
            <li><a href="javascript:void(0);">匿名挖矿</a></li>
          </ul>

          <a-button class="logout_btn" type="primary">退出登录</a-button>
        </a-drawer>
      </div>

      <!-- 语言 -->
      <a-dropdown :trigger="['click']" placement="bottomRight">
        <a @click="e => e.preventDefault()">
          <span class="iconfont icon-yuyan"></span>
        </a>
        <a-menu slot="overlay" @click="languageClick">
          <a-menu-item key="简体中文">
            <span class="dropdown_span" :style="{color : language === 'zh' ? '#2ca6e0' : ''}">简体中文</span>
          </a-menu-item>
          <a-menu-item key="繁体中文">
            <span class="dropdown_span" :style="{color : language === 'zh-tw' ? '#2ca6e0' : ''}">繁体中文</span>
          </a-menu-item>
          <a-menu-item key="English">
            <span class="dropdown_span" :style="{color : language === 'English' ? '#2ca6e0' : ''}">English</span>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>

  </header>
</template>

<script>
export default {

  data() {
    return {
      navVisible : false,
      userVisible : false,
      language : 'zh'
    }
  },

  methods : {
    showNav(){
      this.navVisible = true;
    },

    navClose(){
      this.navVisible = false;
    },

    showUser(){
      this.userVisible = true;
    },

    userClose(){
      this.userVisible = false;
    },

    languageClick( {key} ){
      console.log(key);
    }
  }

  
}
</script>

<style lang="scss" scoped>
// 小屏幕的导航栏
.the_small_screen_head{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  height: 48px;
  padding: 0 18px;
  background-color: #fff;
  border-bottom: 1px solid #ededed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  // 导航栏
  .nav{
    .nav-icon{
      font-size: 20px;
      font-weight: bold;
    }
  }

  // 小屏幕弹出层LOGO
  :global(.the_small_screen_head_logo){
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 25px;
    font-weight: bold;
  }

  :global(.the_small_screen_head_logo::after){
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 1px;
    background-color: #ededed;
  }

  // 导航弹出层
  .nav_drawer{
    :global(.nav_drawer_list){
      margin-top: 50px;
    }

    :global(.nav_drawer_list>li){

      padding: 0 20px;
      height: 56px;
      line-height: 56px;
      font-size: 16px;
      cursor: pointer;

    }

    :global(.nav_drawer_list>li:hover){
      background-color: #ecf5ff;
    }

    :global(.nav_drawer_list>li>a){
      font-family: AlibabaPuHuiTi;
      color: #303133;
      display: block;
      width: 100%;
      height: 100%;
    }

    :global(.nav_drawer_list>li .router-link-exact-active){
      color: #2ca6e0;
    }
  }

  

  // logo
  .logo{
    font-size: 25px;
    font-weight: bold;
  }

  // 用户和语言
  .user_and_language{
    display: flex;
    span{
      margin-right: 15px;
      font-size: 20px;
      font-weight: bold;
    }

    a,
    a:hover{
      color: #000;
    }

    // 用户弹出层
    .user_drawer{
      :global(.user_info){
        margin: 60px 15px 10px;
        padding: 20px 15px;
        text-align: center;
        box-shadow: 1px 0 20px 0 rgb(0 0 0 / 5%);
        border: 1px solid #f3f3f3;
        border-radius: 13px;
      }
      :global(.user_info img){
        width: 55px;
        border-radius: 50%;
      }

      :global(.user_info>p){
        margin: 0;
        margin-top: 10px;
      }

      :global(.logout_btn.ant-btn){
        position: absolute;
        bottom: 20px;
        left: 15px;
        right: 15px;
        height: 40px;
        background-color: #2ca6e0;
      }
    }
  }
}
</style>