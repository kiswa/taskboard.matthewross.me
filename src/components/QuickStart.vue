<template>
  <div @click="closeAllImages">
    <h2 class="center">Quick Start Guide</h2>

    <h3>Install</h3>

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
      <a href="https://github.com/kiswa/TaskBoard/issues">post an issue</a> and
      I'll help if I can.
    </p>

    <h3>First Use</h3>

    <div class="row">
      <div class="text">
        <h4>Log In</h4>

        <p>
          When you log into TaskBoard, you are taken to the Boards page. Since
          this is your first login, TaskBoard reminds you to go to Settings and
          create your first board. It also reminds you to change your password
          from the default. This should be the first thing you do.
        </p>

        <p>
          Go to Settings from the navigation button at the top right, or by
          clicking the link in the text.
        </p>

        <p>
          On future logins, you will either see a list of available boards or
          be taken to your default board if set.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/first-login.png"
               alt="TaskBoard after first login."
               title="TaskBoard after first login.">

          <span class="caption">TaskBoard after first log in.</span>
        </a>
      </div>
    </div>

    <div class="row">
      <div class="text">
        <h4>Settings</h4>

        <p>
          After navigating to the Settings page, use the Change Password form to
          update your password. TaskBoard only has one restriction on passwords;
          they may not be empty.
        </p>

        <p>
          From this same User Settings section, you may also change your
          username and add additional users. We'll get to that in a minute.
        </p>

        <p>
          You can't select a default board however, because we haven't created
          one yet.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/initial-settings.png"
               title="Initial settings.">

          <span class="caption">Initial settings page.</span>
        </a>
      </div>
    </div>

    <div class="row">
      <div class="text">
        <h4>Create a Board</h4>

        <p>
          Click the Add Board button to open the modal dialog for creating a
          new board.
        </p>

        <p>
          There are only two requirements to create a new board. It must have a
          Name, and it must have at least one Column. Categories are optional,
          but they can be helpful!
        </p>

        <p>
          The Select Users section isn't useful at this point, but when there
          are multiple users, you may select which have access to the board
          here.<br>
          <strong><small>
            Admin users always have access to all boards whether they are
            selected here or not.
          </small></strong>

          <p>
            Click the Add Board button on the dialog when you have your first
            board the way you want. You are returned to the Settings page
            assuming the two requirements for creating a board were met.
          </p>

          <p>
            Notice the Settings page now has your board listed in the Board
            Settings section. Clicking the link in the Name column takes you
            to the board.
          </p>

          <p>
            Since you are logged in as an admin user, you also have two icons
            in the Actions column. The first (<i class="fas fa-edit"></i>)
            allows you to edit the board (using a modal much like the Add Board
            dialog). The second (<i class="far fa-trash-alt"></i>) allows you to
            remove a board. Be careful when removing a board as it cannot be
            undone!
          </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/first-board.png"
               title="First board.">

          <span class="caption">Creating your first board.</span>
        </a>

        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/first-board-created.png"
               title="First board created.">

          <span class="caption">First board created.</span>
        </a>
      </div>
    </div>

    <div class="row">
      <div class="text">
        <h4>Add a User</h4>

        <p>
          Click the Add User button to open a modal dialog for creating a new
          user.
        </p>

        <p>
          Enter the username you want to use, keeping in mind that duplicate
          usernames are not allowed, then set a password and verify it in the
          next two fields.
        </p>

        <p>
          At this point you may also select a default board for the user. Doing
          this automatically adds the user to that board.<br>
          <strong><small>
            Note: If you do not assign a default board, you will need to edit
            whatever boards you want the user to have access to and add them.
          </small></strong>
        </p>

        <p>
          Next, you can select what boards the user is allowed to access. If a
          default board was selected, it can be skipped here. Keep in mind, the
          security level (selected soon) of the user will determine what they
          can do on a board.
        </p>

        <p>
          The next option is to choose the security level. User is the least
          privileged, with Board Admin having almost the same permissions as an
          admin, but limited to the boards they have access to. The Admin level
          can do anything they want in TaskBoard.
        </p>

        <p>
          Now that we've covered the main features of the Settings page, let's
          take a look at that board.
        </p>

        <p>
          You can either click the direct link in the Board Settings section,
          or use the navigation button in the top right to be taken to your
          default board (or a list of boards if you did not choose a default).
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/add-user.png" alt="Add user." title="Add user.">

          <span class="caption">Adding a new user.</span>
        </a>

        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/user-added.png" alt="User added." title="User added.">

          <span class="caption">User added.</span>
        </a>
      </div>
    </div>

    <h3>Boards &amp; Tasks</h3>

    <div class="row">
      <div class="text">
        <h4>Board Overview</h4>

        <p>
          There are a few things to note on the board page. There is a board
          navigation section which includes a board selector on the left, and
          filters for the current board on the right.
        </p>

        <p>
          The filters allow for finer grain detail on board tasks. For example,
          if a user wants to see only those tasks assigned to them, they can
          select their username from the User Filter dropdown.<br>
          <strong><small>
            Note: If you did not add any categories when you created the board,
            the Category Filter dropdown will not be visible.
          </small></strong>
        </p>

          <p>
            Each column in the board is displayed in the main area of the page.
            Columns may be collapsed and expanded and the setting will persist
            for each user across logins. When a column is collapsed the task
            counter becomes a badge showing the number of tasks contained within.
          </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/empty-board.png" alt="An empty board." title="An empty board.">

          <span class="caption">An empty board.</span>
        </a>
      </div>
    </div>

    <div class="row">
      <div class="text">
        <h4>Adding a Task</h4>

        <p>
          There are three ways to add a task to a column. Either click the plus
          button, enter a title in the Quick Add bar and hit <code>Enter</code>,
          or right-click in the column where you want to add a task and select
          Add Task from the context menu. If you use either the plus button or
          context menu, you will get an Add Task modal dialog that has the
          Column dropdown defaulted to the one you acted from.
        </p>

        <p>When adding a task, the only requirement is that it have a Title.</p>

        <p>
          The Description text can be entered as
          <a href="https://github.github.com/gfm/" target="_github">Markdown</a>
          for better readability in the board and task views. This allows for
          lists, formatting, code display, tables, and much more.
        </p>

        <p>
          The Assignees selector lets you choose one or more user to have the
          task assigned to them. The Categories selector will only be visible if
          categories were added to the board, and allows for clearer visibility
          of task types.
        </p>

        <p>
          You can change the column the task will be created in (in case you
          clicked whichever column was nearest) from the Column dropdown.
        </p>

        <p>The Color input displays your browser's colorpicker.</p>

        <p>The Date Due input displays your browser's datepicker.</p>

        <p>
          And finally, the Points input is meant to be used to provide an
          estimate for the level of work required for the task.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/add-task.png" alt="Adding a task." title="Adding a task.">
          <span class="caption">Adding a task.</span>
        </a>

        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/task-added.png" alt="A newly added task."
               title="A newly added task.">
          <span class="caption">A newly added task.</span>
        </a>
      </div>
    </div>

    <div>
      <h3>More Detail</h3>

      <p>
        Now you know enough to get going with TaskBoard. If you'd like more
        information, including working with Tasks, take a look through the
        <router-link :to="{ name: 'intro' }">detailed docs</router-link>.
      </p>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class QuickStart extends Vue {
  toggleZoom (evt: MouseEvent) {
    const anchor = evt.composedPath().find((node: EventTarget) => {
      return (node as Element).className.includes('figure')
    }) as Element
    const wasZoomed = anchor.className.includes('zoomed')

    this.closeAllImages()

    if (wasZoomed) {
      return
    }

    anchor.classList.add('zoomed')
  }

  private closeAllImages () {
    Array.from(document.querySelectorAll('.figure'))
      .forEach(el => el.classList.remove('zoomed'))
  }
}
</script>
