<template>
  <section id="about-me">
    <div class="container">
      <Card id="about-me-card" :style="`background-color: rgb(${rgb})`">
        <div class="main-text">
          <h2><span>Hi, I'm Emil,</span> a front-end developer based in Poznań.</h2>
          <p id="about-me-text" :style="`opacity:${pAnimateOnVisible};`">
            I’m a skilled front-end freelancer proficient in SCSS, React.js, Vue.js and
            TypeScript, with experience in delivering commercial projects. Seeking a job
            as a front-end developer to dedicate more time to programming, I’m passionate
            about advancing my skills and contributing to impactful projects in a
            collaborative envionment.
          </p>
        </div>
      </Card>
    </div>
  </section>
</template>

<script>
import Card from "../UI/Card.vue";
import { createOnScroll } from "../utils/scrollBackgroundUtility";
import { createIsVisible } from "../utils/isVisibleUtility";
export default {
  data() {
    return {
      pAnimateOnVisible: 0,
      rgb: [15, 23, 42],
      pIsVisible: false,
    };
  },
  components: { Card },
  watch: {
    pIsVisible() {
      if (this.pIsVisible) {
        this.pAnimateOnVisible = 1;
      }
    },
  },
  mounted() {
    this.onScroll = createOnScroll({
      elementId: "about-me-card",
      callback: (rgb) => (this.rgb = rgb),
    });
    this.parIsVisible = createIsVisible({
      elementId: "about-me-text",
      margin: 100,
      callback: (isVisible) => (this.pIsVisible = isVisible),
    });
    window.addEventListener("scroll", this.parIsVisible);
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("scroll", this.parIsVisible);
  },
};
</script>

<style scoped lang="scss">
#about-me {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 100vh;
  padding: 25vh 0 5vh 0;
  background-color: var(--main);
  z-index: 5;
  .main-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
      font-weight: 500;
      line-height: 1.3;
      font-size: 3.5rem;
    }
    p {
      font-size: 2rem;
      transition: opacity 2s;
    }
  }
}

@media (min-width: 450px) {
  #about-me {
    .main-text {
      h2 {
        font-size: 4rem;
      }

      p {
        font-size: 2.2rem;
      }
    }
  }
}

@media (min-width: 576px) {
  #about-me {
    .main-text {
      h2 {
        font-size: 4.5rem;
      }
    }
  }
}

@media (min-width: 768px) {
  #about-me {
    .main-text {
      flex-direction: row;
      gap: 3rem;

      h2 {
        display: block;
        max-width: 25rem;
        font-size: 5rem;
        width: 100%;

        span {
          display: block;
        }
      }

      p {
        display: block;
        width: 100%;
      }
    }
  }
}

@media (min-width: 992px) {
  #about-me {
    .main-text {
      p {
        font-size: 2.5rem;
      }
    }
  }
}

@media (min-width: 1400px) {
  #about-me {
    .main-text {
      h2 {
        font-size: 5.5rem;
        max-width: 27rem;
      }
    }
  }
}
</style>
