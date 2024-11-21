<template>
  <!-- <Pointer v-if="pageWidth > 768" /> -->
  <Hero :scrollPercentage="scrollPercentage" />
  <AboutMe />
  <IWriteIn />
  <LatestWork />
  <ContactMe />
</template>

<script>
import Pointer from "./components/pointer.vue";
import Hero from "./components/sections/hero.vue";
import AboutMe from "./components/sections/aboutMe.vue";
import IWriteIn from "./components/sections/iWriteIn.vue";
import LatestWork from "./components/sections/latestWork.vue";
import ContactMe from "./components/sections/contactMe.vue";

export default {
  components: { Pointer, Hero, AboutMe, IWriteIn, LatestWork, ContactMe },
  data() {
    return {
      pageWidth: 0,
      scrollPercentage: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.scrollValue);
    window.addEventListener("resize", this.scrollValue);
    const htmlElement = document.documentElement;
    this.pageWidth = htmlElement.clientWidth;
  },
  unmounted() {
    window.removeEventListener("scroll", this.scrollValue);
    window.removeEventListener("resize", this.scrollValue);
  },
  methods: {
    scrollValue() {
      const htmlElement = document.documentElement;
      this.pageWidth = htmlElement.clientWidth;

      const percentOfScrolledScreenHeight =
        htmlElement.scrollTop / htmlElement.clientHeight;
      this.scrollPercentage = Math.min(percentOfScrolledScreenHeight * 100, 100);
    },
  },
};
</script>
