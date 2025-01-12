<template>
  <section
    id="latest-work"
    :style="sectionHeight">
    <div class="container">
      <h2
        id="latest-work-h2"
        :style="`background-color: rgb(${rgb})`">
        Latest projects:
      </h2>

      <div
        class="projects"
        :style="`${projectsHeight}; background-color: rgb(${rgb})`">
        <ProjectBlock
          :page="pageLogical"
          class="proj_block one" />
        <ProjectBlock
          :page="pageFindCoachReact"
          class="proj_block two" />
        <ProjectBlock
          :page="pageMicrointeraction"
          class="proj_block three" />
        <ProjectBlock
          :page="pageMmcSchool"
          class="proj_block four" />
        <ProjectBlock
          :page="pageFindCoachVue"
          class="proj_block five" />
        <ProjectBlock
          :page="pageGithub"
          class="proj_block six"
          id="last" />
        <div class="last-block"></div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectBlock from '../UI/projectBlock.vue';
import { createOnScroll } from '../utils/scrollBackgroundUtility';
import { nextTick } from 'vue';

export default {
  components: { ProjectBlock },
  data() {
    return {
      rgb: [15, 23, 42],
      windowWidth: null,
      sectionHeight: null,
      projectsHeight: null,
      pageFindCoachVue: {
        elementID: 'findCoachVue',
        name: 'Find Coach Vue',
        desc: 'The website was written in vue.js, uses vex, router. Uses firebase as a backend. You can create your own account, become a coach and send messages',
        imgSrc: '/img/findCoachVue.png',
        link: 'http://www.edcoachvue.pl',
      },
      pageFindCoachReact: {
        elementID: 'findCoachReact',
        name: 'Find Coach React',
        desc: 'The website was written in react.js, uses redux, router, framer-motion. Uses firebase as a backend. You can create your own account, become a coach and send messages',
        imgSrc: '/img/findCoachReact.png',
        link: 'http://www.edfindcoach.pl',
      },
      pageMmcSchool: {
        elementID: 'mmcSchool',
        name: 'MMC School',
        desc: 'Website created in HTML, SASS, JavaScript. I recreated the mmcschool.pl website from 2022',
        imgSrc: '/img/mMCSchool.png',
        link: 'http://www.edmmcschool.pl',
      },
      pageMicrointeraction: {
        elementID: 'microinteraction',
        name: 'Microinteraction',
        desc: 'The website was written in react. It is highly responsive with many diferent animations, and also looks really nice',
        imgSrc: '/img/microInteractions.png',
        link: 'http://www.edwordpress.pl',
      },
      pageLogical: {
        elementID: 'logical',
        name: 'Logical',
        desc: 'The Vue.js website focuses on scroll animations, incorporating advanced features. Offers a visually engaging user experience with dynamic effects triggered by scrolling act ons.',
        imgSrc: '/img/logical.png',
        link: 'http://www.mevsjmsgki.cfolks.pl',
      },
      pageGithub: {
        elementID: 'github',
        name: 'Github',
        desc: 'Check out my GitHub!',
        imgSrc: '/img/github.png',
        link: 'https://github.com/Emil-Domagala',
      },
    };
  },
  mounted() {
    window.addEventListener('resize', this.getWidth);
    this.getWidth();
    window.addEventListener('resize', this.getSectionHeight);
    window.onload = this.runAfterAllLoaded;

    this.$nextTick(() => {
      this.runAfterAllLoaded();
    });

    document.addEventListener('DOMContentLoaded', this.getSectionHeight);

    this.onScroll = createOnScroll({
      elementId: 'latest-work-h2',
      callback: (rgb) => (this.rgb = rgb),
    });
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.getSectionHeight);
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    runAfterAllLoaded() {
      this.getSectionHeight();
    },
    getWidth() {
      this.windowWidth = window.innerWidth;
    },
    getSectionHeight() {
      if (this.windowWidth >= 768) {
        const section = document.getElementById('latest-work');
        const lastProjBlock = document.getElementById('last');
        const heading = document.getElementById('latest-work-h2');

        const bottomLastProjBlock = lastProjBlock.getBoundingClientRect().bottom;
        const bottomHeading = heading.getBoundingClientRect().bottom;
        const topSection = section.getBoundingClientRect().top;
        this.sectionHeight = `height:calc(${bottomLastProjBlock - topSection}px + 10vh)`;
        this.projectsHeight = `height:calc(${bottomLastProjBlock - bottomHeading + 30}px )`;
      } else {
        this.sectionHeight = null;
        this.projectsHeight = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#latest-work {
  position: relative;
  z-index: 6;
  padding: 15vh 0 5vh 0;
  background-color: var(--main);
}

h2 {
  position: sticky;
  top: calc(8vh - 75px);
  display: block;
  padding-top: 75px;
  padding-bottom: 6rem;
  font-size: 9cqi;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -1px;
  background-color: var(--main-hover);
  z-index: 6;
}

.last-block {
  height: 200px;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  position: relative;
  background-color: var(--main-hover);
  padding-bottom: 40px;
}
.proj_block {
  position: sticky;
  top: calc(9vh + 4rem + 11cqi);
  z-index: 6;
  padding: 1px;
}

@media (min-width: 576px) {
  h2 {
    top: calc(5vh - 75px);
    font-size: 8cqi;
  }

  .proj_block {
    position: sticky;
    top: calc(5vh + 4rem + 11cqi);
  }
}

@media (min-width: 768px) {
  #latest-work {
    padding-top: 5vh;
    padding-bottom: 5vh;
  }

  .projects {
    position: relative;
    padding: 0 20px;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    // background-color: transparent;
    container-type: inline-size;
  }
  .last-block {
    display: none;
  }

  h2 {
    position: static;
    text-align: right;
    font-size: 6.5rem;
    padding-right: 4rem;
    padding-bottom: 2rem;
  }

  .proj_block {
    position: absolute;
  }
  .one {
    top: 52cqi;
    left: 3cqi;
    height: 48cqi;
    width: 50cqi;
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
    right: 20px;
    height: 55cqi;
    width: 40cqi;
    z-index: 9;
  }

  .four {
    top: 0;
    left: 20px;
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
