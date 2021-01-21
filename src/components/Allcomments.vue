<template>
  <div class="all__wrap" v-if="allComment.length">
    <div class="all__commets" v-for="commets in allComment" :key="commets.id">
      {{ commets.comment }}
      <div class="btn__group">
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
        <textarea v-model="correctComment" name="" id="" cols="30" rows="10">
        </textarea>
        <button @click="correctParam(commets), (commets.flag = !commets.flag)">
          save?
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
      visible: false,
    };
  },
  methods: {
    correctParam(e) {
      const qwer = {
        correctComment: this.correctComment,
        id: e.id,
      };
      this.$store.dispatch("comm/correctText", qwer);
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
}
.btn__item {
  width: 100px;
}
</style>
