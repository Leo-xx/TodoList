<template>
    <div class="header">
    <div class="left-header">
        <el-input class="input" v-model="todo" placeholder="请输入任务内容" @keydown.enter="enter"/>
    </div>
        <div class="right-header">
            <el-button class="btn" type="info" @click="enter" round>提交</el-button>
        </div>
    </div>

</template>

<script>
import {defineComponent, ref} from 'vue'
import {useStore} from 'vuex'
export default defineComponent({
    name: 'NavHeader',
    components: {

    },
    setup() {
        let store = useStore()
        let todo = ref('')
        
        let enter = () => {
            let flag = true
            // 首先判断输入是否为空
            if(todo.value === ''){
                flag = false
                alert('内容为空！')
            }
            // 判断任务是否已存在
            
            store.state.list.map((item) => {
                if(item.content === todo.value){
                    flag = false
                    alert('任务已存在')
                }
                
            })
            if(flag){
                    store.commit('addTodo',{
                        content:todo.value,
                        isComplete:false
                    })
                }
            
            // 清空输入框
            todo.value = ''
        }
        return{ 
            todo, 
            enter 
        }
    },
})
</script>

<style scoped>
.header {
    height: 41px;
}
.left-header{
    width: 80%;
    height: 41px;
    float: left;
}
.right-header{
    width: 20%;
    height: 41px;
    float: left;
}
.input{
    float: left;
}
.btn {
    float: left;
    margin-left: 5px;
}
</style>