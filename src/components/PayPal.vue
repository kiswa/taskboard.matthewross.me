<template>
  <div class="center">
    <button @click="paypalMe">
      Support TaskBoard via PayPal <i class="fab fa-paypal"></i>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Paypal extends Vue {
  paypalMe () {
    window.open('https://paypal.me/kiswacom/5USD')
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-top: 0;
}

.group {
  display: flex;

  button {
    margin-left: 1rem;
    width: 20%;
  }
}
</style>
