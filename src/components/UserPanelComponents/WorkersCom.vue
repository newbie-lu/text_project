<template>
  <!-- 矿机 -->
  <div class="workers">

    <a-row type="flex">

      <!-- 全部 -->
      <a-col :offset="1">
        <div class="all_workers user_panel_box active">
          <h4>全部</h4>
          <div class="workers_count">
            <p><span>0</span> / <span>0</span></p>
            <p>0 <span>H/s</span></p>
          </div>
          <div class="placeholder"></div>
        </div>
      </a-col>

      <!-- 未分组 -->
      <a-col>
        <div class="no_group_workers user_panel_box">
          <h4>未分组</h4>
          <div class="workers_count">
            <p><span>0</span> / <span>0</span></p>
            <p>0 <span>H/s</span></p>
          </div>
          <div class="placeholder"></div>
        </div>
      </a-col>

      <!-- 添加分组 -->
      <a-col>
        <div class="add_group">
          <a-icon type="plus-circle" />
          <h4>添加分组</h4>
        </div>
      </a-col>
    </a-row>

    <!-- 矿机算力分布 -->
    <a-row>
      <a-col :span="22" :offset="1">
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

    <!-- 矿机列表 -->
    <a-row>
      <a-col :span="22" :offset="1">
        <div class="miner_list user_panel_box mt_30">

          <div class="miner_list_title">
            <h3>矿机列表</h3>
            <div class="miner_list_title_btns">
              <a-button type="primary"> <span class="iconfont icon-bijijilu btns_icon"></span> 导出在线记录</a-button>
              <a-button type="primary"> <span class="iconfont icon-shandian btns_icon"></span> 导出预估电费</a-button>
              <a-button type="primary"> <span class="iconfont icon-liebiao2 btns_icon"></span> 导出矿机列表</a-button>
            </div>
          </div>

          <div class="miner_list_search">
            <h4>矿机</h4>
            <div class="miner_search">
              <a-input placeholder="搜索矿机" />
              <a-button type="primary"><span class="iconfont icon-search"></span></a-button>
              <a-button type="primary">重置</a-button>
            </div>
          </div>

          <div class="miner_list_content">
            <a-tabs default-active-key="1" @change="changeTab">
              <a-tab-pane key="1">
                <span slot="tab">全部(0)</span>
              </a-tab-pane>
              <a-tab-pane key="2">
                <span slot="tab">活跃(0)</span>
              </a-tab-pane>
              <a-tab-pane key="3">
                <span slot="tab">不活跃(0)</span>
              </a-tab-pane>
              <a-tab-pane key="4">
                <span slot="tab">失效(0)</span>
              </a-tab-pane>
            </a-tabs>
          </div>
        </div>
      </a-col>
    </a-row>

    <!-- 矿机日志 -->
    <a-row>
      <a-col :span="22" :offset="1">
        <div class="miner_log user_panel_box mt_30">
          <h3>矿机日志</h3>
        </div>
      </a-col>
    </a-row>

    <!-- 版权所有 -->
    <copyright v-if="!theSmallScreen"></copyright>

    <foot-component v-else></foot-component>
  </div>
</template>

<script>
import FootComponent from '../FootComponent.vue'
import Copyright from './CopyrightCom.vue'

export default {

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

  methods : {
    changeTab(key){
      console.log(key);
    }
  }
  

  
}
</script>

<style lang="scss" scoped>
// 矿机
.workers{


  .workers_count{
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      color: #333;
      font-size: 14px;
      &:nth-child(1){
      
        span:nth-child(1){
          color: #53b777;
        }

        span:nth-child(2){
          color: #f85b4c;
        }
      }
    }
  }

  // 全部  未分组
  .all_workers,
  .no_group_workers{
    width: 220px;
    margin-right: 30px;
    padding: 10px 16px;
    &.active{
      border: 3px solid #459cf0;
    }

    h4{
      font-size: 16px;
    }

    .placeholder{
      width: 100%;
      height: 60px;
    }
  }

  // 添加分组
  .add_group{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 130px;
    border-radius: 16px;
    border: 1px dashed #d6d6d6;
    cursor: pointer;

    i{
      font-size: 30px;
      margin-bottom: 15px;
    }
  }

  // 矿机算力分布
  .workers_hashrate_distribution{

    .workers_hashrate_distribution_title{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .placeholder{
      width: 100%;
      height: 145px;
    }
  }

  // 矿机列表
  .miner_list{

    .miner_list_title{
      display: flex;
      justify-content: space-between;

      .miner_list_title_btns{
        .ant-btn{
          margin-right: 15px;
          font-size: 12px;
          border-radius: 6px;
          .btns_icon{
            font-size: 16px;
          }
        }
      }
    }

    .miner_list_search{
      .miner_search{
        display: flex;

        .ant-input{
          width: 230px;
          height: 40px;
        }

        .ant-btn{
          margin-left: 20px;
          &:nth-of-type(1){
            width: 50px;
            height: 40px;
            padding: 0 10px;
            span{
              font-size: 25px;
            }
          }

          &:nth-of-type(2){
            width: 70px;
            height: 40px;
          }
        }
      }
    }
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