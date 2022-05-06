<template>

  <div class="errored"  v-if="errored" >
      <p class="errored__text">Произошёл сбой на стороне сервера!<br> Данные с API не были получены <br> вернитесь пожалуйста позже </p>
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
    color: #fff;
    font-size: 26px;
    padding: 30px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #000;
    border-radius: 10px;
    width: 300px;
  }


</style>