<template>
  <div>
    <div v-if="!ready">Connecting...</div>
    <div v-if="ready">
      <form v-on:submit="() => false" class="comment_form flex">
        <label for="comment">Comment</label>
        <input v-model="newCommentText" class="input_form" type="text" id="comment"/>
        <input
          v-bind:disabled="newCommentText === ''"
          v-on:click="addCommentRequest()"
          type="submit"
          value="Add"
        />
      </form>
      <div v-if="errorMessage !== ''" class="error_message">{{errorMessage}}</div>
      <div class="comments">
        <CommentVue
          v-for="comment of comments"
          v-bind:deleteComment="deleteCommentRequest"
          v-bind:comment="comment"
          v-bind:key="comment.id"
        ></CommentVue>
      </div>
    </div>
  </div>
</template>

<script>
  import Websocket from "../models/Websocket";
  import Comment from "../models/Comment";
  import CommentVue from "./Comment";

  export default {
    name: "WebsocketsVue",
    components: {
      CommentVue
    },
    data() {
      return {
        comments: [],
        addId: 5,
        newCommentText: "",
        commentRequests: {},
        ready: false,
        errorMessage: "",
        socket: new Websocket()
      };
    },
    methods: {
      initComments: function () {
        const texts = ["First comment", "Second one", "Hey there"];
        this.addId = texts.length;
        texts.forEach((item, i) => {
          const comment = new Comment(item, i);
          this.comments.push(comment);
        });
      },
      delete: function (action) {
        // eslint-disable-next-line
        console.log(action)
        this.comments = this.comments.filter(item => item.id !== +action.id);
      },
      add: function (action) {
        const comment = new Comment(action.data, action.id);
        this.comments.push(comment);
      },
      handleResponses(event) {
        const action = this.commentRequests[event.data];
        // eslint-disable-next-line
        console.log(event);
        if (action && this[action.method]) {
          this[action.method](action);
          this.commentRequests[event.data] = undefined;
        }
      },
      deleteCommentRequest: function (id) {
        this.commentRequests[id] = {};
        this.commentRequests[id].method = "delete";
        this.commentRequests[id].id = id;
        this.socket.server.send(id);
      },
      addCommentRequest: function () {
        this.addId += 1;
        const id = this.addId;
        this.commentRequests[id] = {};
        this.commentRequests[id].method = "add";
        this.commentRequests[id].data = this.newCommentText;
        this.commentRequests[id].id = id;
        this.newCommentText = "";
        this.socket.server.send(id);
      }
    },
    mounted: function () {
      this.initComments();
      this.socket.server.onopen = () => (this.ready = true);
      this.socket.server.onmessage = this.handleResponses;
      this.socket.server.onerror = error => {
        // eslint-disable-next-line
        console.log("error", error);
        this.errorMessage = error;
        setTimeout(() => {
          this.errorMessage = "";
        }, 2000);
      };
    }
  };
</script>


<style scoped>
  .comment_form {
    width: 580px;
    margin: 20px auto 0;
  }

  .comments {
    margin-top: 20px;
  }

  .input_form {
    margin: 0 20px;
  }

  .error_message {
    color: red;
    margin: 10px 0;
    text-align: center;
    font-size: 2em;
  }
</style>
