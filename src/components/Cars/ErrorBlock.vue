<template>

  <div class="errored"  v-if="errored" >
     <p class="errored__title"> Произошёл сбой на стороне сервера!</p>
     <p class="errored__text"> Данные с API не были получены. Вернитесь пожалуйста позже, либо сообщите разработчику о сбое. </p>
     <p class="errored__link"> 
      <a href="mailto:aa.dudchenko00@gmail.com">aa.dudchenko00@gmail.com</a> 
     </p>
  </div>
    
</template>

<script>
  export default {
    props: {
      errored: {
        type: Boolean,
        default: false,
      }
    },
  }
</script>

<style lang="scss">

  .errored {
    background: red;
    padding: 30px 0 15px 0;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #000;
    border-radius: 10px;
    width: 500px;
    &__title {
      font-size: 30px;
      color: #fff;
    }
    &__text {
      font-size: 20px;
      color: rgb(65, 62, 62);
    }
    &__link {
      color: #fff;
      font-size: 18px;
      font-weight: 600;
    }

  }

  @media (max-width: 690px) {
  .errored {
    width: 300px;
    &__title {
      font-size: 24px;
    }
    &__text {
      font-size: 16px;
    }
  }
}


</style>