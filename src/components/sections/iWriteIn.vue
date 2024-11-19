<template>
  <section id="i-write-in">
    <div class="container">
      <Card>
        <div class="wrapper">
          <h2>I write in:</h2>
          <div class="languages">
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
import VueSVG from "../../assets/svg/VueSVG.svg";
import ReactSVG from "../../assets/svg/ReactSVG.svg";
import JavaScriptSVG from "../../assets/svg/javaScriptSVG.svg";
import TypeScriptSVG from "../../assets/svg/TypeScriptSVG.svg";
import PhpSVG from "../../assets/svg/PhpSVG.svg";

export default {
  components: { Card, VueSVG, ReactSVG, JavaScriptSVG, TypeScriptSVG, PhpSVG, Language },
};
</script>

<style scoped lang="scss">
#i-write-in {
  position: relative;
  z-index: 5;
  padding: 5vh 0;

  .wrapper {
    h2 {
      font-size: 5rem;
      margin-bottom: 3rem;
    }

    .languages {
      display: flex;
      flex-direction: column;
      gap: 2rem;
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

// @media (min-width: 576px) {
//     #i-write-in {
//         .wrapper {
//             h2 {
//                 // font-size: 6.25rem;
//             }
//         }
//     }
// }

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

// @media (min-width: 1200px) {
//     #i-write-in {
//         .wrapper {
//             h2 {
//                 // font-size: 6rem;
//             }
//         }
//     }
// }

// @media (min-width: 1400px) {
//     #i-write-in {
//         .wrapper {
//             h2 {
//                 // font-size: 5rem;
//             }
//         }
//     }
// }
</style>
