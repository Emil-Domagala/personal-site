<template>
  <div class="language">
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
export default {
  components: { ScriptSVG },
  props: {
    langName: {
      requied: true,
      type: String,
    },
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
  transition: transform 0.4s;

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
      // color: rgba(19 78 74);
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
