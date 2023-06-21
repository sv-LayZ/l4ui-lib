<!--
  User can set
    --primary-color
    dark: 1 or 0
-->
<script setup>
import { reactive, ref } from 'vue';

const menu = reactive({
  primaryColor: "#100",
  secondColor: "#F00",
  textColor: "#F0F",
  title: "Armurie",
  banner: "@/assets/banner.png",
  btn: [{ icon: "🚀", text: "Adder", suffix: "$500 000" }]
})

console.log(app)
</script>

<template>
  <div class="item">
    <img src="@/assets/banner.png" class="banner">
    <h1 class="title">{{ menu.title }}</h1>
    <div class="buttons-list" v-for="item in menu.btn">
      <div class="button">
        <div class="prefix">
          <a class="icon">{{ item.icon }}</a>
          <span>{{ item.text }}</span>
        </div>
        <div class="prefix">
          <span>{{ item.suffix }}</span>
          <i v-if="item.type === 2">&lt;{{ item.index }}&gt;</i>
          <i v-else>&gt;</i>
        </div>
      </div>
    </div>
  </div>
</template>