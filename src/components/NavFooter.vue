<template>
    已完成{{completed}}/全部{{all}}
</template>

<script>
import {computed, defineComponent} from 'vue'
import {useStore} from 'vuex'
export default defineComponent({
    name: 'NavFooter',
    components: {

    },
    props:{
        
    },
    setup() {
        let store = useStore()
        let list = computed(() => {
            return store.state.list
        })
        let completed = computed(() => {
            let num = 0
            store.state.list.map((item) => {
                if(item.isComplete === true){
                    num ++
                }
            })
            return num
        })
        let all = computed(() => {
            return store.state.list.length
        })
        return {
            store,
            list,
            all,
            completed
        }
    },
})
</script>