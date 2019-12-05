<template>
  <div class="comment flex">
    <div>{{comment.text}}</div>
    <button class="delete_button" v-on:click="deleteComment(comment.id)">Delete</button>
  </div>
</template>

<script>
import Comment from "../models/Comment";
export default {
  name: "CommentVue",
  props: {
    comment: Comment,
    deleteComment: Function
  }
};
</script>

<style scoped>
.delete_button {
  margin-left: 10px;
  background: #ff6e6c;
  color: #fff;
  border: 0;
}

.comment {
  justify-content: space-between;
  max-width: 300px;
  border-bottom: 2px solid #67568c;
  padding-bottom: 5px;
}

.comment + .comment {
  margin-top: 10px;
}
</style>