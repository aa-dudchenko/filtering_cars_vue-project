<template>
    <div class="details__wrap">

      <div class="details">
        <p class="details__title">  Информация о товаре: </p>
        <!-- <v-btn class="details__btn" absolute @click="closeDetails" fab dark small color="pink">  <v-icon dark>close</v-icon> </v-btn>            -->
        <button class="details__btn" @click="closeDetails"> <span> &times; </span> </button>
        <div class="details__content">
          <div  class="details__content-top">
            <p> Автомобиль <slot name="name"></slot> был произведён в <slot name="year"></slot> году. </p>
            <p> Его стоимость составляет: <slot name="price"></slot> тысяч рублей.</p>
            <p> Цвет машины: <slot name="color"></slot></p>
            <p> Место нахождения: <slot name="city"></slot> </p>            
          </div>
          <div class="details__content-image"> <slot name="image"></slot> </div>
          <p class="details__content-bottom">
            Характеристики: <slot name="description"></slot>
          </p>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  props: {
   
  },

  methods: {
    closeDetails () {
      this.$emit('closeDetails')
    }
  }
}
</script>


<style lang="scss">

.details {
  background-color: #fff;
  box-shadow:
    -14px -14px 2px -5px #2196F3,
    -14px 14px 2px -5px #f5631a,
    14px -14px 2px -5px #ffc400,
    14px 14px 2px -5px #fff;

  padding: 20px 15px 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px; 

  &__wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 5;
  }

  &__title {
    margin-bottom: 25px;
    font-size: 22px;
    font-weight: 500;
    color: cadetblue;
  }

  &__btn {
      position: absolute;
      top: 4px;
      right:10px;
      font-size: 35px;
      transition: 0s;
      &:hover {
        color: #cc270a;
      }
    }

  &__content {
    font-style: italic;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-info {
      font-weight: 600;
      color:cadetblue;
    }

    &-top {
      font-size: 18px;
      & p:not(:last-child) {margin-bottom: 10px;}
    }

    &-image {
     border-radius: 5px;
     width: 100%;
     margin-bottom: 5px;
    }

    &-bottom {
      font-size: 16px;
    }
  }
}

@media (max-width: 1020px) {
  .details {
    width: 400px;
    height: auto;

    &__title {
      font-size: 18px;
      margin-bottom: 10px;
    }

    &__btn {
      font-size: 30px;
    }

    &__content {
      &-top {
        font-size: 16px;
        & p:not(:last-child) {margin-bottom: 5px;}
      }
      &-bottom {
        font-size: 15px;
      }

      
    }
  }
}

@media (max-width: 690px) {
  .details {
    width: 320px;
  }
}

@media (max-width: 420px) {
  .details {
    width: 300px;
  }
}
</style>