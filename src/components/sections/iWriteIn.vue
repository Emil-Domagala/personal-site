<template>
  <section id="i-write-in">
    <div class="container">
      <Card id="i-write-in-card">
        <div class="wrapper">
          <h2 id='i-write-in-heading'> <HeadingAnimation
              parentId="i-write-in-heading"
              prefKey="about-me"
              textProp="I write in: "
              :marginVisible=50
            /></h2>
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
import HeadingAnimation from '../UI/HeadingAnimation.vue';

export default {
  components: { Card, Language,HeadingAnimation },
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
