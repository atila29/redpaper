<template>
  <!-- Navbar -->
  <div class="landing">

    <!--  -->
    <!-- Scroller -->
    <div>
      <el-row type="flex" justify="space-around">
        <el-col :span="20">
          <div v-for="row in list">
            <el-row type="flex" justify="space-around">
              <el-col :span="3" v-for="item in row" :key="o">
                <el-card :body-style="{ padding: '0px'}" class="thumbnail-card">
                  <img v-bind:src="item.data.thumbnail" class="image">
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
import axios from 'axios'
export default {
  name: 'landing',
  data () {
    return {
      list: [],
      after: ''
    }
  },
  methods: {
    onInfinite: function () {
      let url = 'https://www.reddit.com/r/wallpapers/top/.json?q=linux&limit=21'
      if (this.after === null) {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
        return
      }
      if (this.after !== '') {
        url = url.concat('&after=').concat(this.after)
      }

      axios.get(url)
      .then(response => {
        this.after = response.data.data.after
        let index = 0
        let count = 0
        let temp = []
        response.data.data.children.forEach(function (child) {
          if (count === 7) {
            index++
            count = 0
          }
          if (count === 0) {
            temp[index] = []
          }
          temp[index].push(child)
          count++
        })
        console.log(this)
        this.list = this.list.concat(temp)
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  components: {
    InfiniteLoading
  }
}
</script>

<style scoped>

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
