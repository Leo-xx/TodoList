<template>
<div class="demo-shadow">
    <nav-header/>
    <br/>
    <nav-main/>
    <br/>
    <nav-footer/>
</div>
    
</template>

<script>
import {defineComponent} from 'vue'
import NavHeader from '../components/NavHeader.vue'
import NavMain from '../components/NavMain.vue'
import NavFooter from '../components/NavFooter.vue'
export default defineComponent({
    name: 'About',
    components: {
        NavHeader,
        NavMain,
        NavFooter
    },
    setup() {
        
    },
})
</script>

<style scoped>
.demo-shadow {
  padding: 10px;
  
  border: 1px solid var(--el-border-color-base);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)
}
</style>