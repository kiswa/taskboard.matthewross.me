<template>
  <div class="demo">
    <h2 class="center">Live Demonstration</h2>

    <h3>Changes Made for Demo</h3>

    <p>
      The online demo for TaskBoard is almost exactly what you'll get when you
      download it yourself. A few minor changes have been made to make it a
      good demo site.
    </p>

    <p>
      First, changing a user's password or username will show a success message
      (if you do it right), but won't actually change it. Second, the database
      is pre-populated with example data, and is reset every hour. Third and
      finally, logins are not limited to one per user (so everyone can login as
      admin at the same time).
    </p>

    <p>
      Other than that, it's what you'll get when you
      <router-link :to="{ name: 'download' }">download TaskBoard</router-link>.
    </p>

    <h3>Let's Go!</h3>

    <p>
      To log into the demo, it's the same as a first-time login. Your username
      is <code>admin</code> and the password is <code>admin</code>.
    </p>

    <p>If you'd like, there is also a board admin with the username
      <code>ba</code> and the password <code>ba</code> as well as a standard
      user with the username <code>demo</code> and the password
      <code>demo</code>.
    </p>

    <p>Enjoy <a href="demo-live/">the demo</a>!</p>
  </div>
</template>
