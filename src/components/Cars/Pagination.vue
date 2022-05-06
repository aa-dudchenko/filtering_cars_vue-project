<template>
  <div>
    <template>
      <div class="text-xs-center mt-1">
        <v-pagination color="blue" v-model="$store.state.page" :length="count">
        </v-pagination>
      </div>
    </template>

  </div>
</template>

<script>

export default {
  props: {
    count: Number
  },
  computed: {
  },
}
</script>


