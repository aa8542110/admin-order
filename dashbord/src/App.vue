<template>
  <div id="app">
     <el-menu :default-active=active
           class="el-menu-demo"
           mode="horizontal"
           background-color="#000000"
           text-color="#E1E1E1"
           active-text-color="#FFFFFF"
           router>
   <el-menu-item class="logo" index="/">ShopTime</el-menu-item>
    <el-menu-item index="home">HOME</el-menu-item>
    <el-menu-item index="ORDERS">ORDERS</el-menu-item>
    <el-menu-item index="PRODUCT">PRODUCT</el-menu-item>
  </el-menu>
 <div class="main">
<router-view></router-view>
 </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 'home',
    };
  },
};
</script>

<style>
.logo{
  width:180px;
  font-size:18pt;
  color: white !important;
  text-align:center;
  float: left;
  justify-content:center;

}
.el-menu-demo{
  padding-left:15px;
}
.main{
  background: #F2F2F2;
  margin: 0 10% 0 10%
}
</style>
