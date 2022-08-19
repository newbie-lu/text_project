<template>
  <div class="mobile_drawer" v-show="visible">
    <slot />
    <div class="close" @click="onClose">
      <span class="iconfont icon-guanbi close_icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    visible : {
      type : Boolean,
      default : false
    }
  },

  methods : {
    onClose(){
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile_drawer{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;

  background-color: #ccc;

  .close{
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
  }
}
</style>