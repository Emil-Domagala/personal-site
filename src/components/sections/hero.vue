<template>
  <section id="hero" :style="`opacity:${1 - scrollPercentage / 80}`">
    <div class="container">
      <div class="top">
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1 }"
          :delay="1500"
          :duration="500"
          class="top-background"
          :style="`transform: translateY(-${scrollPercentage / 3}vw);`"
        ></div>
        <img
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1 }"
          :delay="100"
          :duration="1500"
          src="../../assets/img/myPhoto.png"
          alt="my photo"
          class="top-image"
        />
        <h1
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1 }"
          :delay="100"
          :duration="1500"
          class="top-name"
        >
          Emil Domagała
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="2200"
          :duration="500"
          class="top-profesion"
        >
          Front-end Developer
        </p>
      </div>
    </div>
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0 }"
      :delay="2200"
      :duration="500"
      class="bgc-h1"
      :style="`fesnsform: translateY(-${scrollPercentage / 10}vw);`"
    ></div>
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0 }"
      :delay="2500"
      :duration="500"
      class="mouse"
    >
      <div class="mouse-body">
        <div class="mouse-dot"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    scrollPercentage: {
      type: Number,
      requied: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#hero {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: var(--main);
}

.top {
  padding-top: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  container-type: inline-size;

  &-image {
    display: block;
    position: absolute;
    bottom: 0;
    object-fit: cover;
    filter: brightness(80%);
    height: 220px;
    margin: 0 auto;
  }

  &-background {
    bottom: 0;
    width: 100%;
    height: 200px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: var(--main-hover);
  }

  &-profesion {
    display: block;
    position: absolute;
    font-size: 20px;
    color: #94a3b8;
    bottom: -13vw;
  }
}

.mouse {
  position: absolute;
  bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  &-body {
    position: relative;
    display: flex;
    justify-content: center;
    height: 55px;
    width: 34px;
    border-radius: 100px;
    border: 2px solid var(--primary);

    .mouse-dot {
      position: absolute;
      bottom: 10px;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background-color: var(--primary);
      animation: mouse-move 2s infinite;
    }
  }
}

@keyframes mouse-move {
  0% {
    bottom: 10px;
    transform: scale(1);
  }

  70% {
    transform: scale(1);
    bottom: 35px;
  }

  99% {
    transform: scale(0);
    bottom: 35px;
  }
  100% {
    bottom: 10px;
    transform: scale(0);
  }
}

@media (min-width: 450px) {
  .top {
    &-image {
      height: 245px;
    }

    &-background {
      height: 220px;
    }

    &-profesion {
      font-size: 22px;
      bottom: -12.5vw;
    }
  }
}

@media (min-width: 576px) {
  .top {
    padding-top: 200px;

    &-image {
      height: 270px;
    }

    &-background {
      height: 240px;
    }

    &-profesion {
      font-size: 24px;
      bottom: -10vw;
    }
  }
}

@media (min-width: 768px) {
  .top {
    &-image {
      height: 300px;
    }

    &-background {
      height: 260px;
    }

    &-profesion {
      font-size: 26px;
      bottom: -9.5vw;
    }
  }
}

@media (min-width: 992px) {
  .top {
    padding-top: 220px;

    &-image {
      height: 330px;
    }

    &-background {
      height: 280px;
    }

    &-profesion {
      font-size: 28px;
      bottom: -9vw;
    }
  }
}

@media (min-width: 1200px) {
  .top {
    padding-top: 200px;

    &-image {
      height: 350px;
    }

    &-background {
      height: 300px;
    }

    &-profesion {
      font-size: 30px;
      bottom: -8.5vw;
    }
  }
}

@media (min-width: 1400px) {
  .top {
    padding-top: 180px;

    &-image {
      height: 370px;
    }

    &-background {
      height: 320px;
    }
  }
}
</style>
