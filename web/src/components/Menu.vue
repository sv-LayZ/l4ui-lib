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
  description: "L4UI Lib is a performant and user-friendly library designed specifically for quickly creating user interfaces with CFX.RE API. This library allows you to develop interactive and visually appealing interfaces using common web languages such as HTML, CSS, and JavaScript.",
  banner: "@/assets/banner.png",
  btn: [{ type: 1, icon: "🚀", text: "Adder", suffix: "$500 000" }]
})

for (let index = 0; index < 20; index++) {
  menu.btn.push({ type: 1, icon: "🚀", text: "Adder", suffix: "$500 000" })
}

</script>

<template>
  <div class="item">

    <div class="header">
      <img src="@/assets/banner.png" class="banner">
      <h1 class="title">{{ menu.title }}</h1>
    </div>
    <p class="description" v-if="menu.description">{{ menu.description }}}</p>

    <div class="buttons-list">
      <div class="button" v-for="item in menu.btn">
        <div class="prefix">
          <p class="icon" v-if="item.icon">{{ item.icon }}</p>
          <span>{{ item.text }}</span>
        </div>
        <div class="prefix">
          <span>{{ item.suffix }}</span>
          <p v-if="item.type === 2">&lt;{{ item.index }}&gt;</p>
          <p v-else>&gt;</p>
        </div>
      </div>
    </div>

  </div>
</template>