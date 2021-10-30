<template>
    <div>
        <div v-if="list.length>0">
            <div v-for="(item,index) in list" :key="index">
                <div class="every-todo" @mousemove="show">
                    <input type="checkbox" v-model="item.isComplete">
                    {{item.content}}
                    <el-button size="mini" type="danger" class="delete" icon="el-icon-delete" circle @click="del(index)"></el-button>
                </div>
            </div>
        </div>
        <div v-else>
            暂无任务
        </div>
    </div>
</template>

<script>
import {computed, defineComponent} from 'vue'
import {useStore} from 'vuex'
export default defineComponent({
    name: 'NavMain',
    components: {

    },
    setup() {
        let store = useStore()
        let list = computed(() => {
            return store.state.list
        })
        // 实现删除功能
        let del = (index) => {
            store.commit('delTodo', index)
        }
        
        return {
            store,
            list,
            del
        }
    }
    
})
</script>

<style lang="less" scoped>
.every-todo{
    border-bottom: 1px dashed #ddd;
    padding: 10px;
    text-align: left;
    .delete {
    float: right;
    display: none;
}
}
.every-todo:hover{
    .delete{
        display: block;
    }
}

</style>
