<template>
  <!-- 小屏幕的侧边导航栏 -->
  <div class="the_small_screen_side_nav">
    <!-- 导航栏 -->
    <div class="nav" @click="showNav">
      <span class="iconfont icon-caidan nav-icon"></span>
    </div>

    <!-- 导航弹出层 -->
    <div class="nav_drawer" v-if="navVisible" ref="nav_drawer">
      <a-drawer 
        placement="left" 
        :visible="navVisible"
        @close="navClose"
        width="100%"
        :bodyStyle="{padding : '0px'}"
        :getContainer="() => $refs.nav_drawer"
      >
        <div class="the_small_screen_head_logo">LOGO</div>
        <ul class="nav_drawer_list" @click="navClick">
          <li class="nav_drawer_item" @click="showSubMenu('mining')">
            <span>挖矿</span>
            <a-icon type="down" />
          </li>
          <!-- 挖矿子菜单 -->
          <li class="sub_menu" :class="{show : showMining}">
            <ol>
              <li><router-link to="/userPanel/Dashboard">用户面板</router-link></li>
              <li><router-link to="/userPanel/Workers">矿机</router-link></li>
              <li><router-link to="/userPanel/Earnings">收益</router-link></li>
              <li><router-link to="/userPanel/Watcher">观察者</router-link></li>
              <li><router-link to="/userPanel/Withdrawal">收款设置</router-link></li>
              <li><router-link to="/userPanel/Alert">报警设置</router-link></li>
              <li><router-link to="/userPanel/HashrateTransfer">算力转让</router-link></li>
              <li><router-link to="/userPanel/FAQ">常见问题</router-link></li>
            </ol>
          </li>
          <li><router-link to="/userPanel/AccountList">子账户列表</router-link></li>
          <li><router-link to="/userPanel/ManualWithdrawal">小额提币</router-link></li>
          <li class="nav_drawer_item" @click="showSubMenu('dataOverview')">
            <span>数据总览</span>
            <a-icon type="down" />
          </li>
          <!-- 数据总览子菜单 -->
          <li class="sub_menu" :class="{show : showDataOverview}">
            <ol>
              <li><router-link to="/userPanel/HashrateOverview">算力总览</router-link></li>
              <li><router-link to="/userPanel/WorkerDataCenter">矿机数据中心</router-link></li>
              <li><router-link to="/userPanel/HistoricalData">历史数据</router-link></li>
            </ol>
          </li>
          <li class="nav_drawer_item" @click="showSubMenu('poolAccount')">
            <span>矿池账户</span>
            <a-icon type="down" />
          </li>
          <!-- 矿池账户子菜单 -->
          <li class="sub_menu" :class="{show : showPoolAccount}">
            <ol>
              <li><router-link to="/userPanel/AccountOverview">账户总览</router-link></li>
              <li><router-link to="/userPanel/DepositWithInterest">挖矿生息</router-link></li>
            </ol>
          </li>
        </ul>
      </a-drawer>
    </div>

    <!-- 子账户和币种 -->
    <div class="sub_account_and_coins">
      
      <!-- 子账户 -->
      <div class="sub_account" @click="showSubAccount">
        <a-icon type="cluster" />
        <span>sub account name</span>
      </div>
      <!-- 子账户弹出层 -->
      <div class="sub_account_drawer" ref="sub_account_drawer">
        <a-drawer 
          placement="left" 
          :visible="subAccountVisible"
          @close="SubAccountClose"
          width="100%"
          :bodyStyle="{padding : '0px'}"
          :getContainer="() => $refs.sub_account_drawer"
        >
          <div class="the_small_screen_head_logo">LOGO</div>
          
          <div class="sub_account_drawer_content">
            <div class="sub_account_search">
              <input type="text" placeholder="搜索子账户、备注信息">
              <div class="create_new_sub_account">
                <a-icon type="user-add" />
              </div>
            </div>

            <!-- 子账户列表 -->
            <ul class="sub_account_list">
              <li class="sub_account_item active">
                <img src="../assets/images/coins_icon/btc.svg" alt="BTC">
                <span class="sub_account_name">sub account name</span>
                <p>0.00 <span>H/s</span></p>
              </li>
            </ul>
          </div>

        </a-drawer>
      </div>

      <!-- 币种 -->
      <div class="coins" ref="coins">
        <a-dropdown
          :trigger="['click']"
          placement="bottomRight"
          :getPopupContainer="() => $refs.coins"
          overlayClassName="coins_dropdown"
        >
          <a @click="e => e.preventDefault()">
            <img src="../assets/images/coins_icon/btc.svg" alt="BTC">
          </a>
          <a-menu slot="overlay" @click="coinsClick">
            <a-menu-item key="BTC">
              <img src="../assets/images/coins_icon/btc.svg" alt="BTC">
              <span class="coins_dropdown_span" :style="{color : activeCoins === 'BTC' ? '#2ca6e0' : ''}">BTC</span>
            </a-menu-item>
            <a-menu-item key="ETH">
              <img src="../assets/images/coins_icon/eth.svg" alt="ETH">
              <span class="coins_dropdown_span" :style="{color : activeCoins === 'ETH' ? '#2ca6e0' : ''}">ETH</span>
            </a-menu-item>
            <a-menu-item key="ETC">
              <img src="../assets/images/coins_icon/etc.svg" alt="ETC">
              <span class="coins_dropdown_span" :style="{color : activeCoins === 'ETC' ? '#2ca6e0' : ''}">ETC</span>
            </a-menu-item>
            <a-menu-item key="ZEC">
              <img src="../assets/images/coins_icon/zec.svg" alt="ZEC">
              <span class="coins_dropdown_span" :style="{color : activeCoins === 'ZEC' ? '#2ca6e0' : ''}">ZEC</span>
            </a-menu-item>
            <a-menu-item key="ZEN">
              <img src="../assets/images/coins_icon/zen.svg" alt="ZEN">
              <span class="coins_dropdown_span" :style="{color : activeCoins === 'ZEN' ? '#2ca6e0' : ''}">ZEN</span>
            </a-menu-item>
            <a-menu-item key="LTC">
              <img src="../assets/images/coins_icon/ltc.svg" alt="LTC">
              <span class="coins_dropdown_span" :style="{color : activeCoins === 'LTC' ? '#2ca6e0' : ''}">LTC</span>
            </a-menu-item>
            <a-menu-item key="DCR">
              <img src="../assets/images/coins_icon/dcr.svg" alt="DCR">
              <span class="coins_dropdown_span" :style="{color : activeCoins === 'DCR' ? '#2ca6e0' : ''}">DCR</span>
            </a-menu-item>
            <a-menu-item key="DCRN">
              <img src="../assets/images/coins_icon/dcrn.svg" alt="DCRN">
              <span class="coins_dropdown_span" :style="{color : activeCoins === 'DCRN' ? '#2ca6e0' : ''}">DCRN</span>
            </a-menu-item>
            <a-menu-item key="DASH">
              <img src="../assets/images/coins_icon/dash.svg" alt="DASH">
              <span class="coins_dropdown_span" :style="{color : activeCoins === 'DASH' ? '#2ca6e0' : ''}">DASH</span>
            </a-menu-item>
            <a-menu-item key="CKB">
              <img src="../assets/images/coins_icon/ckb.svg" alt="CKB">
              <span class="coins_dropdown_span" :style="{color : activeCoins === 'CKB' ? '#2ca6e0' : ''}">CKB</span>
            </a-menu-item>
            <a-menu-item key="BCH">
              <img src="../assets/images/coins_icon/bch.svg" alt="BCH">
              <span class="coins_dropdown_span" :style="{color : activeCoins === 'BCH' ? '#2ca6e0' : ''}">BCH</span>
            </a-menu-item>
            <a-menu-item key="HNS">
              <img src="../assets/images/coins_icon/hns.svg" alt="HNS">
              <span class="coins_dropdown_span" :style="{color : activeCoins === 'HNS' ? '#2ca6e0' : ''}">HNS</span>
            </a-menu-item>
            <a-menu-item key="STC">
              <img src="../assets/images/coins_icon/stc.svg" alt="STC">
              <span class="coins_dropdown_span" :style="{color : activeCoins === 'STC' ? '#2ca6e0' : ''}">STC</span>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>

  </div>
