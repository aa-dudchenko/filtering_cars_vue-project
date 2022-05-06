<template>
  <div class="my-container cars">

    <div class="cars__btn" @click="changeDisplay">
      <v-btn color="#1b97f3">
        <v-icon left color="#fff"> grid_view </v-icon>
        <v-icon right color="#fff"> view_list</v-icon>
      </v-btn>
    </div>

    <div :class="[isActive ? 'cars__itemsWrap' : 'cars__itemsWrap-column']">
      <app-car :isActive="isActive" :car="car" :key="'car' + index" v-for="(car, index) of pagedCars"></app-car>
    </div>
    <app-ErrorBlock :errored="errored"></app-ErrorBlock>
    <app-pagination :count="pages"></app-pagination>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Car from './Car.vue'
import ErrorBlock from './ErrorBlock.vue'
import Pagination from './Pagination.vue'

export default {
  data: () => ({
    isActive: true,
    errored: false,
  }),

  methods: {
    changeDisplay() {
      this.isActive = !this.isActive
    },

    ...mapActions([
      'GET_CARS_FROM_API'
    ])
  },
  computed: {
    pages() {
      const availablePages = Math.ceil(this.FILTERED_CARS.length / this.$store.state.perPage)
      if (availablePages < this.$store.state.page)
        this.$store.state.page = 1
      return availablePages
    },
    pagedCars() {
      return this.FILTERED_CARS.slice((this.$store.state.page - 1) * this.$store.state.perPage, this.$store.state.page * this.$store.state.perPage)
    },
    ...mapGetters(['FILTERED_CARS'])
  },

  mounted() {
    this.GET_CARS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('DATA RECEIVED')
        } else {
          console.log('DATA NOT RECEIVED')
          this.errored = true
        }
      })
  },

  components: {
    'app-car': Car,
    'app-ErrorBlock': ErrorBlock,
    'app-pagination': Pagination,
  },
}
</script>


<style lang="scss">
.cars {
  position: relative;

  &__btn {
    position: absolute;
    right: 20px;
    top: -80px;
    color: #fff;
  }

  &__itemsWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    // Для горизонтальной разметки
    &-column {
      display: block;
      align-items: center;
      justify-content: center;
    }
  }
}

@media (max-width: 690px) {
  .cars__btn {
    display: none;
  }
}
</style>