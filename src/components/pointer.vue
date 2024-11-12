<template>
    <div class='pointer'
        :style='`background: radial-gradient(600px at ${posX}px ${posY}px, rgba(29, 78, 216, 0.15), transparent 100%);`'>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posX: 0,
            posY: 0,
        }
    },
    created() {
        window.addEventListener('mousemove', this.getCursor);
    },
    unmounted() {
        window.removeEventListener('mousemove', this.getCursor);
    },
    methods: {
        getCursor(e) {
            this.posX = e.clientX;
            this.posY = e.clientY;
            
        }
    }

}
</script>

<style lang='scss' scoped>
.pointer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
</style>