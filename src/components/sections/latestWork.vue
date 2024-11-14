<template>
    <section id="latest-work">
        <div class="container">
            <div class="projects">
                <a href="/" class="project-block">
                    <div class="project-block--img"></div>
                    <div class="project-block--slide">
                        <h3>Coś</h3>
                        <p>Description</p>
                    </div>
                </a>
            </div>

        </div>

    </section>
</template>

<style lang='scss' scoped>
#latest-work {
    position: relative;
    z-index: 5;
    padding: 5vh 0;
}

.projects {
    position: relative;




}

.project-block {
    position: absolute;
    display: block;
    width: 100%;
    height: 350px;
    background-color: red;

    &--slide {
        position: absolute;
        bottom: 0;
        padding: 2rem;
        background-color: blue;
        transform: translateY(100%);
        transition: transform 0.4s;
    }
}

.project-block:hover {
    background-color: green;

    .project-block--slide {
        transform: translateY(0px);
    }
}
</style>