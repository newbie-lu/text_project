<template>
  <footer class="foot">
    
    <a-row type="flex" justify="space-between">

      <!-- 底部logo -->
      <a-col :span="24" :lg="{span : 7}" class="foot_logo">
        <a-row type="flex" justify="space-between">
          <a-col :lg="{span : 24}">
            <p>
              去中心化 
              <br /> 
              让世界更美好
            </p>
          </a-col>
          <a-col :lg="{span : 24}">
            <div class="logo">LOGO</div>
          </a-col>
        </a-row>
      </a-col>

      <!-- 底部导航 -->
      <a-col :span="24" :lg="{span : 12}" class="foot_nav">
        <ul class="foot_link_list">
          <li>
            <h4>产品</h4>
            <a href="javascript:void(0);">矿池</a>
            <a href="javascript:void(0);">矿池账户</a>
            <a href="javascript:void(0);">矿池App</a>
            <a href="javascript:void(0);">矿机排行</a>
          </li>
          <li>
            <h4>服务</h4>
            <a href="javascript:void(0);">API文档</a>
            <a href="javascript:void(0);">VIP申请</a>
            <a href="javascript:void(0);">客服邮箱</a>
          </li>
          <li>
            <h4>帮助</h4>
            <a href="javascript:void(0);">帮助中心</a>
            <a href="javascript:void(0);">常见问题</a>
            <a href="javascript:void(0);">历史公告</a>
            <a href="javascript:void(0);">提交工单</a>
          </li>
          <li>
            <h4>关于</h4>
            <a href="javascript:void(0);">隐私政策</a>
            <a href="javascript:void(0);">服务协议</a>
            <a href="javascript:void(0);">免责声明</a>
          </li>
        </ul>
      </a-col>
    </a-row>

    <a-row type="flex" justify="space-between" align="middle">

      <!-- 语言-->
      <a-col :span="24" :lg="{span : 4, order : 1}" class="foot_language_and_social">

        <a-row type="flex" justify="space-between">
          <a-col :lg="{span : 24}">
            <div class="foot_language">
              <img src="../assets/images/cn.png" alt="zh">

              <a-dropdown placement="topCenter" overlayClassName="language_dropdown">

                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                  <span>中文</span>
                  <a-icon type="down" />
                </a>
                
                <a-menu slot="overlay" @click="languageClick">
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
          </a-col>

          <a-col :lg="{span : 24}">
            <div class="foot_social">
              <a href="javascript:void(0);"></a>
              <a href="javascript:void(0);"></a>
              <a href="javascript:void(0);"></a>
              <a href="javascript:void(0);"></a>
            </div>
          </a-col>
        </a-row>
      </a-col>

      <!-- 版权 -->
      <a-col :span="24" :lg="{span : 6}" class="foot_copyright">
        <p>
          &copy; 2017-2022 版权所有
          <br />
          The Little Bitcoin Book
        </p>
      </a-col>
    </a-row>
  </footer>
</template>

<script>

export default {
  data() {
    return {
      language : 'zh'
    }
  },

  methods : {
    // 选择语言时触发
    languageClick( {key} ){
      console.log("点击的语言", key);
    }
  }

  
}
</script>

<style lang="scss" scoped>
.foot{
  padding: 40px 9vw;
  color: #fff;
  background: #3898fe;

  // 底部logo
  .foot_logo{
    p{
      font-size: 26px;
    }

    .logo{
      font-size: 30px;
      font-weight: bold;
    }
  }

  // 底部导航
  .foot_nav{
    .foot_link_list{
      display: flex;
      justify-content: space-between;
      li{
        display: flex;
        flex-direction: column;
        h4{
          font-size: 20px;
          color: #fff;
          position: relative;

          &::before{
            content: "";
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 34px;
            height: 2px;
            background-color: #fff;
          }
        }
        a{
          color: #fff;
          margin-top: 10px;
          font-size: 14px;
        }
      }
    }
  }

  // 版权
  @media (max-width : 992px){
    .foot_copyright{
      margin-top: 20px;
      text-align: center;
    }
  }


  // 语言
  .foot_language_and_social{

    .foot_language{
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 20px;
      }

      .ant-dropdown-link{
        color: #fff;
        span{
          margin-right: 10px;
        }
      }
    }

    .foot_social{
      margin-top: 20px;
      display: flex;
      align-items: center;
      a{
        flex: none;
        margin-right: 20px;
        display: block;
        width: 30px;
        height: 30px;
        color: hsla(0,0%,100%,.8);
        border: 1px solid hsla(0,0%,100%,.8);
        border-radius: 50%;
        box-sizing: border-box;
        background: 50% no-repeat;
        background-size: cover;

        &:nth-child(1){
          background-image: url('../assets/images/twitter_logo.png');
        }

        &:nth-child(2){
          background-image: url('../assets/images/medium_logo.png');
        }

        &:nth-child(3){
          background-image: url('../assets/images/reddit_logo.png');
        }

        &:nth-child(4){
          margin-right: 0;
          background-image: url('../assets/images/telegram_logo.png');
        }
      }
    }
  }
}
</style>