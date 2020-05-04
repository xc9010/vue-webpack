<template>
  <div>
    <el-col :span="3">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="21">
        <div class="main">
            <div class="item banner">banner</div>
            <div class="item title">title-1</div>
            <div class="item content-left">content-left</div>
            <div class="item content-right">content-right</div>
            <div class="item content1-left">content1-left</div>
            <div class="item content1-right">content1-right</div>
            <div class="item footer">footer-message</div>
        </div>
    </el-col>
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less">
.main {
    display: grid;
    height: 1080px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 120px 1fr 1fr 50px;
    grid-template-areas: 
        "banner banner banner"
        "title title title"
        "content-left content-left content-right"
        "content1-left content1-left content1-right"
        "footer footer footer";
    .item {
        border: 1px solid #dfdfdf;
        height: 100%;
        width: 100%;
    }
    .title{
        grid-area: title;
    }
    .content-left{
        grid-area: content-left;
    }
    .content1-left{
        grid-area: content1-left;
    }
    .content-right{
        grid-area: content-right;
    }
    .content1-right{
        grid-area: content1-right;
    }
    .footer{
        grid-area: footer;
    }
    .banner{
        grid-area: banner;
    }
}
</style>