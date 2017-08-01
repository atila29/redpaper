<template>
  <div class="landing">
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-row type="flex" justify="space-around">
          <el-col :span="24">
            <el-button-group>
              <el-button type="primary" @click="hot">hot</el-button>
              <el-button type="primary" @click="top">top</el-button>
              <el-button type="primary" @click="newp">new</el-button>
            </el-button-group>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="24">
            <el-input placeholder="Please input" v-model="input">
              <el-button slot="append" icon="search" @click="submit" @keyup.enter="submit"></el-button>
            </el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'landing',
  data () {
    return {
      input: ''
    }
  },
  mounted () {
  },
  methods: {
    submit: function () {

    },
    hot: function () {
      console.log(this.$router)
      this.$router.push('search/hot')
    },
    top: function () {
      console.log(this.$router)
      this.$router.push('search/top')
    },
    newp: function () {
      console.log(this.$router)
      this.$router.push('search/new')
    }
  }
}
</script>

<style scoped>

.landing{
  margin-top: 20px;
}
</style>
