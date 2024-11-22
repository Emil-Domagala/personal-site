<template>
  <section id="about-me">
    <div class="container">
      <Card id="about-me-card" :style="`background-color: rgb(${rgb})`">
        <div class="main-text">
          <h2><span>Hi, I'm Emil,</span> a front-end developer based in Poznań.</h2>
          <p>
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
export default {
  data() {
    return {
      rgb: [15, 23, 42],
      rgbInitial: [15, 23, 42],
      rgbWonted: [21, 31, 51],
    };
  },
  components: { Card },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const windowHeight = window.innerHeight;
      const rect = document.getElementById("about-me-card").getBoundingClientRect().top;
      // console.log(((windowHeight - rect) * 100) / windowHeight);
      const percentOfCardPosition = ((windowHeight - rect) * 100) / windowHeight;
      console.log(percentOfCardPosition);

      const red = Math.min(
        Math.max(
          this.rgbInitial[0] + (percentOfCardPosition - 20) / 9,
          this.rgbInitial[0]
        ),
        this.rgbWonted[0]
      );
      const green = Math.min(
        Math.max(
          this.rgbInitial[1] + (percentOfCardPosition - 20) / 7,
          this.rgbInitial[1]
        ),
        this.rgbWonted[1]
      );
      const blue = Math.min(
        Math.max(
          this.rgbInitial[2] + (percentOfCardPosition - 20) / 6,
          this.rgbInitial[2]
        ),
        this.rgbWonted[2]
      );
      this.rgb = [red, green, blue];
    },
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
