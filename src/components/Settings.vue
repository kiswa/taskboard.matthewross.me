<template>
  <div class="settings" @click="closeAllImages">
    <h2>Settings</h2>

    <h3>Overview</h3>

    <div class="row">
      <div class="text">
        <p>The settings page is where you manage users and boards.</p>

        <p>
          Standard users can use Settings to change their password, select a
          default board, and change their username. They will also see a list of
          users, and a list of their boards.
        </p>

        <p>
          Admin users get that and more. They are able to add, edit, and remove
          users and boards. They also have the ability to add and remove
          Automatic Actions which allows for automated changes to items that
          meet specific criteria.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/standard-user-settings.png"
               alt="Settings for a standard user." title="Settings for a standard user.">

          <span class="caption">Settings for a standard user.</span>
        </a>
      </div>
    </div>

    <h3>My Settings</h3>

    <div class="row">
      <div class="text">
        <h4>Modify Your Account</h4>

        <p>
          The first section of User Settings is made up of four areas that allow
          the current user to modify their settings.
        </p>

        <h5>Change Password</h5>

        <p>
          To change your password, enter your current password into the "Current
          Password" input. Then enter your desired new password into the New and
          Verify inputs.
        </p>

        <p>
          TaskBoard does not have silly password complexity rules. Your password
          is as secure as you decide to make it. The only requirement is that
          you must actually have a password.
        </p>

        <h5>Change Username</h5>

        <p>
          Any user can change their username at any time. The only restriction
          on usernames is that they must be unique.
        </p>

        <h5>Change Email</h5>

        <p>
          Any user can change their email at any time. Leaving the email blank
          will prevent email notifications, while having one entered will allow
          the automated emails to be sent.
        </p>

        <h5>Global Options</h5>

        <p>
          The Global Options section allows you to select settings that apply to
          all aspects of TaskBoard. The settings on the left side allow you to
          choose the display language, default board, and where new tasks should
          appear when added. The settings on the right are more visual in nature.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/my-settings.png"
               alt="The My Settings section." title="The My Settings section.">

          <span class="caption">The My Settings section.</span>
        </a>
      </div>
    </div>

    <h3>User Administration</h3>

    <div class="row">
      <div class="text">
        <p>For standard users this is a list of all users in TaskBoard.</p>

        <h4>Actions</h4>

        <p>
          Admin users have two icons in the Actions column. The first
          (<i class="far fa-edit"></i>) allows you to edit the user using a
          modal dialog much like the Add User dialog (see below).
        </p>

        <p>
          The second icon (<i class="far fa-trash-alt"></i>) allows you to
          remove a user. This is a permanent action and cannot be undone. You
          are reminded of this and asked to confirm before removal occurs.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/user-administration.png"
               alt="User administration for admins." title="User administration for admins.">

          <span class="caption">User administration for admins.</span>
        </a>
      </div>
    </div>

    <div class="row">
      <div class="text">
        <h4>Add User</h4>

        <p>
          Another admin-only feature is the "Add User" button below the table.
          Clicking this will open a modal dialog.
        </p>

        <p>
          A unique username and matching password entries are all that is
          required to add a new user. However, you also have the option of
          assigning a default board, and making the new user an admin.
        </p>

        <p>
          If you assign a default board when adding a user, you won't have to
          add them to the board yourself, as this is done automatically.
        </p>

        <p>
          Keep in mind, when creating admin users they all have the same
          abilities. Any admin can edit any user, including other admins.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/add-user.png" alt="Add User dialog." title="Add User dialog.">

          <span class="caption">Add User dialog.</span>
        </a>
      </div>
    </div>

    <h3>Board Administration</h3>

    <div class="row">
      <div class="text">
        <p>
          Board Administration is a table listing all the boards the user has
          access to (for admins, that's every board on the site).
        </p>

        <p>
          The Name column gives the name of the board as a link to the board
          itself. The Columns column lists all columns in the board, in order,
          with a badge on each showing the total count of items currently in
          that column.
        </p>

        <p>
          The Categories column lists any categories in the board. The Users
          column lists all users assigned to the board (which includes all admins).
        </p>

        <p>
          Finally, the Actions column contains edit and remove icons for admin
          users. Admins also have an Add Board button for creating new boards.
        </p>

        <p>
          The first icon (<i class="far fa-edit"></i>) allows you to edit the
          board using a modal dialog much like the Add Board dialog (see below).
        </p>

        <p>
          The second icon (<i class="far fa-trash-alt"></i>) allows you to
          remove a board. This is a permanent action and cannot be undone. You
          are reminded of this and asked to confirm before removal occurs.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/board-administration.png"
               alt="Board Administration section." title="Board Administration section.">

          <span class="caption">Board Administration section.</span>
        </a>

        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/board-administration-admin.png"
               alt="Board Administration section for admins."
               title="Board Administration section for admins.">

          <span class="caption">Board Administration section for admins.</span>
        </a>
      </div>
    </div>

    <div class="row">
      <div class="text">
        <h4>Add Board</h4>

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
          The Select Users section allows you to select which users have access
          to the board.<br>
          <strong><small>
            Note: Admin users always have access to all boards
            whether they are selected here or not.
          </small></strong>
        </p>

        <p>
          While adding or editing a board, columns can be sorted by dragging
          them into the desired order. Columns and categories can be renamed
          inline by clicking the edit icon (<i class="far fa-edit"></i>). When
          editing inline, just hit <code>Enter</code> to accept the changes, or
          <code>Escape</code> to cancel.
        </p>

        <p>
          You can also remove a Column or Category by clicking the trash can
          icon (<i class="far fa-trash-alt"></i>).
        </p>

        <p>
          Click the Add Board button on the dialog when you have your board the
          way you want. You are returned to the Settings page assuming the two
          requirements for creating a board were met.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/first-board.png" alt="Adding a board." title="Adding a board.">

          <span class="caption">Adding a board.</span>
        </a>
      </div>
    </div>

    <h3>Automatic Actions</h3>

    <div class="row">
      <div class="text">
        <p>
          Automatic actions are a way to have items update automatically when
          specific criteria are met. All users see a list of automatic actions
          that are currently available. Admin users also see the Add Action
          section that allows creation of a new automatic action.
        </p>

        <p>
          The current implementation allows you to choose from four triggers
          for an item: moving to a column, assignee change, category change, and
          task points change. There are four actions that can occur, however not
          all actions are available to each trigger. The actions that can run
          against an item are: set color, set or add category, set or add
          assignee, clear due date, and alter color by points.
        </p>

        <p>
          The idea is that you can have things taken care of by TaskBoard. For
          example, say you use the Date Due to track active items; you can setup
          an automatic action to clear the due date when an item is moved into
          the Done column.
        </p>

        <p>
          If you have ideas for improving the options,
          <a href="https://github.com/kiswa/TaskBoard/issues">post an issue</a>
          for consideration!
        </p>

        <h4>Add Action</h4>

        <p>
          To add a new automatic action, start by selecting a board from the
          dropdown. Next, select a trigger and the trigger detail from the
          center column dropdowns. Finally, select an action and the action
          detail from the right column dropdowns.<br>
          <strong><small>
            Note: If "Clear item due date" is selected as the action, there is
            no action detail.
          </small></strong>
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/automatic-actions.png"
               alt="Automatic actions." title="Automatic actions.">

          <span class="caption">Automatic actions.</span>
        </a>

        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/automatic-actions-admin.png"
               alt="Automatic actions for admins." title="Automatic actions for admins.">

          <span class="caption">Automatic actions for admins.</span>
        </a>
      </div>
    </div>

    <h3>Next Steps</h3>

    <div>
      Let's get some more details about
      <router-link :to="{ name: 'boards' }">working within a board</router-link>.
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Settings extends Vue {
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
