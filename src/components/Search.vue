<template>
  <div class="search">
    <v-container>
      <v-layout row wrap justify-center>

        <v-flex xs12 sm6 md4>
          <v-text-field color="blue" label="Поиск..." type="search" v-model="searchQuery" solo></v-text-field>
          <p class="search__text">(Вы можете выполнить поиск наименованию, цвету или году выпуска автомобиля)</p>
        </v-flex>

      </v-layout>
    </v-container>
    <hr class="search__line">
  </div>
</template>

<script>

export default ({
  name: 'app',

  computed: {
    searchQuery: {
      get() {
        return this.$store.state.searchQuery
      },
      set(value) {
        this.$store.commit('SET_SEARCH_QUERY', value)
      }
    },
  },

})
</script>

<style lang="scss">
.search {
  padding-top: 40px;

  &__text {
    color: #767679;
    font-size: 14px;
  }
}
</style>