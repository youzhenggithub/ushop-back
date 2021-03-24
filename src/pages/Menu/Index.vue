<template>
 <div>
      <el-card>
           <!-- 新增按钮 -->
           <el-button type="primary" @click="showModel" icon="el-icon-circle-plus-outline">新增</el-button>
           <!-- 分割线 -->
           <el-divider></el-divider>
           <!-- List表格组件 -->
           <List :info="info" @setFormInfo='setFormInfo'/>
           <!-- model对话框 -->
           <Model :info="info" ref="model"/>
      </el-card>
 </div>
</template>

<script>
import List from './List';
import Model from './Model';
export default {
 data(){
 return{
      info:{
           //控制对话框显示和隐藏的
           isShow:false,
           // 控制对话框是编辑还是添加的
           isAdd:true
      }
 }
 },
 created(){},
 methods:{
      showModel(){
           this.info.isShow = !this.isShow
           this.info.isAdd = !this.isAdd
      },
      setFormInfo(obj){
           //把数据传递给model  通过利用ref调用model下的方法
           this.$refs.model.setFormInfo(obj)
      }
 },
 components:{
      List,Model,
 }
}

</script>
<style scoped>
</style>