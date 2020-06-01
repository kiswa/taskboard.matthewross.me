<template>
  <div class="tasks" @click="closeAllImages">
    <h2>Tasks</h2>

    <div class="row">
      <div class="text">
        <h3>Adding</h3>

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

    <div class="row">
      <div class="text">
        <h3>Column Position</h3>

        <p>
          Tasks are initially displayed on the board in the order they were
          added to a column. However, you can re-order tasks by dragging and
          dropping them into a new position. You can also drag and drop to move
          a task into a new column (this will also set its position within the
          new column).
        </p>
      </div>
    </div>

    <div class="row">
      <div class="text">
        <h3>Column View</h3>

        <p>
          When viewing tasks in columns, each task has three main sections that
          provide useful details at a glance.
        </p>

        <p>
          In the header is the task's name, and points are displayed in a badge
          on the far right (if there are any points).
        </p>

        <p>
          Below the header is the task's description. This area does allow you
          to view the full description, however the maximum height of a task is
          limited so there will be scrolling involved for more than about ten lines.
        </p>

        <p>
          The bottom section of a task displays the assignee(s) on the left (or
          "Unassigned") with task details on the right. If there are comments, a
          speech bubble icon (<i class="fad fa-comments"></i>) is seen. If there
          are attachments, a paperclip icon (<i class="far fa-paperclip"></i>)
          will show. Hovering the mouse over either icon will give you a count
          of the comments or attachments.
        </p>

        <p>
          If a due date has been assigned, it is displayed on the right. And if
          there are categories, the assigned category(ies) (or "Uncategorized")
          is at the far right.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/task.png"
               alt="Task view in column." title="Task view in column.">

          <span class="caption">Task view in column.</span>
        </a>

        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/task-detail.png"
               alt="Task comments count on hover." title="Task comments count on hover.">

          <span class="caption">Task comments count on hover.</span>
        </a>
      </div>
    </div>

    <div class="row">
      <div class="text">
        <h3>Context Menu</h3>

        <p>
          Tasks in a column have a right-click context menu. This menu has options
          for View Task, Edit Task, Move to Column, and Add Task. If there are
          multiple boards, there are also Move to Board and Copy to Board options.
        </p>

        <p>
          There is an additional Remove Task option. Removing a task cannot be undone,
          so take care when using this feature. You will be asked to confirm removal.
        </p>

        <p>
          The Edit Task option opens a dialog much like the Add Task dialog. However,
          it is filled with the information from the task you right-clicked for editing.
        </p>

        <p>The View Task option opens the View Task modal dialog.</p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/task-context-menu.png"
               alt="Task context menu." title="Task context menu.">

          <span class="caption">Task context menu.</span>
        </a>
      </div>
    </div>

    <div class="row">
      <div class="text">
        <h3>View Task</h3>

        <p>
          To get a larger view of a task, as well as see its complete history, simply
          double-click the task or right-click and choose View Task from the context menu.
        </p>

        <p>
          All activity on a task is displayed in a collapsible  menu on the left.
          You can collapse this by clicking the <i class="far fa-angle-double-down"></i> icon.
        </p>

        <p>
          The main dialog has the task Title and Points (if Points were entered)
          in the header. The first section is colored to match the chosen task
          color and contains the complete description, followed by one row with
          the assignee(s), category(ies) (if the board has categories), and
          current column for the task.
        </p>

        <p>
          Beneath the task details are one or two buttons depending on the user
          level. The Edit button will open the task in an Edit Task dialog (much
          like the Add Task dialog). For admin users, there is also a Remove Task
          button. Removing a task cannot be undone, so take care when using this
          feature. You will be asked to confirm deletion.
        </p>

        <p>
          The next section displays any attachments associated with the task,
          followed by an input to allow uploading of an attachment.
        </p>

        <p>
          The final section displays any comments on the task, and an input for
          adding a comment to the task.
        </p>

        <p>
          When there are attachments (see second screenshot), they may be viewed
          or directly downloaded using the icons on the right of each attachment
          (<i class="far fa-eye"></i> and <i class="fas fa-download"></i>, respectively).
          For admin users and the original submitter, there is also a remove
          icon (<i class="far fa-trash-alt"></i>).
        </p>

        <p>
          For comments, there are edit and remove icons following the same rules
          as for attachments (admin or creator). Comments are also sortable by
          oldest or newest using the dropdown.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/view-task.png"
               alt="Viewing a task in detail." title="Viewing a task in detail.">

          <span class="caption">Viewing a task in detail.</span>
        </a>

        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/view-task-more.png"
               alt="Viewing a task with attachment and comment."
               title="Viewing a task with attachment and comment.">

          <span class="caption">Viewing a task with attachment and comment.</span>
        </a>
      </div>
    </div>

    <div class="row">
      <div class="text">
        <h3>File Viewer</h3>

        <p>
          Clicking the view icon on an attachment opens a new window (or tab if
          depending on your browser configuration) which displays the file if
          possible. It also provides a download link in the upper right.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/file-viewer.png" alt="File viewer." title="File viewer.">

          <span class="caption">File viewer.</span>
        </a>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Tasks extends Vue {
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
