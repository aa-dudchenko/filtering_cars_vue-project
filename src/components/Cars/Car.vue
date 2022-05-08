<template>

    <div class="item" :class="[isActive ? '' : 'itemColumn']">
      <!-- Компонент детализации товара -->
      <app-details v-if="isInfoDetails" @closeDetails = "closeDetails">
        <span slot="name" class="details__content-info">{{ car.name }}</span>
        <span slot="year" class="details__content-info">{{ car.year }}</span>
        <span slot="price" class="details__content-info">{{ car.price }}</span>
        <span slot="color" class="details__content-info">{{ car.color[0] }}</span>
        <span slot="city" class="details__content-info">{{ car.city }}</span>
        <img  slot="image" :src="car.image" alt="image" class="details__content-image">
        <span slot="description" class="details__content-info">{{ car.description }}</span>
       </app-details>
      <!-- ----------------- -->
      <img class="item__image" :src="car.image" alt="image">
      <div class="item__text">
        <div class="item__decor">
          <span class="item__decor-block item__decor-block-1"></span>
          <span class="item__decor-block item__decor-block-2"></span>
          <span class="item__decor-block item__decor-block-3"></span>
        </div>
        <p class="item__title">{{ car.name }}</p>
        <p class="item__color">
          Цвет: <span class="item__color-value" :style="{ color: car.color[1] }"> {{ car.color[0] }} </span>
        </p>
        <p class="item__price">
          Стоимость: <span class="item__price-value"> {{ car.price }} ₽ </span>
        </p>
        <p class="item__year">
          Год выпуска: <span class="item__price-value"> {{ car.year }} </span>
        </p>
      </div>
        <div class="item__btn">
          <v-btn @click="showDetails" color="#1b97f3"> <span class="item__btn-text"> Подробнее </span> </v-btn>
      </div>
    </div>

</template>

<script>
import Details from './Details.vue'

export default {
  props: {
    isActive: {
      type: Boolean,
      default: true,
    },
    car: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      isInfoDetails: false
    }
  },

  components: {
    'app-details': Details
  },

  methods: {
    showDetails () {
      this.isInfoDetails = true
        document.querySelector("body").style.maxHeight = "100vh";
        document.querySelector("body").style.overflow = "hidden";      
    },
    closeDetails () {
      this.isInfoDetails = false
      document.querySelector("body").style.maxHeight = "100%";
      document.querySelector("body").style.overflow = "auto";
    }
  }
}
</script>


<style lang="scss">

.item {
  position: relative;
  margin: 0 12px 30px;
  padding-bottom: 10px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  padding-bottom: 58px;

  &:hover {
    box-shadow: 0 0 0 2px white, 0 0 0 4px #2196F3;
  }

  &__image {
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
  }

  &__text {
    margin: 0 10px;
  }

  &__decor {
    display: flex;
    align-items: end;
    margin-bottom: 15px;

    &-block {
      width: 35px;
      height: 5px;

      &-1 {
        background-color: #232429;
        height: 10px;
      }

      &-2 {
        background-color: #F5631a;
      }

      &-3 {
        background-color: #FFC400;
      }
    }
  }

  &__title {
    font-weight: 500;
    font-size: 22px;
  }

  &__color,
  &__price,
  &__year {
    font-size: 17px;
    color: #767679;

    &-value {
      font-weight: 600;
      color: #49494a;
    }
  }

  &__btn {
    position: absolute;
    bottom: 10px;
    right: 8px;

    &-text {
      color: #fff;
    }
  }
}

// Для горизонтальной разметки
.itemColumn {
  display: flex;
  width: 620px;
  margin: 0 auto 30px;
  padding-bottom: 12px;

  & .item__image {
    height: auto;
    margin-right: 20px;
    margin-top: 20px;
  }

  & .item__text {
    margin-top: 22px;
  }

}

@media (max-width: 690px) {
  .itemColumn {
    display: block;
    width: 300px;

    & .item__image {
      height: 200px;
      margin-right: 0;
      margin-top: 0;
    }

    & .item__text {
      margin-top: 0;
    }
  }

}
</style>