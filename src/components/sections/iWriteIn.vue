<template>
  <section id="i-write-in">
    <div class="container">
      <Card id="i-write-in-card" :style="`background-color: rgb(${rgb})`">
        <div class="wrapper">
          <h2>I write in:</h2>
          <div class="languages" id="languages">
            <Language langName="Vue.js" />
            <Language langName="React.js" />
            <Language langName="JavaScript" />
            <Language langName="TypeScript" />
            <Language langName="Sass" />
            <Language langName="PHP" />
          </div>
        </div>
      </Card>
    </div>
  </section>
</template>
<script>
import Card from "../UI/Card.vue";
import Language from "../UI/language.vue";
import { createOnScroll } from "../utils/scrollBackgroundUtility";

export default {
  components: { Card, Language },
  data() {
    return {
      rgb: [15, 23, 42],
    };
  },

  mounted() {
    this.onScroll = createOnScroll({
      elementId: "i-write-in-card",
      callback: (rgb) => (this.rgb = rgb),
    });

    window.addEventListener("scroll", this.onScroll);
    
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped lang="scss">
#i-write-in {
  position: relative;
  z-index: 5;
  padding: 5vh 0;
  background-color: var(--main);

  .wrapper {
    h2 {
      font-size: 5rem;
      margin-bottom: 3rem;
    }

    .languages {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transition: opacity 2s;
    }
  }
}

@media (min-width: 450px) {
  #i-write-in {
    .wrapper {
      h2 {
        font-size: 6rem;
      }
    }
  }
}

@media (min-width: 768px) {
  #i-write-in {
    .wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;

      h2 {
        display: block;

        width: 100%;
      }

      .languages {
        width: 100%;
      }
    }
  }
}

@media (min-width: 992px) {
  #i-write-in {
    .wrapper {
      h2 {
        font-size: 6.5rem;
      }
    }
  }
}
</style>
