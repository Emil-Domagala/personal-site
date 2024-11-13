<template>
    <section id='iWriteIn'>
        <div class="container">
            <Card>
                <div class="wrapper">
                    <h2>I write in:</h2>
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
#iWriteIn {
    position: relative;
    z-index: 5;
    padding: 5vh 0;

    .wrapper {
        h2 {
            font-size: 5rem;
        }
    }
}

@media (min-width: 450px) {
    #iWriteIn {
            .wrapper {
                h2 {
                    font-size: 6rem;
                }
            }
        }
}

@media (min-width: 576px) {
     #iWriteIn {
            .wrapper {
                h2 {
                    // font-size: 6.25rem;
                }
            }
        }
}

@media (min-width: 768px) {
     #iWriteIn {
            .wrapper {
                display: flex;
                flex-direction: row;
                h2 {
                    font-size: 5rem;
                }
            }
        }
}

@media (min-width: 992px) {
     #iWriteIn {
            .wrapper {
                h2 {
                    font-size: 5rem;
                }
            }
        }
}

@media (min-width: 1200px) {
     #iWriteIn {
            .wrapper {
                h2 {
                    font-size: 5rem;
                }
            }
        }
}

@media (min-width: 1400px) {
     #iWriteIn {
            .wrapper {
                h2 {
                    font-size: 5rem;
                }
            }
        }
}
</style>