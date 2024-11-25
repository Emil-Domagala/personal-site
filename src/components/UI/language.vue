<template>
  <div class="language" :style="`opacity:${opacity};`" :id="langName">
    <div class="language-logo">
      <ScriptSVG />
    </div>
    <div class="language-name">
      <p>{{ langName }}</p>
    </div>
  </div>
</template>

<script>
import ScriptSVG from "../../assets/svg/ScriptySVG.svg";
import { createIsVisible } from "../utils/isVisibleUtility";

export default {
  components: { ScriptSVG },
  props: {
    langName: {
      requied: true,
      type: String,
    },
  },
  data() {
    return {
      opacity: 0,
      isLangVisible: false,
      // langName: null,
    };
  },
  watch: {
    isLangVisible() {
      if (this.isLangVisible) {
        this.opacity = 1;
      }
    },
  },
  mounted() {
    this.langIsVisible = createIsVisible({
      elementId: this.langName,
      margin: 50,
      callback: (isVisible) => (this.isLangVisible = isVisible),
    });
    window.addEventListener("scroll", this.langIsVisible);
  },
};
</script>

<style lang="scss" scoped>
.language {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--main);
  padding: 20px 25px;
  transition: transform 0.4s, opacity 2s;

  &-logo {
    width: 4rem;
    height: 4rem;
    padding: 0.5rem;
    border: 2px solid var(--primary-light);
    border-radius: 0.6rem;
    margin-right: 3rem;
  }

  p {
    font-size: 2.2rem;
    color: var(--primary-light);
    transition: color 0.4s;
  }

  &:hover {
    transform: translateX(-10px);

    p {
      color: var(--secondary-light-2);
    }
  }
}

@media (min-width: 576px) {
  .language {
    &:hover {
      transform: translateX(-20px);
    }
  }
}

@media (min-width: 992px) {
  .language {
    &-logo {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 0.8rem;
    }
    p {
      font-size: 2.5rem;
    }
  }
}
</style>
