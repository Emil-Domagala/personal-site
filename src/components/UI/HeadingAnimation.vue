<template>
  <span
    v-for="word in headingText"
    class="word"
    :key="`${prefKey}_${word.wordID}`">
    <span
      v-for="letter in word.word"
      class="letter"
      :style="{
        ...charStyle,
        transitionDelay: `${(letter.letterID * 5) / 100}s`,
      }"
      :key="`${prefKey}_${letter.letterID}`"
      >{{ letter.letter }}</span
    >&nbsp;
  </span>
</template>

<script>
import { createIsVisible } from '../utils/isVisibleUtility';

export default {
  props: {
    parentId: { type: String, required: true },
    textProp: { type: String, required: true },
    prefKey: { type: String, required: true },
    marginVisible: { type: Number, required: true },
  },
  data() {
    return {
      headingText: null,
      charStyle: {
        opacity: 0,
        transform: 'translateX(-100%)',
      },
      isParentVisible: false,
    };
  },
  created() {
    this.changeTextFunction();
  },
  mounted() {
    this.parentIsVisible = createIsVisible({
      elementId: this.parentId,
      margin: this.marginVisible,
      callback: (isVisible) => (this.isParentVisible = isVisible),
    });
    window.addEventListener('scroll', this.parentIsVisible);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.parentIsVisible);
  },
  watch: {
    isParentVisible(visible) {
      if (visible) {
        this.charStyle = {
          opacity: 1,
          transform: 'translateX(0%)',
        };
      }
    },
  },
  methods: {
    changeTextFunction() {
      let wordId = 0;
      let letterId = 0;

      const changedText = this.textProp.split(' ').map((word) => ({
        wordID: `wordID_${wordId++}`,
        word: [...word].map((letter) => {
          return { letterID: letterId++, letter };
        }),
      }));

      this.headingText = changedText;
    },
  },
};
</script>

<style scoped lang="scss">
span {
  text-wrap: balance;
  display: inline-block;
}
.letter {
  transform: translateX(-100%);
  opacity: 0;
  transition: opacity 0.4s, transform 0.4s;
}
</style>
