<template>
  <div>
    <div class="card  mb-5 mx-auto" style="width: 18rem;">
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
pre {
  width:240px;
    white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>
