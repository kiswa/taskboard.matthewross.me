<template>
  <div class="center">
    <form id="paypal_support"
          action="https://www.paypal.com/cgi-bin/webscr" method="post"
          target="_top">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="6EWZZ9FGJ3J6Y">
      <input type="hidden" name="on0" value="Support Me With">
      <input type="hidden" name="currency_code" value="USD">

      <p>Support via PayPal</p>

      <div class="group">
        <select name="os0" id="payment_options">
          <option value="Thanks!">Thanks! $1.00 USD</option>

          <option value="Thanks a lot!" selected>
          Thanks a lot! $5.00 USD
          </option>

          <option value="Thanks a bunch!">
          Thanks a bunch! $10.00 USD
          </option>

          <option value="Thanks so much!">
          Thanks so much! $20.00 USD
          </option>

          <option value="Wow, thank you!">
          Wow, thank you! $50.00 USD
          </option>

          <option value="Thanks, you're awesome!">
          Thanks, you're awesome! $100.00 USD
          </option>
        </select>

        <button name="submit"
                title="PayPal - The safer, easier way to pay online!">
          PayPal <i class="fab fa-paypal"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Paypal extends Vue {
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
