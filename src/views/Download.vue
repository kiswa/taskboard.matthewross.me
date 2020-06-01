<template>
  <div class="download">
    <h2>Download TaskBoard</h2>

    <div class="container">
      <div class="half">
        <h3>Contribute</h3>

        <p>
          Contributions are welcome from everyone. If you're a developer,
          submit
          <a href="https://github.com/kiswa/TaskBoard/pulls" target="github">
            a pull request
          </a>
          for review. If you don't want to do that, then please create an issue
          on
          <a href="https://github.com/kiswa/TaskBoard/issues" target="github">
            the Issue Tracker
          </a>
          so I know what the community wants from TaskBoard.
        </p>

        <p>If you want a <em>really easy</em> way to contribute...</p>
        <paypal />
      </div>

      <div class="half">
        <h3>View Source</h3>

        <p>
          Of course, TaskBoard is an open source project so you can
          <a href="https://github.com/kiswa/TaskBoard">browse the source</a>
          and even create your own fork.
        </p>
      </div>
    </div>

    <div class="tagline">
      Download the latest version of
      <a href="https://github.com/kiswa/TaskBoard/releases"
         target="github">TaskBoard here</a>.
    </div>

    <div class="image">
      <img src="../assets/boards-idea.png"
           title="Contribute to TaskBoard">
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
export default class Download extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../settings.scss';

.download {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;

  .tagline {
    color: lighten($color-text, 10%);
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  .image {
    margin-bottom: 0;
  }
}
</style>
