<template>
  <div id="app">
    <Allcomments />
    <Comment />
  </div>
</template>

<script>
import Comment from "./components/Comment.vue";
import Allcomments from "@/components/Allcomments";

export default {
  name: "App",
  components: {
    Comment,
    Allcomments,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
