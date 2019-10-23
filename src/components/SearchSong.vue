<template>
  <div>
    <input
      class="form-control mx-auto"
      style="width: 200px;"
      type="search"
      v-model="searchWord"
      autocomplete="off"
      placeholder="輸入歌名找歌詞"
    />
    <!--
      NOTE: autocomplete set to off, the mobile IME will not wait user to input a complete word
      aria-autocomplete="both"
      aria-haspopup="false"
      autocapitalize="off"
      autocorrect="off"
      role="combobox"
      spellcheck="false"
    -->
    <ul class="list-group mt-4">
      <!--  -->
      <li class="list-group-item" v-for="song in filterSongs" :key="song.name">
        <router-link :to="{ name: 'SongLyrics', params: { songName: song.name } }">{{ song.name }}</router-link>
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
        // {
        //   name: "songName",
        //   songInfo: "unique Info"
        // }
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
    const vm = this;
    vm.getAllSongs();
    var lyricsFiles = require.context(
      "../../public/lyrics/",
      false,
      /^.*.txt$/
    );

    lyricsFiles.keys().forEach(name => {
      /*eslint no-console: ["error", { allow: ["warn", "error"] }] */

      const songName = name.slice(2, -4);
      vm.allSongs.push({ name: songName });

      // https://github.com/webpack/webpack/issues/6680#issuecomment-370800037
      const fileName = name.substring(2);
      import("../../public/lyrics/" + fileName).then(x => {
        console.warn(x.default);
      });
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
