<template>
    <section class='hero'>
        <div class="container">
            <div class="top">
                <div class="top-background" :style='`transform: translateY(-${scrollPercentage*1.5}px);`'></div>
                <img src="../../assets/img/myPhoto.png" alt="my photo" class='top-image'>

                <div class="top-text">
                    <h1 class='top-name'>Emil Domagała</h1>
                    <p class='profesion'>Front-end Developer</p>
                </div>
            </div>


        </div>
        <div class="top-color-h1" :style='`transform: translateY(-${scrollPercentage/2.5}px);`'></div>
        <div class="mouse">
            <!-- <MouseAnimationSVG /> -->
            <div class="mouse-body">
                <div class="mouse-dot"></div>
            </div>

        </div>
    </section>
</template>

<script>
// import MouseAnimationSVG from '../../../assets/svg/mouseAnimationSVG.svg';
export default {

    props: {
        scrollPercentage: {
            type: Number,
            requied: true
        }
    },
    watch: {
        scrollPercentage() {
            console.log(this.scrollPercentage);
        }
    }
}

</script>

<style lang='scss' scoped>
.hero {
    position: fixed;
    top: 0;
    width: 100%;

    height: 100vh;
    z-index: 2;
    background-color: var(--main);

}

.top {
    padding-top: 220px;
    position: relative;
    width: 100%;
    z-index: 3;


    &-image {
        display: block;
        object-fit: cover;
        filter: brightness(80%);
        height: 220px;
        margin: 0 auto;


    }

    &-text {
        position: absolute;
        bottom: -4.6rem;
        text-align: center;
        width: 100%;
        line-height: 1;
        z-index: 2;

        .profesion {
            // margin-top: -1rem;
            font-size: 2.2rem;
        }
    }


    

    &-background {
        position: absolute;
        bottom: 0;
        width: 100%;
        // max-width: 600px;
        height: 200px;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        background-color: var(--main-hover);

    }
}

.top-color-h1 {
    position: fixed;
    width: 100%;
    height: 4rem;
    // top: 50px;
    margin-bottom: 5rem;
    // margin-top: -20px;
    background-color: var(--secondary-light-2);
    mix-blend-mode: darken;
    z-index: 3;
    
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
        .mouse-dot{
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
    0%{
        bottom: 10px;
        transform: scale(1);
    }
    70%{
        transform: scale(1);
        bottom: 35px;
    }
    100%{
        transform: scale(0);
        bottom: 35px;
    }
    
}
</style>