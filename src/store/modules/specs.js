import {getSpecsList, specsTotal} from '../../request/specs';
export default{
    namespaced:true,
    state(){
        return {
            //存储规格列表 
            specsList:[],
            //规格总数
            specsTotal:0
        }
    },
    mutations:{
        //初始化规格列表
        specsInit(state,data){
            state.specsList = data
        },
        //修改规格总数
        setSpecsTotal(state,data){
            state.specsTotal = data
        }
    },
    actions:{
        //请求规格数据
        getSpecsListAction({commit,dispatch},params){
            //axios请求后台数据
            getSpecsList(params).then(res=>{
                commit('specsInit',res.list)
                dispatch("getSpecsTotalAction")
            })
        },
        //请求后台总数
        getSpecsTotalAction({commit}){
            //axios请求后台总数
            specsTotal().then(res=>{
                // console.log('总数',res.list[0].total);
                commit('setSpecsTotal',res.list[0].total)
            })
        }
    }
}