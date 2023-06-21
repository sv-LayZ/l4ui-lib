import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('counter', () => {
  const menuList = reactive({ data: new Object });
  function erase() {
    menuList.data = new Object;
  }

  return { menuList, erase }
})
