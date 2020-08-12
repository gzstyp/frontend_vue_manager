<template>
    <div class="container">
        <div class="warn">
            说好了,叫你不要到处乱逛,找不到路回家了吧
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>
    *{
        padding:0;
        margin:0;
        overflow:hidden;
        list-style:none;
        text-decoration:none;
        outline:none;
    }
    .container{
        width:100vw;
        height:100vh;
        background:radial-gradient(circle,#7bbfea,#33a3dc,#009ad6,#0696F5);
    }
    .warn{
        width:374px;
        height:40px;
        left:50%;
        top:50%;
        position:relative;
        transform:translate(-50%,-50%);
    }
</style>
