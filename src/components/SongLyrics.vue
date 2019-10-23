<template>
  <div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{songName}}</h5>
        <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
        <p class="card-text"><pre>{{lyricsContent}}</pre></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongLyrics",
  data() {
    return {
      songName: this.$route.params.songName,
      lyricsContent: ""
    };
  },
  methods: {
    getAllSongs() {}
  },
  created() {
    const vm = this;
    vm.getAllSongs();
    /*eslint no-console: ["error", { allow: ["warn", "error"] }] */
    console.warn("../../public/lyrics/" + vm.songName);
    // https://github.com/webpack/webpack/issues/6680#issuecomment-370800037
    import("../../public/lyrics/" + vm.songName + ".txt").then(x => {
      vm.lyricsContent = x.default;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
