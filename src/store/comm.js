const comments = {
  namespaced: true,
  state: {
    comments: [
    ],
    answer:[]
  },
   getters: {
    allComments: state => {
      return state.comments
     }
  },
    
  mutations: {
    ADD_COMMENT(state, payload) {
      state.comments.push(payload)
    },
    ANSWER_COMMENT(state, payload) {
      let answer = payload.answer
      const answ = state.comments.findIndex(element => {
        return element.id === payload.id
      })
      let _new = Object.assign({answer}, state.comments[answ])
      state.comments[answ]=_new
      console.log(state.comments[answ])
    },

    REMOVE_COMMENT(state, payload) {
      const index = state.comments.findIndex(n => n.id == payload)
      state.comments.splice(index, 1)
    },
    CHANGE_COMMIT(state, payload) {
      state.comments.forEach(element => {
        return element.id == payload
      });
    },
    CORRECT_TEXT(state, payload) {
      let _id = payload.id
      let _comment = payload.correctComment
      console.log(_id, _comment)
      const index = state.comments.findIndex(n => n.id == _id)
      state.comments[index].comment = _comment
    }
  },
  
    actions: {
      increment(context, paramComment) {
        context.commit('ADD_COMMENT', paramComment);
      },

      answerComment(context, answer) {
        context.commit("ANSWER_COMMENT", answer)
      },

      removeComment(context, paramId) {
        context.commit('REMOVE_COMMENT', paramId)
      },

      changeComment(context, paramId) {
        context.commit('CHANGE_COMMIT', paramId)
      },

      correctText(context, correctComment) {
        context.commit('CORRECT_TEXT', correctComment)
      }
    }
  
  }

export default comments;
