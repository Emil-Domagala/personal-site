<template>
  <div
    :id="id"
    class="card"
    :style="`background-color: rgb(${rgb})`">
    <slot></slot>
  </div>
</template>

<script>
import { createOnScroll } from '../utils/scrollBackgroundUtility';
export default {
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      rgb: [15, 23, 42],
    };
  },
  mounted() {
    this.onScroll = createOnScroll({
      elementId: this.id,
      callback: (rgb) => (this.rgb = rgb),
    });

    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style scoped lang="scss">
.card {
  padding: 20px;
  background-color: var(--main-hover);
}

@media (min-width: 450px) {
  .card {
    padding: 35px;
  }
}

@media (min-width: 576px) {
  .card {
    padding: 45px;
  }
}

@media (min-width: 768px) {
  .card {
    padding: 55px;
  }
}

@media (min-width: 992px) {
  .card {
    padding: 60px;
  }
}

@media (min-width: 1200px) {
  .card {
    padding: 65px;
  }
}
</style>
