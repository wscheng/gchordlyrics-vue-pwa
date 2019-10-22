<template>
  <div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{songName}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongLyrics",
  data() {
    return {
      songName: this.$route.params.songName
    };
  },
  computed: {
    filterSongs() {
      const vm = this;
      return vm.allSongs.filter(song => song.name.includes(vm.searchWord));
    }
  },
  methods: {
    getAllSongs() {}
  },
  created() {
    this.getAllSongs();
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
