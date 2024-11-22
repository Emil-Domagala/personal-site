<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
// import { useElementVisibility } from '@vueuse/core';
// import { ref } from 'vue'

// const target = ref(null)
// const targetIsVisible = useElementVisibility(target)

// export default {
//   mounted() {
//     window.addEventListener("scroll", this.changeBgc);
//   },
//   methods: {
//     changeBgc() {
//       const windowScroll = window.scrollY;
//       const currentCard = this.$el.getBoundingClientRect();
//       console.log(windowScroll);
//       console.log(currentCard);
//     },
//   },
// };
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
