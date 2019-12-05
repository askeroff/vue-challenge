<template>
  <div>Websockets</div>
</template>

<script>
  import Websocket from "../models/Websocket";

  export default {
    name: "WebsocketsVue",
    mounted() {
      const socket = new Websocket();
      socket.socket.onopen = () => socket.socket.send(1);
    }
  };
</script>
