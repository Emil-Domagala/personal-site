<template>
  <section id="latest-work" :style="sectionHeight">
    <div class="isContainer">
      <h2>Latest projects:</h2>
    </div>
    <div :class="isContainer">
      <div class="projects">
        <ProjectBlock :page="pageLogical" class="proj_block one" />
        <ProjectBlock :page="pageFindCoachReact" class="proj_block two" />
        <ProjectBlock :page="pageMicrointeraction" class="proj_block three" />
        <ProjectBlock :page="pageMmcSchool" class="proj_block four" />
        <ProjectBlock :page="pageFindCoachVue" class="proj_block five" />
        <ProjectBlock :page="pageGithub" class="proj_block six" id="last" />
        <div class="last-block"></div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectBlock from "../UI/projectBlock.vue";
export default {
  components: { ProjectBlock },
  data() {
    return {
      isContainer: null,
      windowWidth: null,
      sectionHeight: null,
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
    window.addEventListener("resize", this.getWidth);
    this.getWidth();
    window.addEventListener("resize", this.getSectionHeight);
    this.getSectionHeight();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.getSectionHeight);
  },
  methods: {
    getWidth() {
      this.windowWidth = window.innerWidth;
    },
    getSectionHeight() {
      if (this.windowWidth >= 992) {
        const section = document.getElementById("latest-work");
        const lastProjBlock = document.getElementById("last");

        const bottomLastProjBlock = lastProjBlock.getBoundingClientRect().bottom;
        const topSection = section.getBoundingClientRect().top;
        this.sectionHeight = `height:calc(${bottomLastProjBlock - topSection}px + 10vh)`;
        this.isContainer = null;
      } else {
        this.sectionHeight = null;
        this.isContainer = "container";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#latest-work {
  position: relative;
  z-index: 5;
  padding: 20vh 0 5vh 0;
}

.isContainer {
  position: sticky;
  top: calc(9vh - 200px);
  //   position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 200px;
  margin: 0px 4vw;
  z-index: 6;
  background-color: var(--main-hover);
}

h2 {
  display: block;
  padding-bottom: 6rem;
  font-size: 11cqi;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -1px;
}

.one,
.two,
.three,
.four,
.five,
.six {
  position: sticky;
  top: calc(9vh + 4rem + 11cqi);
}

.last-block {
  height: 200px;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  background-color: var(--main-hover);
  padding-bottom: 40px;
}
.proj_block {
  z-index: 6;
  padding: 1rem;
}

@media (min-width: 576px) {
  .isContainer {
    margin: 0 2.5vw;
  }

  //   .proj_block {
  //     max-width: 600px;
  //     width: 100%;
  //     margin: 0 auto;
  //   }

  h2 {
    font-size: 8cqi;
  }
}

@media (min-width: 992px) {
  #latest-work {
    padding: 5vh 0;
  }

  .isContainer {
    position: static;
    padding-top: 0;
    margin: 0;
    background-color: transparent;
  }

  .projects {
    padding: 0;
    background-color: transparent;
  }
  .last-block {
    display: none;
  }

  h2 {
    text-align: right;
    font-size: 6.5rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
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
