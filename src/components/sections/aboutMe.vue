<template>
  <section
    id="about-me"
    :style="`background-color: rgba(var(--main-numbers),${transparency})`">
    <div class="container">
      <Card id="about-me-card">
        <div class="main-text">
          <h2 id="about-me-heading">
            <HeadingAnimation
              parentId="about-me-heading"
              prefKey="about-me"
              textProp="Hi, I'm Emil, a full-stack developer based in Poznań"
              :marginVisible="50" />
          </h2>
          <p
            id="about-me-text"
            :style="`opacity:${pOpacity};`">
            I’m a skilled full-stack developer proficient in SCSS, React.js, Vue.js, TypeScript, Node.js, and SQL.
            Passionate about software development, I’m seeking a role to craft intuitive, high-performance interfaces
            while leveraging my full-stack expertise. I thrive in collaborative environments and am eager to contribute
            to impactful projects.
          </p>
        </div>
      </Card>
    </div>
  </section>
</template>

<script>
import Card from '../UI/Card.vue';
import HeadingAnimation from '../UI/HeadingAnimation.vue';
import { createHowMuchScreenCovers } from '../utils/howMuchScreenCovers';
import { createIsVisible } from '../utils/isVisibleUtility';
export default {
  data() {
    return {
      pOpacity: 0,
      pIsVisible: false,
      transparency: 0.4,
    };
  },
  components: { Card, HeadingAnimation },
  watch: {
    pIsVisible() {
      if (this.pIsVisible) {
        this.pOpacity = 1;
      }
    },
  },
  mounted() {
    this.screenCovers = createHowMuchScreenCovers({
      elementId: 'about-me',
      callback: (howMuchIsVisible) => (this.transparency = Math.max(howMuchIsVisible / 85, 0.4)),
    });

    this.parIsVisible = createIsVisible({
      elementId: 'about-me-text',
      margin: 100,
      callback: (isVisible) => (this.pIsVisible = isVisible),
    });
    window.addEventListener('scroll', this.parIsVisible);
    window.addEventListener('scroll', this.screenCovers);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.parIsVisible);
    window.removeEventListener('scroll', this.screenCovers);
  },
};
</script>

<style scoped lang="scss">
#about-me {
  backdrop-filter: blur(4px);
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 100vh;
  padding: 25vh 0 5vh 0;
  z-index: 5;
  span {
    text-wrap: balance;
    display: inline-block;
  }
  .char {
    transform: translateX(-100%);
    opacity: 0;
    transition: opacity 0.4s, transform 0.4s;
  }

  .main-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
      font-weight: 500;
      line-height: 1.3;
      font-size: 3.5rem;
      text-wrap: balance;
      display: block;
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
        // display: block;
        max-width: 25rem;
        font-size: 5rem;
        width: 100%;
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
