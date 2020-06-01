<template>
  <div id="app">
    <navigation ref="navigation" />

    <div @click="hideDropdown">
      <div class="content">
        <router-view />
      </div>

      <div class="footer">
        Copyright <i class="fal fa-copyright"></i> 2020 Matthew Ross
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Navigation from './components/Navigation.vue'

@Component({
  components: {
    Navigation
  }
})
export default class App extends Vue {
  $refs!: {
    navigation: Navigation;
  }

  hideDropdown (evt: MouseEvent) {
    if (evt.target instanceof HTMLAnchorElement) {
      return
    }

    this.$refs.navigation.hideDropdown(evt)
  }
}
</script>

<style lang="scss">
@import './settings.scss';
@import '../node_modules/scss-base/src/scss-base.scss';

body {
  background-image: './assets/bg.png';
  font-size: 1.1rem;

  a {
    background-image: none;
    color: $color-primary;
    text-decoration: underline;
    text-shadow: none;

    &:hover {
      text-decoration: none;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Raleway;
    font-weight: 400;
  }

  h2 {
    margin: 0;
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  .content {
    @include shadow-low;

    background-color: $white;
    margin: 5rem auto 1rem auto;
    max-width: 80rem;
    padding: 1rem;

    @media (max-width: $breakpoint-small) {
      margin: 5rem 1rem;
    }

    .center {
      text-align: center;
    }

    .image {
      margin: 1rem;
      max-width: 50rem;

      img {
        @include shadow-mid;

        max-height: 100%;
        max-width: 100%;
      }
    }

    .container {
      display: flex;
      width: 100%;

      @media (max-width: $breakpoint-small) {
        flex-direction: column;
      }

      h3 {
        font-family: Raleway;
        font-size: 1.7rem;
        font-weight: 400;
      }

      li {
        margin: .5rem 0;
      }

      .half {
        margin-right: 1rem;
        width: 50%;

        @media (max-width: $breakpoint-small) {
          width: 100%;
        }

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }

  .footer {
    margin-bottom: 1rem;
    text-align: center;
  }
}
</style>
