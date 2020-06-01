<template>
  <nav role="navigation">
    <h1>TaskBoard</h1>

    <ul class="nav-list">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>

      <li class="dropdown-parent">
        <a href="#" @click="toggleDropdown" :class="{ 'router-link-exact-active': isDocs }">
          Documentation <i class="fad fa-caret-down"></i>
        </a>

        <ul class="dropdown" v-show="showDropdown" @click="hideDropdown">
          <li>
            <router-link :to="{ name: 'quick-start' }">
              <strong>Quick Start</strong>
            </router-link>
          </li>

          <li class="separator"></li>

          <li>
            <router-link :to="{ name: 'intro' }">Introduction</router-link>
          </li>

          <li>
            <router-link :to="{ name: 'settings' }">Settings</router-link>
          </li>

          <li><router-link :to="{ name: 'boards' }">Boards</router-link></li>

          <li><router-link :to="{ name: 'tasks' }">Tasks</router-link></li>
        </ul>
      </li>

      <li><router-link :to="{ name: 'download' }">Download</router-link></li>

      <li><router-link :to="{ name: 'demo' }">Demo</router-link></li>
    </ul>

    <div class="right">
      <a href="https://github.com/kiswa/TaskBoard" target="github">
        <i class="fab fa-github" title="TaskBoard on GitHub"></i>
      </a>
    </div>

    <div class="mobile-nav" @click="toggleMobileNav">
      <i class="far fa-bars"></i>

      <ul id="mobile-nav-list" class="nav-list">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>

        <li class="dropdown-parent">
          <a href="#" @click.stop="toggleDropdown" :class="{ 'router-link-exact-active': isDocs }">
            Documentation <i class="fad fa-caret-down"></i>
          </a>

          <ul class="dropdown" v-show="showDropdown" @click="hideDropdown">
            <li>
              <router-link :to="{ name: 'quick-start' }">
                <strong>Quick Start</strong>
              </router-link>
            </li>

            <li class="separator"></li>

            <li>
              <router-link :to="{ name: 'intro' }">Introduction</router-link>
            </li>

            <li>
              <router-link :to="{ name: 'settings' }">Settings</router-link>
            </li>

            <li><router-link :to="{ name: 'boards' }">Boards</router-link></li>

            <li><router-link :to="{ name: 'tasks' }">Tasks</router-link></li>
          </ul>
        </li>

        <li><router-link :to="{ name: 'download' }">Download</router-link></li>

        <li><router-link :to="{ name: 'demo' }">Demo</router-link></li>
      </ul>
    </div>

  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Navigation extends Vue {
  showDropdown = false

  get isDocs () {
    return this.$route.path.substring(0, 5) === '/docs'
  }

  hideDropdown (evt: MouseEvent) {
    evt.preventDefault()

    this.showDropdown = false
  }

  toggleDropdown (evt: MouseEvent) {
    evt.preventDefault()

    this.showDropdown = !this.showDropdown
  }

  toggleMobileNav () {
    const list = document.getElementById('mobile-nav-list')

    if (!list) {
      return
    }

    list.classList.toggle('showNav')
  }
}
</script>

<style lang="scss" scoped>
@import '../settings.scss';
@import 'node_modules/scss-base/src/_mixins.scss';

nav {
  @include shadow-low;

  background-color: #fff;
  color: lighten($color-text, 15%);
  display: flex;
  font-family: Raleway;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;

  h1 {
    font-size: 1.3rem;
    font-weight: 400;
    margin: 0;
    padding: 1rem;
  }

  .right {
    align-self: center;
    font-size: 2rem;
    margin-left: auto;
    margin-right: 1rem;

    @media(max-width: $breakpoint-mobile) {
      display: none;
    }
  }

  .nav-list {
    display: flex;
    font-size: 1.2rem;
    list-style: none;
    margin: 0;
    padding: 0;

    @media(max-width: $breakpoint-mobile) {
      display: none;
    }

    li {
      display: flex;

      a {
        color: #428bca;
        padding: 1rem;
        text-decoration: none;

        &:hover {
          background-color: lighten($color-text, 75%);
        }

        &.router-link-exact-active {
          background-color: lighten($color-text, 65%);
        }
      }
    }

    .dropdown-parent {
      position: relative;

      .dropdown {
        @include shadow-mid;

        background-color: #fff;
        flex-direction: column;
        font-size: 1rem;
        left: 0;
        position: absolute;
        right: 0;
        top: 58px;

        a {
          padding: .5rem;
          width: 100%;
        }

        .separator {
          border-bottom: 1px solid $color-heading-bg;
        }
      }
    }
  }

  .mobile-nav {
    align-self: center;
    display: none;
    font-size: 2rem;
    margin-left: auto;
    margin-right: 1rem;
    position: relative;

    @media(max-width: $breakpoint-mobile) {
      display: block;
    }

    .showNav {
      background-color: #fff;
      display: block;
      position: absolute;
      right: 0;
      width: 200px;

      a {
        padding: .75rem;
        width: 100%;
      }
    }
  }
}
</style>
