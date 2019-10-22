<template>
  <div>
    <input type="text" v-model="searchWord" placeholder="輸入歌名找歌詞" />
    <ul class="list-group mt-4">
      <li class="list-group-item" v-for="song in filterSongs" :key="song.name">
        <router-link :to="{ name: 'SongLyrics', params: {songName: song.name} }">{{song.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: "",
      allSongs: [
        {
          name: "test1",
          content: "ahahhah"
        },
        {
          name: "test2",
          content: "EEEE"
        }
      ]
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
    // var tmp = require.context("../../public/lyrics", false, /^.*\.txt$/);
    var tmp = require.context("../../public/lyrics", false, /^.*$/);
    console.warn("test=>XXX", tmp);
    tmp.keys().forEach(name => {
      /*eslint no-console: ["error", { allow: ["warn", "error"] }] */
      console.warn("test=>", name);
      // var test = require("raw-loader!./static/" + name);
      // console.log("content=>", test);
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