</template>

<script>
export default {

  data() {
    return {
      navVisible : false,
      subAccountVisible : false,
      showMining : true,
      showDataOverview : false,
      showPoolAccount : false,
      activeCoins : 'BTC'
    }
  },

  methods : {
    // 显示导航弹出层
    showNav(){
      this.navVisible = true;
    },

    // 关闭导航弹出层
    navClose(){
      this.navVisible = false;
    },

    // 显示子账户列表
    showSubAccount(){
      this.subAccountVisible = true;
    },

    // 关闭子账户列表
    SubAccountClose(){
      this.subAccountVisible = false;
    },

    // 选择币种触发
    coinsClick( {key} ){
      console.log(key);
    },

    // 点击导航菜单触发
    navClick(e){
      console.log("点击菜单", e.target);
      console.log(e.target.nodeName);
      if(e.target.nodeName === "A"){
        this.navVisible = false;
      }
    },

    // 显示隐藏导航子菜单
    showSubMenu(menu){
      console.log(menu);
      if(menu === 'mining'){
        this.showMining = !this.showMining;
      }else if(menu === 'dataOverview'){
        this.showDataOverview = !this.showDataOverview;
      }else if(menu === 'poolAccount'){
        this.showPoolAccount = !this.showPoolAccount;
      }
    }
  }

  
}
</script>

