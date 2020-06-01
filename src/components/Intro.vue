<template>
  <div class="intro">
    <h2>Introduction</h2>

    <h3>Thank You</h3>

    <p>
      Before we delve into TaskBoard, I want to say thank you for usine it. I
      hope you find it useful.
    </p>

    <p>
      If you find any issues, or come up with ideas for improving TaskBoard,
      please let me know by
      <a href="https://github.com/kiswa/TaskBoard/issues">posting an issue</a>
      or contributing
      <a href="https://github.com/kiswa/TaskBoard/pulls">a pull request</a>.
    </p>

    <h4>Special Thanks</h4>

    <p>
      To my wife; for encouraging, assisting, and being fine with all the time I
      spent working on TaskBoard at home.
    </p>

    <h3>Install</h3>

    <div>
      <p>Once you've downloaded TaskBoard, getting it running is very simple.</p>

      <ol>
        <li>
          Extract the archive to the location you want to use TaskBoard.
        </li>

        <li>
          Verify the <code>api/</code> directory is writable.
        </li>

        <li>
          Open your browser to the location you put TaskBoard and log into the
          site with the username <code>admin</code> and password
          <code>admin</code>.
        </li>
      </ol>

      <p>
        That's all there is to it! If you have any troubles,
        <a href="https://github.com/kiswa/TaskBoard/issues">post an issue</a>
        and I'll help if I can.
      </p>
    </div>

    <h3>Ideas for Use</h3>

    <p>
      TaskBoard can be used for <em>anything</em> that needs to be tracked.
    </p>

    <div class="row-fourths">
      <div>
        <h4>Development</h4>

        <ul>
          <li>Proposed</li>
          <li>Backlog</li>
          <li>Development</li>
          <li>Test</li>
          <li>Done</li>
          <li>Archived</li>
        </ul>
      </div>

      <div>
        <h4>Bug Tracker</h4>

        <ul>
          <li>Reported</li>
          <li>Verified</li>
          <li>In Work</li>
          <li>Test</li>
          <li>Fixed</li>
          <li>Archived</li>
        </ul>
      </div>

      <div>
        <h4>Sales Leads</h4>

        <ul>
          <li>Initial Engagement</li>
          <li>Potential Sale</li>
          <li>Qualification</li>
          <li>Probable Sale</li>
          <li>Pending Sale</li>
          <li>Completed Sale</li>
        </ul>
      </div>

      <div>
        <h4>Shipping</h4>

        <ul>
          <li>Orders</li>
          <li>Packaging</li>
          <li>Ready</li>
          <li>Shipped</li>
          <li>Delivered</li>
          <li>Returns</li>
        </ul>
      </div>

      <div>
        <h4>Household Tasks</h4>

        <ul>
          <li>Ideas</li>
          <li>To Do</li>
          <li>In Work</li>
          <li>Done</li>
        </ul>
      </div>

      <div>
        <h4>Employee Search</h4>

        <ul>
          <li>Listings</li>
          <li>Candidates</li>
          <li>First Stage Interviews</li>
          <li>On-Site Interviews</li>
          <li>Consideration</li>
          <li>Hires</li>
        </ul>
      </div>

      <div>
        <h4>Manufacturing</h4>

        <ul>
          <li>Orders</li>
          <li>Assembly</li>
          <li>Test</li>
          <li>Packaging</li>
          <li>Ready</li>
          <li>Shipped</li>
        </ul>
      </div>

      <div>
        <h4>Project Planning</h4>

        <ul>
          <li>Discovery</li>
          <li>Planning</li>
          <li>Training</li>
          <li>Implementation</li>
          <li>Post Launch</li>
        </ul>
      </div>
    </div>

    <h3>Documentation Issues</h3>

    <div>
      <p>
        If there's anything about this documentation that could be improved, please
        <a href="https://github.com/kiswa/TaskBoard/issues">post an issue</a>
        and I'll see what I can do.
      </p>
    </div>

    <h3>Next Steps</h3>

    <div>
      <p>
        By now, you probably have TaskBoard installed and some ideas for boards
        you want to create. Let's move on to the
        <router-link :to="{ name: 'settings' }">Settings</router-link>
        and get familiar with managing TaskBoard.
      </p>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Intro extends Vue {

}
</script>

<style lang="scss" scoped>
@import '../settings.scss';

.intro {
  .row-fourths {
    display: flex;
    flex-wrap: wrap;

    div {
      width: 25%;

      @media(max-width: $breakpoint-small) {
        width: 33%;
      }

      @media(max-width: $breakpoint-mobile) {
        width: 100%;
      }
    }
  }
}

</style>
