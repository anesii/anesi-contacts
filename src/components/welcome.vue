<template>
    <div>
        <div>
            <div class="img" :style="{backgroundImage: 'url('+image+')'}"></div>
        </div>
        <div class="text">
            Your Contact List is Empty!
        </div>
    </div>
</template>

<script>
export default {
    computed:{
            image(){
               return this.$store.state.picture
            }
    },
    
}
</script>

<style scoped>
    .img{
        height: 80vh;
        background-size: contain;
        background-position: center, center;
        background-repeat: no-repeat;
        position: relative;
        right:100px;
    }
    .text{
        /* text-align: center; */
        font-family: cursive;
        bottom:44rem;
        left: 43rem;
        position: absolute;
        font-size: 20px;
        font-weight: bold;
        opacity: 0.5;
    }
</style>
