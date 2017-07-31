<template>
  <!-- Navbar -->
  <div class="landing">
    <el-row>
      <el-menu theme="dark" default-active="1" mode="horizontal" router=true>
        <el-menu-item index="test" class="home-menu-item">redpaper</el-menu-item>
      </el-menu>
    </el-row>
    <!--  -->
    <!-- Scroller -->
    <div>
      <el-row type="flex" justify="space-around">
        <el-col :span="20">
          <div v-for="item in list">
            <el-row type="flex" justify="space-around">
              <el-col :span="2" v-for="(o, index) in 10" :key="o">
                <el-card :body-style="{ padding: '0px'}" class="thumbnail-card">
                  <img src="http://via.placeholder.com/200x200" class="image">
                </el-card>
              </el-col>
            </el-row>
          </div>
          <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: 'landing',
  data () {
    return {
      list: []
    }
  },
  methods: {
    onInfinite () {
      setTimeout(() => {
        const temp = []
        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
          temp.push(i)
        }
        this.list = this.list.concat(temp)
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    }
  },
  components: {
    InfiniteLoading
  }
}
</script>

<style scoped>
  .home-menu-item{
    font-weight: bold;
    font-size: 175%;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
  .thumbnail-card {
    margin-top: 5px;
  }
</style>
