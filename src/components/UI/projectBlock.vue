<template>
  <a
    :href="`${page.link}`"
    rel="noopener noreferrer"
    target="_blank"
    class="project-block"
    :id="page.elementID"
    :style="`transform: rotateX(${xPercent / 16}deg) rotateY(${yPercent / 16}deg) `"
  >
    <div class="project-block--img" :style="`background-image:url(${page.imgSrc})`"></div>
    <div class="project-block--slide">
      <h3>{{ page.name }}</h3>
      <p>{{ page.desc }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    page: { type: Object, Required: true },
  },
  data() {
    return {
      windowWidth: 0,
      xPercent: 0,
      yPercent: 0,
      //   scale: 1,
    };
  },
  mounted() {
    window.addEventListener("resize", this.getWidth);
    this.getWidth();
    if (this.windowWidth >= 992) {
      this.$el.addEventListener("mousemove", this.moveIt);
      this.$el.addEventListener("mouseleave", this.coursorLeft);
    }
  },
  beforeUnmount() {
    this.$el.removeEventListener("mousemove", this.moveIt);
  },
  methods: {
    getWidth() {
      this.windowWidth = window.innerWidth;
    },
    coursorLeft(e) {
      this.xPercent = 0;
      this.yPercent = 0;
      this.scale = 1.0;
    },
    moveIt(e) {
      const rect = e.target.getBoundingClientRect();

      const halfWidth = rect.width / 2;
      const halfHeight = rect.height / 2;

      const xPos = e.clientX - rect.left - halfWidth;
      const yPos = e.clientY - rect.top - halfHeight;

      this.xPercent = (xPos / halfWidth) * 100;
      this.yPercent = -(yPos / halfHeight) * 100;
    },
  },
};
</script>

<style lang="scss" scoped>
.project-block {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 2px;
  background-color: #000;
  //   box-shadow: 0px 0px 34px 6px var(--main-hover);
  //   transform: rotateX('angle');
  //   filter: brightness(100%);
  transition: transform 0.1s;
  text-decoration: none;
  &--slide {
    position: absolute;
    bottom: 0;
    padding: 2rem;
    transform: translateY(100%);
    transition: transform 0.4s;
    h3 {
      font-size: 2.5rem;
      color: var(--primary-light);
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.6rem;
      color: var(--primary-light);
    }
  }
  &--img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: filter 0.4s;
    // width: 100%;
    // background-image: url(../../assets/img/findCoachVue.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
}

.project-block:hover {
  z-index: 20;
  transition: z-index 0.4s;
  .project-block--slide {
    transform: translateY(0%);
  }
  .project-block--img {
    filter: brightness(20%);
  }
}

@media (min-width: 992px) {
  .project-block {
    &--slide {
      padding: 3rem;
      h3 {
        font-size: 3rem;
      }
      p {
        font-size: 2rem;
      }
    }
  }
}
</style>
