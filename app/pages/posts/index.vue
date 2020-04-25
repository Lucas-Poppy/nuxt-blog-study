<template>
  <sction class="conteiner posts-page">
    <el-card>
      <div slot="header" class="clearfix">
        <span>新着投稿</span>
      </div>
      <el-table :data="showPosts" style="width: 100%" class="table">
        <el-table-column prop="title" label="タイトル"></el-table-column>
        <el-table-column prop="user.id" label="投稿者"></el-table-column>
        <el-table-column prop="created_at" label="投稿日時"></el-table-column>
      </el-table>
    </el-card>
  </sction>
</template>

<script>
export default {
  computed: {
    showPosts() {
      return [
        {
          id: "001",
          title: "How to development Nuxt.js Application",
          body: "Lorem ipsum dolor sit amet, consectetur adipicing elit...",
          created_at: "2020/04/18 12:00:00",
          user: {
            id: "potato4d"
          }
        },
        {
          id: "002",
          title: "Deployment Nuxt.js Application to Heroku",
          body: "Lorem ipsum dolor sit amet, consectetur adipicing elit...",
          created_at: "2020/04/18 13:00:00",
          user: {
            id: "potato4d"
          }
        }
      ]
    }
  }
}
</script>

<style>
.post-page .el-table__row {
  cursor: pointer;
}
</style>