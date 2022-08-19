<template>
  <!-- 顶部导航栏 -->
  <header class="head" :style="{backgroundColor : $route.meta.hideHeadColor ? '' : '#fff', left : theSmallScreen ? '0px' : headLeft}" ref="head">
    <ul class="nav">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/userPanel/Dashboard">用户面板</router-link></li>
      <li><a href="javascript:void(0);">账户总览</a></li>
      <li><a href="javascript:void(0);">矿池App</a></li>
      <li><a href="javascript:void(0);">矿机排行</a></li>
      <li><a href="javascript:void(0);">工具</a></li>
      <li><a href="javascript:void(0);">帮助</a></li>
    </ul>

    <!-- 用户和语言 -->
    <div class="user_and_language">

      <!-- 用户 -->
      <div class="user">
        <a-dropdown placement="bottomRight" overlayClassName="user_dropdown">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            <img src="../assets/images/user_icon.png" alt="用户图标">
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay" @click="menuClick" >
            <a-menu-item key="1" class="language_box">
              <span class="dropdown_span">xxxxxxxxxxxx.com</span>
            </a-menu-item>
            <a-menu-item key="2" class="language_box">
              <span class="dropdown_span">uid:xxxxxxxxxx</span>
            </a-menu-item>
            <a-menu-item key="api" class="language_box">
              <span class="dropdown_span">API管理</span>
            </a-menu-item>
            <a-menu-item key="user" class="language_box">
              <span class="dropdown_span">用户中心</span>
            </a-menu-item>
            <a-menu-item key="logout" class="language_box">
              <span class="dropdown_span">退出登录</span>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>

      <div class="niming">匿名挖矿</div>

      <!-- 语言 -->
      <div class="language">
        <a-dropdown placement="bottomCenter" overlayClassName="language_dropdown">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
             <img src="../assets/images/cn.png" alt="语言">
             <a-icon type="down" />
          </a>
          <a-menu slot="overlay" @click="menuClick">
            <a-menu-item key="简体中文" class="language_flex_box language_box">
              <img class="language_flag" src="../assets/images/cn.png" alt="zh" />
              <span class="dropdown_span" :style="{color : language === 'zh' ? '#2ca6e0' : ''}">简体中文</span>
            </a-menu-item>
            <a-menu-item key="繁体中文" class="language_flex_box language_box">
              <img class="language_flag" src="../assets/images/cn.png" alt="zh" />
              <span class="dropdown_span" :style="{color : language === 'zh-tw' ? '#2ca6e0' : ''}">繁体中文</span>
            </a-menu-item>
            <a-menu-item key="English" class="language_flex_box language_box">
              <img class="language_flag" src="../assets/images/us.png" alt="us" />
              <span class="dropdown_span" :style="{color : language === 'English' ? '#2ca6e0' : ''}">English</span>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeadComponent',

  props : {
    collapsed : {
      type : Boolean,
      default : false
    },

    theSmallScreen : {
      type : Boolean,
      default : false
    }
  }, 

  data() {
    return {
      headLeft : '0px',
      language : 'zh'
    }
  },

  watch : {
    collapsed(newValue){
      if(newValue){
        this.headLeft = '64px';
      }else{
        this.headLeft = '256px';
      }
    }
  },

  methods : {
    // 选择下拉菜单触发
    menuClick( {key} ) {
      console.log(key);
    }
  },

  created() {
    // console.log(this.$route);
    let path = this.$route.path;
    if(path.includes('userPanel')){
      this.headLeft = '256px';
    }
  }
}
</script>

<style lang="scss" scoped>
// 顶部导航栏
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  transition: left .3s ease-in-out;

  .nav{
    display: flex;
    margin: 0;
    li{
      margin: 20px;
      white-space: nowrap;
      color: #363636;
      font-size: 18px;

      a{
        position: relative;
        color: #363636;
        &.router-link-exact-active{
          color: #4799d1;
        }

        &::after{
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          margin-left: -13px;
          height: 4px;
          width: 24px;
          border-radius: 2px;
          background: transparent;
          transition: all .3s linear;
        }

        &.router-link-exact-active::after,
        &:hover::after{
          background-color: #4799d1;
        }

        &:hover{
          color: #4799d1;
        }
      }
    }
  }

  // 用户和语言
  .user_and_language{
    display: flex;
    align-items: center;
    margin-right: 20px;
    
    white-space: nowrap;
    
    // 用户
    .user{
      img{
        width: 30px;
        margin-right: 10px;
      }

      :global(.user_dropdown){
        top: 55px!important;
      }
      :global(.dropdown_span){
        display: block;
        padding: 10px 20px;
      }
    }

    .niming{
      margin: 0 20px;

      &:hover{
        color: #4799d1;
        cursor: pointer;
      }
    }

    // 语言
    .language{
      img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        
      }

      :global(.language_flag){
        width: 24px;
        height: 16px;
      }

      :global(.language_flex_box){
        display: flex;
        align-items: center;
      }

      :global(.language_box){
        border-bottom: 1px solid #f3f5f5;
      }
    }
  }
}
</style>