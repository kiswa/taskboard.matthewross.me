<template>
  <div class="docs">
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'node_modules/scss-base/src/_mixins.scss';
@import 'src/settings.scss';

.row {
  @include clearfix;

  display: flex;
  text-align: justify;
  margin-bottom: 1rem;

  @media(max-width: $breakpoint-small) {
    flex-direction: column;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  .fa-edit,
  .fa-angle-double-down,
  .fa-angle-double-right,
  .fa-eye,
  .fa-download {
    color: $color-primary;
  }

  .fa-trash-alt {
    color: $color-secondary;
  }

  .text {
    margin-right: 1rem;
    width: 65%;

    @media(max-width: $breakpoint-small) {
      width: 100%;
    }
  }

  .image-wrapper {
    width: 35%;

    @media(max-width: $breakpoint-small) {
      width: 100%;
    }
  }

  .figure {
    @include shadow-low;

    background-color: #fff;
    color: $color-text;
    cursor: pointer;
    display: block;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    padding-bottom: .5rem;
    text-align: left;
    text-decoration: none;
    transition: all .2s ease-in-out;

    img {
      width: 100%;
    }

    .caption {
      display: block;
      font-weight: 700;
      transition: all .2s ease-in-out;
    }

    &.zoomed {
      @include shadow-high;

      transform: scale(2.6) translate(-37%, 10%);

      @media(max-width: $breakpoint-small) {
        transform: none;
      }

      .caption {
        transform: scale(.45) translateX(-61%);

        @media(max-width: $breakpoint-small) {
          transform: none;
        }
      }
    }
  }
}

</style>
