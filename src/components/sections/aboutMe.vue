<template>
  <section id="about-me">
    <div class="container">
      <Card id="about-me-card" :style="`background-color: rgb(${rgb})`">
        <div class="main-text">
          <!-- <h2><span>Hi, I'm Emil,</span> a front-end developer based in Poznań.</h2> -->
          <h2 id="heading">
            <!-- I need create arr on created that will look like: 
            text:[
              { id:word-1,
                char:[{charID:1,letter:H},{charID:2,letter:i}]
               
              }] -->
            <span v-for="word in h2First" class="word" :key="word.wordID">
              <span
                v-for="char in word.word"
                class="char"
                :style="charStyle + `transition-delay:${(char.letterID * 5) / 100}s ;`"
                :key="`char_${char.letterID}`"
                >{{ char.letter }}</span
              >&nbsp;
            </span>
          </h2>
          <p id="about-me-text" :style="`opacity:${pOpacity};`">
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
      initialDeley: 0,
      charStyle: null,
      h2First: [
        "Hi,",
        "I'm",
        "Emil,",
        "a",
        "front-end",
        "developer",
        "based",
        "in",
        "Poznań.",
      ],
      h2IsVisible: false,

      pOpacity: 0,
      rgb: [15, 23, 42],
      pIsVisible: false,
    };
  },
  components: { Card },
  watch: {
    pIsVisible() {
      if (this.pIsVisible) {
        this.pOpacity = 1;
      }
    },
    h2IsVisible() {
      if (this.h2IsVisible) {
        this.charStyle = `opacity:1; transform:translateX(0%);`;
      }
    },
  },
  created() {
    const lol = () => {
      let newlol = [];
      let wordId = 0;
      let letterId = 0;

      newlol = this.h2First.map((item) => ({
        wordID: "wordID_" + wordId++,
        word: item,
      }));

      newlol.forEach((item) => {
        let wordArr = [];
        for (let i = 0; i < item.word.length; i++) {
          wordArr.push({ letterID: letterId++, letter: item.word[i] });
        }
        item.word = wordArr;
      });
      this.h2First = newlol;
    };
    lol();
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
    this.headingIsVisible = createIsVisible({
      elementId: "heading",
      margin: 0,
      callback: (isVisible) => (this.h2IsVisible = isVisible),
    });
    window.addEventListener("scroll", this.parIsVisible);
    window.addEventListener("scroll", this.headingIsVisible);
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("scroll", this.parIsVisible);
    window.removeEventListener("scroll", this.headingIsVisible);
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
      text-wrap: balance;
      display: block;
      span {
        text-wrap: balance;
        display: inline-block;
      }
      .char {
        transform: translateX(-100%);
        opacity: 0;
        transition: opacity 0.4s, transform 0.4s;
      }
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

        span {
          // display: block;
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
