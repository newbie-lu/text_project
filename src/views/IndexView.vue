<template>
  <div class="index">

    <a-layout>
      <a-layout-sider breakpoint="lg" @breakpoint="onBreakpoint"></a-layout-sider>
    </a-layout>

    <head-component v-if="!theSmallScreen"></head-component>
    <the-small-screen-head v-else></the-small-screen-head>

    <div class="head_placeholder"></div>

    <div class="content"></div>

    <foot-component></foot-component>
  </div>
</template>

<script>
import HeadComponent from '../components/HeadComponent.vue'
import FootComponent from '../components/FootComponent.vue'
import TheSmallScreenHead from '../components/TheSmallScreenHead.vue'
export default {
  name: 'IndexView',
  components: {
    HeadComponent,
    FootComponent,
    TheSmallScreenHead
  },

  data(){
    return {
      theSmallScreen : false
    }
  },

  methods : {
    // 当页面宽度缩小到992px以下时触发
    onBreakpoint(broken){
      // console.log(broken,"indexview");
      if(broken){
        this.theSmallScreen = true;
      }else{
        this.theSmallScreen = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index{
  .head_placeholder{
    width: 100%;
    height: 67px;
  }

  .content{
    width: 100%;
    height: 600px;
  }
}
</style>
