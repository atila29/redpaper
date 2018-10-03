<template>
  <div>
    <span>{{$route.params.id}}</span>
    <!-- Scroller -->
    <div>
      <el-row type="flex" justify="space-around">
        <el-col :span="20">
          <div v-for="row in list">
            <el-row type="flex" justify="space-around">
              <el-col :span="3" v-for="item in row" :key="item.data.id">
                <el-card :body-style="{ padding: '0px'}" class="thumbnail-card">
                  <a v-bind:href="item.data.url">
                    <img v-bind:src="item.data.thumbnail" class="image">
                  </a>
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
  name: 'Search',
  data () {
    return {
      list: [],
      after: ''
    }
  },
  methods: {
    onInfinite: async function () {
      // 'https://www.reddit.com/r/wallpapers/top/.json?q=linux&limit=21'
      let type = (typeof this.$route.params.type === 'undefined') ? 'top' : this.$route.params.type
      let url = (typeof this.$route.params.q === 'undefined') ? 'https://www.reddit.com/r/wallpaper/'.concat(type).concat('/.json?sort=top&t=all&limit=21')
      : 'https://www.reddit.com/r/wallpaper/search.json?q='.concat(this.$route.params.q).concat('&limit=21&restrict_sr=1')
      console.log(this.$route.params.type)
      if (this.after === null) {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
        return
      }
      if (this.after !== '') {
        url = url.concat('&after=').concat(this.after)
      }
      const response = await axios.get(url)
      this.after = response.data.data.after
      let index = 0
      let count = 0
      let temp = []
      response.data.data.children.forEach(child => {
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
      this.list = this.list.concat(temp)
      this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
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
