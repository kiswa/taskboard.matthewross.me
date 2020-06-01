<template>
  <div class="boards">
    <h2>Boards</h2>

    <div class="row">
      <div class="text">
        <h3>Overview</h3>

        <p>
          There are a few things to note on the board page. There is a board
          navigation section which includes a board selector on the left, and
          filters for the current board on the right.
        </p>

        <p>
          The filters allow for finer grain detail when going through board
          tasks. For example, if a user wants to see only those tasks assigned
          to them, they can select their username from the User Filter dropdown.
          <strong><small>
            Note: If you did not add any categories when you created the board,
            the Category Filter dropdown will not be visible.
          </small></strong>

          <p>
            Each column in the board is displayed below the dropdowns section.
            Columns may be expanded and collapsed and the setting will persist
            for each user across logins.
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
        <h3>Navigation & Filters</h3>

        <p>
          Above the board columns are a quick navigation dropdown on the left,
          and one or two filters on the right (the Category Filter dropdown only
          exists if the board has categories).
        </p>

        <p>
          The Select Board dropdown on the left lists all boards you are a
          member of, and allows you to jump between boards by selecting the one
          you want in the list. The current board is selected by default.
        </p>

        <p>
          The filters are set to "Any" when a board is loaded, so that no tasks
          are filtered out. Changing the selection of either filter updates the
          board tasks displayed to 'whitewash' the tasks that do not match the
          filter.
        </p>

        <p>
          Selecting a user in the User Filter makes tasks assigned to them more
          visible, and can be useful for determining if someone has too many
          assigned tasks, or just to see what you have on your plate.
        </p>

        <p>
          When a board has categories, the Category Filter dropdown is visible.
          Changing the selected category works the same way as the User Filter
          and highlights those tasks in the selected category.
        </p>

        <h4>Combining Filters</h4>

        <p>
          Both filters may be used at the same time, with the user filter taking
          precedence. If you want to see all tasks that are assigned to you, but
          only if they are in a specific category, you start by setting the User
          Filter to your username then the Category Filter to the desired category.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/board-navigation.png"
               alt="Navigation and Filter dropdowns." title="Navigation and Filter dropdowns.">

          <span class="caption">Navigation and Filter dropdowns.</span>
        </a>

        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/filters-in-use.png"
               alt="Filters in use." title="Filters in use.">

          <span class="caption">Filters in use.</span>
        </a>
      </div>
    </div>

    <div class="row">
      <div class="text">
        <h3>Columns</h3>

        <p>
          The first time you visit a board, all columns will be expanded (and
          may scroll off the side if there are many columns). You can collapse
          columns by clicking the <i class="far fa-angle-double-down"></i> icon
          on the right of the column header.
        </p>

        <p>
          When you collapse a column, only the header is visible and it is
          rotated to take up minimal space. A badge is displayed below the name
          so you can tell how many tasks are contained within the column at a glance.
        </p>

        <p>
          Clicking the <i class="far fa-angle-double-right"></i> icon will return
          the column to its expanded state.
        </p>

        <p>
          When you expand/collapse columns, that state is saved so the columns
          remain the same the next time you visit the board. This view state is
          unique to each user and board.
        </p>

        <p>
          To add a task to a column either click the plus button (which will
          always be at the top right) or right-click in the column and use the
          context menu. You may also enter a title in the quick add bar and press
          <code>Enter</code> (or click the plus button) to add a title-only task.
        </p>

        <p>
          If there are tasks in the column, and you right-click one of them
          instead of the column area, you will see a slightly different context
          menu. The Add Task option is also available from this context menu.
        </p>

        <p>
          If you have more than one board, there will also be options to move or
          copy the task to another board.
        </p>
      </div>

      <div class="image-wrapper">
        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/collapsed-column.png"
               alt="Expanded/collapsed columns and column context menu."
               title="Expanded/collapsed columns and column context menu.">

          <span class="caption">Expanded/collapsed columns and column context menu.</span>
        </a>

        <a class="figure" @click.stop="toggleZoom">
          <img src="../assets/docs/task-context-menu.png"
               alt="Task context menu."
               title="Task context menu.">

          <span class="caption">Task context menu.</span>
        </a>
      </div>
    </div>

    <h3>Next Steps</h3>

    <p>
      That's it for the board itself. Let's get into
      <router-link :to="{ name: 'tasks' }">working with Tasks</router-link> next.
    </p>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Boards extends Vue {
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
