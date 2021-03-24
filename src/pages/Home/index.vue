<template>
 <div class="container">
     <Eline/>
     <Epie/>
 </div>
</template>

<script>
import Eline from './Eline'
import Epie from './Epie'
export default {
 data(){
 return{}
 },
 created(){},
 methods:{},
 components:{Eline,Epie}
}

</script>
<style scoped>
.container{
    display: flex;
    justify-content: space-between;
}
</style>