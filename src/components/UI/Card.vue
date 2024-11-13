<template>
    <div class="card" >
        <slot></slot>
    </div>
</template>

<script>
// import { useElementVisibility } from '@vueuse/core';
// import { ref } from 'vue'

// const target = ref(null)
// const targetIsVisible = useElementVisibility(target)
</script>

<style scoped lang='scss'>

.card{
    padding: 20px;
    background-color: var(--main-hover);
}
</style>