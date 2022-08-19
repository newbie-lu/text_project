<template>
  <div class="dashboard">
    <a-row :gutter="[0, { xs: 24, sm: 24, lg: 32 }]">

      <a-col :span="22" :xl="9" :offset="1">
        <!-- 收益 -->
        <div class="earnings user_panel_box" @click="jump('Earnings')">
          <div class="earnings_top">
            <h4>昨日收益</h4>
            <p>0.00000000 <span>BTC</span></p>
          </div>

          <div class="earnings_bottom">
            <div class="earnings_bottom_left">
              <h4>今日预估</h4>
              <p>0.00000000 <span>BTC</span></p>
            </div>

            <div class="earnings_bottom_right">
              <h4>余额</h4>
              <p>0.00000000 <span>BTC</span></p>
            </div>
          </div>
        </div>

        <!-- 矿机数 -->
        <div class="workers user_panel_box" @click="jump('Workers')">
          <h3>矿机数</h3>
          <div class="placeholder"></div>
        </div>
      </a-col>

      <!-- 实时算力 -->
      <a-col :span="22" :xl="12" :offset="1">
        <div class="hashrate user_panel_box">

          <div class="hashrate_top">
            <div class="hashtate_top_left">
              <h4>实时算力</h4>
              <p>0.00 <span>H/s</span></p>
            </div>
            <div class="hashtate_top_right">
              <h4>24小时算力</h4>
              <p>0.00 <span>H/s</span></p>
            </div>
          </div>

          <div class="hashrate_chart">
            <h3>算力图表</h3>
            <a-radio-group default-value="hour" button-style="solid">
              <a-radio-button value="hour">
                1小时
              </a-radio-button>
              <a-radio-button value="day">
                1天
              </a-radio-button>
            </a-radio-group>
          </div>

          <div class="placeholder"></div>
        </div>
      </a-col>
    </a-row>

    <a-row class="mt_30" :gutter="[0, { xs: 24, sm: 24, lg: 32 }]">
      <a-col :span="22" :xl="7" :offset="1">
        <!-- 算力转让 -->
        <div class="hashrate_transfer user_panel_box" @click="jump('HashrateTransfer')">
          <h3>算力转让</h3>
          <div class="no_data">
            <img src="../../assets/images/empty-data.png" alt="没有数据">
          </div>
          <div class="hashrate_transfer_data">
            <div class="data">
              <h4>数量</h4>
              <p>0</p>
            </div>
            <div class="data">
              <h4>实时算力</h4>
              <p>0.00 <span>H/s</span></p>
            </div>
            <div class="data">
              <h4>24小时算力</h4>
              <p>0.00 <span>H/s</span></p>
            </div>
          </div>
        </div>

        <!-- 矿机监控 -->
        <div class="workers_monitoring user_panel_box mt_30">
          <h3>矿机监控</h3>
          <div class="no_data">
            <img src="../../assets/images/empty-data.png" alt="没有数据">
          </div>
        </div>
      </a-col>

      <a-col :span="22" :xl="14" :offset="1">
        <!-- 活跃矿机走势 -->
        <div class="workers_dynamic user_panel_box">
          <div class="workers_dynamic_title">
            <h3>活跃矿机走势</h3>
            <a-radio-group default-value="hour" button-style="solid">
              <a-radio-button value="hour">
                1小时
              </a-radio-button>
              <a-radio-button value="day">
                1天
              </a-radio-button>
            </a-radio-group>
          </div>

          <div class="placeholder"></div>
        </div>

        <!-- 矿机算力分布 -->
        <div class="workers_hashrate_distribution user_panel_box mt_30">
          <div class="workers_hashrate_distribution_title">
            <h3>矿机算力分布</h3>
            <a-radio-group default-value="now" button-style="solid">
              <a-radio-button value="now">
                实时
              </a-radio-button>
              <a-radio-button value="day">
                1天
              </a-radio-button>
            </a-radio-group>
          </div>

          <div class="placeholder"></div>
        </div>
      </a-col>
    </a-row>

    <!-- 版权所有 -->
    <copyright v-if="!theSmallScreen"></copyright>

    <foot-component v-else></foot-component>

    <a-back-top />
  </div>
</template>

<script>
import FootComponent from '../FootComponent.vue'
import Copyright from './CopyrightCom.vue'

export default {
  name: 'DashboardCom',
  props : {
    theSmallScreen : {
      type : Boolean,
      default : false
    },
  },

  components : {
    FootComponent,
    Copyright
  },

  data() {
    return {
      
    }
  },

  methods: {
    jump(path){
      this.$router.push(`/userPanel/${path}`)
    }
  },

  
}
</script>

<style lang="scss" scoped>

.dashboard{

  // 收益
  .earnings{
    // padding: 25px;
    cursor: pointer;

    p:nth-of-type(1){
      margin-bottom: 30px;
    }

    .earnings_bottom{
      display: flex;
      justify-content: space-between;
    }
  }
  
  // 矿机数
  .workers{
    margin-top: 30px;
    cursor: pointer;
    // padding: 25px;

    .placeholder{
      height: 150px;
      width: 100%;
    }
  }

  // 实时算力
  .hashrate{
    // padding: 25px;

    .hashrate_top{
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
    }

    .hashrate_chart{
      display: flex;
      justify-content: space-between;
    }

    .placeholder{
      width: 100%;
      height: 330px;
    }
  }

  // 算力转让
  .hashrate_transfer{
    cursor: pointer;

    .hashrate_transfer_data{
      display: flex;
      justify-content: space-between;

      h4{
        font-size: 14px;
      }
      
      p{
        font-size: 20px;
      }
    }
  }

  .no_data{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    
    img{
      width: 60px;
    }
  }

  // 活跃矿机走势
  .workers_dynamic{

    .workers_dynamic_title{
      display: flex;
      justify-content: space-between;
    }

    .placeholder{
      width: 100%;
      height: 200px;
    }
  }

  // 矿机算力分布
  .workers_hashrate_distribution{
    margin-bottom: 30px;

    .workers_hashrate_distribution_title{
      display: flex;
      justify-content: space-between;
    }

    .placeholder{
      width: 100%;
      height: 200px;
    }
  }

  .ant-back-top{
    right: 50px;
  }
}

.ant-radio-button-wrapper{
  padding: 0 20px;
  &:nth-of-type(1){
    border-radius: 17px 0 0 17px;
  }

  &:nth-of-type(2){
    border-radius: 0 17px 17px 0;
  }
}
</style>