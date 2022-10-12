<template>
  <el-menu default-active="1" :default-openeds="['1', '2']" class="main-menu">
    <el-sub-menu index="1">
      <template #title>
        <span>配置文件</span>
      </template>
      <el-menu-item v-for="(e, index) in ConfigMenu" :key="'1-' + index + 'sub'" :index="'1-' + index">{{
        e.name
      }}</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <span>数据库</span>
      </template>
      <el-menu-item v-for="(e, index) in DatabaseMenu" :key="'1-' + index + 'sub'" :index="'1-' + index">{{
        e.name
      }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ConfigMenu as CM, DatabaseMenu as DBM } from "@/constant";

const ConfigMenu = CM;
const DatabaseMenu = DBM;
</script>

<style lang="scss" scoped>
.main-menu {
  height: 100%;
}
</style>
