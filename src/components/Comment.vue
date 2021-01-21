<template>
  <div class="">
    <h1>Comment</h1>
    <div class="comment__wrap">
      <textarea
        v-model="comment"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Your comment"
      ></textarea>
      <div class="btn__group ">
        <button class="btn__item" @click="addComment">add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    addComment() {
      // eslint-disable-next-line no-unused-vars
      const paramComment = {
        id: Date.now().toString(),
        comment: this.comment,
        flag: false,
      };
      this.$store.dispatch("comm/increment", paramComment);
      this.comment = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.btn__item {
  margin: 1%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
