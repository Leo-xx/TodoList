<template>
<div class="main">
  <router-view></router-view>

</div>
</template>

<script>

export default {
  name: "App",
  components: {
   
  },
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
}
.main{
  width: 500px;
  text-align: center;
  margin: 20px auto;
}
</style>
