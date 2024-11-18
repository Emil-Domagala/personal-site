<template>
  <section id="latest-work">
    <div class="container">
      <h2>My latest projects</h2>
    </div>
    <div class="projects">
      <ProjectBlock :page="pageLogical" />
      <div class="line"></div>
      <ProjectBlock :page="pageFindCoachReact" />
      <div class="line"></div>
      <ProjectBlock :page="pageMicrointeraction" />
      <div class="line"></div>
      <ProjectBlock :page="pageMmcSchool" />
      <div class="line"></div>
      <ProjectBlock :page="pageFindCoachVue" />
      <div class="line"></div>
      <ProjectBlock :page="pageGithub" />
    </div>
  </section>
</template>

<script>
import ProjectBlock from "../UI/projectBlock.vue";
export default {
  components: { ProjectBlock },
  data() {
    return {
      pageFindCoachVue: {
        elementID: "findCoachVue",
        name: "Find Coach Vue",
        desc:
          "The website was written in vue.js, uses vex, router. Uses firebase as a backend. You can create your own account, become a coach and send messages",
        imgSrc: "/src/assets/img/findCoachVue.png",
        link: "http://www.edcoachvue.pl",
      },
      pageFindCoachReact: {
        elementID: "findCoachReact",
        name: "Find Coach React",
        desc:
          "The website was written in react.js, uses redux, router, framer-motion. Uses firebase as a backend. You can create your own account, become a coach and send messages",
        imgSrc: "/src/assets/img/findCoachReact.png",
        link: "http://www.edfindcoach.pl",
      },
      pageMmcSchool: {
        elementID: "mmcSchool",
        name: "MMC School",
        desc:
          "Website created in HTML, SASS, JavaScript. I recreated the mmcschool.pl website from 2022",
        imgSrc: "/src/assets/img/MMCSchool.png",
        link: "http://www.edmmcschool.pl",
      },
      pageMicrointeraction: {
        elementID: "microinteraction",
        name: "Microinteraction",
        desc:
          "The website was written in react. It is highly responsive with many diferent animations, and also looks really nice",
        imgSrc: "/src/assets/img/MicroInteractions.png",
        link: "http://www.edwordpress.pl",
      },
      pageLogical: {
        elementID: "logical",
        name: "Logical",
        desc:
          "The Vue.js website focuses on scroll animations, incorporating advanced features. Offers a visually engaging user experience with dynamic effects triggered by scrolling act ons.",
        imgSrc: "/src/assets/img/Logical.png",
        link: "http://www.mevsjmsgki.cfolks.pl",
      },
      pageGithub: {
        elementID: "github",
        name: "Github",
        desc: "Check out my GitHub!",
        imgSrc: "/src/assets/img/github.png",
        link: "https://github.com/Emil-Domagala",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#latest-work {
  position: relative;
  z-index: 5;
  padding: 5vh 0;
}

.line {
  margin: 0 auto;
  height: 1px;
  width: 80%;
  background-color: var(--primary);
  opacity: 0.3;
}

h2 {
  text-align: right;
  margin-bottom: 2rem;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
}
</style>
