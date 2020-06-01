<template>
  <div class="home">
    <h2>
      <img src="../assets/taskboard.svg" title="TaskBoard Logo" width="64">
      TaskBoard
    </h2>

    <div class="tagline">
      A simple, visual way to keep track of what needs to get done.
    </div>

    <div class="image">
      <img src="../assets/boards.png">
    </div>

    <div class="container">
      <div class="half">
        <h3>About</h3>
        <p>
          A <a href="http://en.wikipedia.org/wiki/Kanban_board" target="wikipedia">Kanban</a>-inspired
          app for keeping track of things that need to get done.
        </p>

        <p>
          The goal of TaskBoard is to provide a simple and clean interface to
          a functional and minimal application for keeping track of tasks.
          It's not trying to be the next Trello or LeanKit.
        </p>

        <p>
          What TaskBoard does is make it easy to start keeping track of
          anything you need to get done. The visual aspect of a board allows
          for easy status checks, and can be motivating for users who want to
          move their tasks to the next column.
        </p>

        <h4>Like TaskBoard?</h4>

        <p>Anything you can share helps with the continued development of TaskBoard.</p>

        <paypal />
      </div>

      <div class="half">
        <h3>Features</h3>
          <ul>
            <li>
              Free, Open-Source
              (<a href="http://opensource.org/licenses/mit-license.html"
                  target="license">MIT License</a>), and Self-Hosted
            </li>

            <li>Easy install - just copy to web host and go!</li>
            <li>Unlimited boards (projects)</li>
            <li>Multiple languages</li>

            <li>
              Customize columns within boards and persistent expand/collapse per
              user
            </li>

            <li>
              Tasks allow custom colors, categories, assignees, Markdown
              descriptions, attachments, and comments
            </li>

            <li>Tasks display complete history of activities for admins</li>
            <!-- <li>Full history of all board activity for admins</li> -->
            <li>Easy customization</li>
            <li>
              Basic User management (admin, board admin, and regular users)
            </li>

            <li>No external dependencies</li>
            <li>Creates SQLite database on first use</li>
            <li>RESTful API</li>
            <li>Works on almost any web host (only needs PHP w/SQLite pdo)</li>
          </ul>
      </div>
    </div>

    <div class="full">
      <h3>Thanks</h3>

      Without the following open source projects, TaskBoard would have been
      much more difficult to create.
    </div>

    <div class="container">
      <div class="half">
        <h4>Front End</h4>

        <ul class="group-box">
          <li><a href="https://angular.io/" target="external">Angular</a></li>
          <li><a href="https://bourbon.io/" target="external">Bourbon</a></li>
          <li><a href="https://neat.bourbon.io/" target="external">Neat</a></li>

          <li>
            <a href="https://www.npmjs.com/package/scss-base"
               target="external">scss-base</a>
          </li>

          <li>
            <a href="https://github.com/chjj/marked"
               target="external">marked</a>
          </li>

          <li>
            <a href="https://gionkunz.github.io/chartist-js/"
               target="external">Chartist.js</a>
          </li>
        </ul>
      </div>

      <div class="half">
        <h4>Back End (RESTful API)</h4>

        <ul class="group-box">
          <li>
            <a href="https://www.slimframework.com/" target="external">Slim</a>
          </li>

          <li>
            <a href="https://redbeanphp.com/index.php"
               target="external">RedBeanPHP</a>
          </li>

          <li>
            <a href="https://github.com/PHPMailer/PHPMailer"
               target="external">PHPMailer</a>
          </li>

          <li><a href="https://jwt.io/" target="external">JWT</a></li>
          <li>
            <a href="https://www.sqlite.org/index.html"
               target="external">SQLite</a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Paypal from '../components/PayPal.vue'

@Component({
  components: {
    Paypal
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../settings.scss';
@import 'node_modules/scss-base/src/_mixins.scss';

.home {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h2 {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    width: 18.5rem;
  }

  .tagline {
    color: lighten($color-text, 10%);
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  .full {
    width: 100%;
  }

  .group-box {
    @include shadow-low;

    list-style: none;
    margin: 0;
    max-width: 50%;
    padding: 0;

    li {
      border-top: 1px solid $color-heading-bg;
      padding: 7px 7px 7px 14px;
      margin: 0;

      &:first-of-type {
        border-top: none;
      }

      &:hover {
        background-color: lighten($color-text, 70%);
      }
    }

    a {
      color: $color-text;
      display: inline-block;
      text-decoration: none;
      width: 100%;
    }
  }
}
</style>
