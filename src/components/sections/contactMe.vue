<template>
  <footer id="contact-me">
    <div class="container">
      <div class="bgc">
        <h2 class="contact-me-h2">Contact Me</h2>
      </div>
      <div class="bgc-h2"></div>

      <div class="link-wrapper">
        <a href="mailto:emil.domagalaa@gmail.com">emil.domagalaa@gmail.com</a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  position: relative;
  background-color: var(--main);
  z-index: 5;
  padding-bottom: 150px;
  .bgc {
    display: flex;
    // align-items: center;
    justify-content: center;
    position: relative;
    height: 150px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: var(--main-hover);
    container-type: inline-size;
    transition: transform 0.4s;
  }

  .bgc-h2 {
    transition: transform 0.4s;
  }

  .link-wrapper {
    display: flex;
    justify-content: center;
  }

  a {
    // margin-top: 20px;
    border-radius: 20rem;
    border: 1px solid var(--primary-light);
    padding: 0.5rem 2.5rem;
    font-size: 2rem;
    color: var(--primary-light);
    text-decoration: none;
    transition: transform 0.4s, color 0.4s, border 0.4s;
  }

  a:hover {
    color: var(--secondary-light);
    border-color: var(--secondary-light);
    transform: scale(1.025);
  }

  .bgc:hover {
    transform: scale(1.05);
  }
  .bgc:hover + .bgc-h2 {
    transform: translateY(15%);
  }
}

@media (min-width: 992px) {
  footer {
    .bgc {
      height: 200px;
    }
    a {
      margin-top: 50px;
    }
  }
}
</style>
