<template>
  <section id="latest-work" :style="`height:calc(${sectionHeight}px + 10vh)`">
    <div class="container">
      <h2>My latest projects:</h2>
    </div>
    <div class="projects">
      <ProjectBlock :page="pageLogical" class="proj_block one" />
      <div class="line"></div>
      <ProjectBlock :page="pageFindCoachReact" class="proj_block two" />
      <div class="line"></div>
      <ProjectBlock :page="pageMicrointeraction" class="proj_block three" />
      <div class="line"></div>
      <ProjectBlock :page="pageMmcSchool" class="proj_block four" />
      <div class="line"></div>
      <ProjectBlock :page="pageFindCoachVue" class="proj_block five" />
      <div class="line"></div>
      <ProjectBlock :page="pageGithub" class="proj_block six" id="last" />
    </div>
  </section>
</template>

<script>
import ProjectBlock from "../UI/projectBlock.vue";
export default {
  components: { ProjectBlock },
  data() {
    return {
      sectionHeight: 0,
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
  mounted() {
    window.addEventListener("resize", this.getSectionHeight);
    this.getSectionHeight();
  },
  methods: {
    getSectionHeight() {
      const section = document.getElementById("latest-work");
      const lastProjBlock = document.getElementById("last");

      const bottomLastProjBlock = lastProjBlock.getBoundingClientRect().bottom;
      const topSection = section.getBoundingClientRect().top;
      this.sectionHeight = bottomLastProjBlock - topSection;
    },
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
  z-index: 6;
  background-color: var(--main-hover);
}

@media (min-width: 992px) {
  .line {
    display: none;
  }

  h2 {
    font-size: 6.5rem;
  }

  .proj_block {
    position: absolute;
    container-type: inline-size;
  }
  .one {
    top: 52cqi;
    left: 3cqi;
    height: 48cqi;
    width: 52cqi;
    z-index: 11;
  }
  .two {
    top: 10cqi;
    left: 35cqi;
    height: 35cqi;
    width: 50cqi;
    z-index: 8;
  }
  .three {
    top: 22cqi;
    right: 0px;
    height: 55cqi;
    width: 40cqi;
    z-index: 9;
  }

  .four {
    top: 0;
    left: 0;
    height: 50cqi;
    width: 40cqi;
    z-index: 10;
  }
  .five {
    top: 60cqi;
    left: 50cqi;
    height: 35cqi;
    width: 35cqi;
    z-index: 10;
  }
  .six {
    top: 80cqi;
    right: 2cqi;
    height: 30cqi;
    width: 30cqi;
    z-index: 10;
  }
}
</style>
