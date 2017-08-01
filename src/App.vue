<template>
  <div id="app">
    <el-row>
      <el-menu theme="dark" default-active="1" mode="horizontal" router>
        <el-menu-item index="/" class="home-menu-item">redpaper</el-menu-item>
      </el-menu>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #C0CCDA;
}
.home-menu-item{
  font-weight: bold;
  font-size: 175%;
}
</style>