<style lang="scss" scoped>
// 小屏幕的侧边导航栏
.the_small_screen_side_nav{
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;
  z-index: 101;

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
      padding: 5px;
      font-size: 18px;
      font-weight: bold;
      border: 1px solid #cfd3d4;
      border-radius: 50%;
    }
  }

  // 导航弹出层
  .nav_drawer{
    
    .ant-drawer-left{
      left: 0;
    }

    .nav_drawer_list{
      margin-top: 50px;

      .nav_drawer_item{
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:hover{
          background-color: transparent;
        }

        i{
          font-size: 12px;
        }
        
      }

      // 子菜单
      .sub_menu{
        height: auto;
        max-height: 0;
        overflow: hidden;
        padding: 0;

        transition: all .5s linear;

        &:hover{
          background-color: transparent;
        }

        &.show{
          max-height: 1000px;
        }

        li{
          padding: 0 40px;
          &:hover{
            background-color: #ecf5ff;
          }

          a{
            display: block;
            color: #303133;
            width: 100%;
            height: 100%;

            &.router-link-exact-active{
              color: #2ca6e0;
            }
          }
        }
      }
    }
  }

  // 子账户和币种
  .sub_account_and_coins{
    display: flex;
    
    // 子账户
    .sub_account{
      padding: 0px 15px;
      margin-right: 15px;
      height: 28px;
      line-height: 28px;
      border: 1px solid #cfd3d4;
      border-radius: 100px;

      display: flex;
      align-items: center;
      cursor: pointer;

      i{
        font-size: 18px;
        margin-right: 10px;
      }
    }

    // 子账户弹出层
    .sub_account_drawer{

      .ant-drawer-left{
        left: 0;
      }

      .sub_account_drawer_content{
        margin-top: 50px;
        padding-top: 20px;
        
        .sub_account_search{
          padding: 0 15px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
            
          input{
            flex: 1;
            outline-color: #2ca6e0;
            border: 1px solid #dcdfe6;
            border-radius: 100px;
            padding-left: 15px;
            padding-right: 30px;

            height: 40px;
            line-height: 40px;

            &::-webkit-input-placeholder{
              color: #ccc;
            }
          }

          .create_new_sub_account{
            width: 40px;
            height: 40px;
            background-color: #479dd3;
            border-radius: 50%;
            color: #fff;

            text-align: center;
            line-height: 40px;
            font-size: 18px;
            font-weight: bold;
            margin-left: 20px;
          }
        }
        
        // 子账户列表
        .sub_account_list{
          
          .sub_account_item{
            display: flex;
            align-items: center;
            padding: 12px 15px;
            cursor: pointer;

            &.active{
              background-color: rgba(169,211,242,.27);
            }

            img{
              width: 28px;
              height: 28px;
            }

            .sub_account_name{
              flex: 1;
              color: #2ca6e0;
              font-size: 16px;
              margin: 0 5px 0 10px;
            }

            p{
              margin: 0;
              font-size: 14px;
              font-weight: bold;
              span{
                font-size: 12px;
                color: rgba(0,0,0,.45);
              }
            }
          }
        }
      }
    }

    // 币种
    .coins{
      img{
        width: 30px;
        height: 30px;
      }

      .coins_dropdown{

        :global(.ant-tooltip-content){
          display: none;
        }

        .ant-dropdown-menu{
          height: 210px;
          overflow-y: auto;

          .ant-dropdown-menu-item{
            
            padding: 0 20px;
            width: 100px;
            height: 32px;
            display: flex;
            align-items: center;

            img{
              width: 22px;
              height: 22px;
              margin-right: 10px;
            }
          }
        }
      }
    }

  }

}
</style>