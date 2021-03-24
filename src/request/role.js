// import axios from './user';
import axios from '../utils/http';

//请求角色列表
export function getRoleList (){
    let res = axios.get('/rolelist')
    return res
}

//添加角色
export function addRole(data){
    let res = axios.post('/roleadd',data)
    return res
}

//修改角色
export function editRole(data){
    let res = axios.post('/roleedit',data)
    return res
}

//删除菜单
export function delRole(id){
    let res = axios.post('/roledelete',{id:id})
    return res
}