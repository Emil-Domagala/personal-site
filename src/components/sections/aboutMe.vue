<template>
    <section>
        <div class="container">
            <Card>
                <div class="main-text">
                    Hi, I'm Emil, a front-end developer based in Poznań.
                </div>
            </Card>
        </div>
    </section>
</template>

<script>
import Card from '../UI/Card.vue';
export default {
    components: { Card }
}
</script>

<style scoped lang='scss'>
section{
    position: relative;
    margin-top: 100vh;
    padding-top: 100px;
    height: 100vh;
    background-color: var(--main);
    z-index: 5;
}
</style>