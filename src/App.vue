<template>
  <div id="app">
    <div id="nav" class="horiz px-10 items-center items-space-between h-30 md-elevation-4">
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/login">Login</router-link>  |
      <router-link to="/register">Register</router-link>  |
      <router-link to="/articles">Artices</router-link>  |
      <router-link to="/blogs">Blogs</router-link>  |
      <router-link to="/media">Media</router-link>  |
      <router-link to="/compose">Compose</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('../node_modules/linelay/linelay.min.css');

</style>
