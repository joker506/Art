<template>
  <div class="all__wrap" v-if="allComment.length">
    <div class="all__commets" v-for="commets in allComment" :key="commets.id">
      <p>{{ commets.comment }}</p>
      <p style="text-align:center">{{ commets.answer }}</p>
      <div class="btn__group">
        <button @click="answerComment, (commets.flag = !commets.flag)">
          answer
        </button>
        <button
          class="btn__item"
          @click="changeComment(commets), (commets.flag = !commets.flag)"
        >
          change
        </button>
        <button class="btn__item" @click="removeComment(commets)">
          delete
        </button>
      </div>
      <p v-if="commets.flag == true">
        <textarea v-model="correctComment" cols="30" rows="10" />
        <button @click="correctParam(commets), (commets.flag = !commets.flag)">
          {{ correctComment ? "save" : "send" }}
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Allcomments",
  data() {
    return {
      correctComment: "",
      answerComm: "",
      visible: false,
    };
  },
  methods: {
    answerComment() {
      this.answerComm = true;
    },
    correctParam(e) {
      if (this.answerComm !== true) {
        const answer = {
          answer: this.correctComment,
          id: e.id,
        };
        this.$store.dispatch("comm/answerComment", answer);
        this.correctComment = "";
      } else {
        const qwer = {
          correctComment: this.correctComment,
          id: e.id,
        };
        this.$store.dispatch("comm/correctText", qwer);
      }
    },
    changeComment(e) {
      this.$store.dispatch("comm/changeComment", e.id);
    },
    removeComment(e) {
      this.$store.dispatch("comm/removeComment", e.id);
    },
  },

  computed: {
    ...mapGetters({
      allComment: "comm/allComments",
    }),
  },
};
</script>

<style scoped>
.all__commets {
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: left;
}
.btn__item {
  width: 100px;
}
</style>
