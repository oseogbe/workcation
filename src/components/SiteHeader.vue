<script setup>
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const logo = ref('/img/logo.svg')
const searchIcon = ref('/icons/magnifying-glass.svg')
const menuIcon = ref('/icons/hamburger.svg')
const closeIcon = ref('/icons/x-mark.svg')

const isOpen = ref(false)
const toggle = () => (isOpen.value = !isOpen.value)

const dropdownOpen = ref(false)
const toggleDropdown = () => (dropdownOpen.value = !dropdownOpen.value)

const closeDropdown = () => (dropdownOpen.value = false)
</script>

<template>
  <header class="bg-gray-900 sm:flex sm:justify-between xl:bg-white">
    <div
      class="flex justify-between items-center px-4 py-3 xl:w-[296px] xl:bg-gray-900 xl:justify-center xl:py-6"
    >
      <div class="sm:-mt-2 xl:-mt-3 xl:-ml-1">
        <img :src="logo" class="h-8 w-auto" alt="workcation-logo" />
      </div>
      <!-- the dynamic class was added so vue can re-render the component and we can see the isOpen value toggled -->
      <!-- <div class="flex" :class="{ antialiased: isOpen }"> -->
      <div class="flex sm:hidden" :class="{ antialiased: isOpen }">
        <button @click="toggle" type="button" class="px-1">
          <img v-if="!isOpen" class="h-5 w-5" :src="menuIcon" alt="" />
          <img v-else class="h-6 w-6" :src="closeIcon" alt="" />
        </button>
      </div>
    </div>
    <nav
      :class="[
        'sm:flex',
        'sm:items-center',
        'xl:flex-1',
        'xl:justify-between',
        { hidden: !isOpen, block: isOpen }
      ]"
    >
      <div class="xl:px-4">
        <div class="hidden xl:block xl:relative">
          <div class="flex items-center absolute inset-y-0 left-0 pl-3">
            <img class="w-5 h-5" :src="searchIcon" alt="" />
          </div>
          <input
            class="form-input w-full bg-gray-200 text-gray-900 text-sm pl-10 pr-3 py-2.5 rounded-lg"
            placeholder="Search by keywords"
          />
        </div>
      </div>
      <div class="sm:flex sm:items-center">
        <div
          class="flex flex-col gap-y-3 sm:gap-x-6 sm:items-center p-5 sm:py-4 border-b border-gray-800 sm:flex-row sm:border-b-0"
        >
          <a
            class="font-medium text-gray-300 hover:text-gray-400 sm:text-sm xl:text-gray-900"
            href="#"
            >List your property</a
          >
          <a
            class="font-medium text-gray-300 hover:text-gray-400 sm:text-sm xl:text-gray-900"
            href="#"
            >Trips</a
          >
          <a
            class="font-medium text-gray-300 hover:text-gray-400 sm:text-sm xl:text-gray-900"
            href="#"
            >Messages</a
          >
        </div>
        <div class="p-5 sm:py-4 relative">
          <div class="flex items-center" @click="toggleDropdown">
            <img
              class="w-10 h-10 sm:h-8 sm:w-8 object-cover rounded-full border-2 border-gray-600 xl:border-gray-300 sm:cursor-pointer"
              src="/img/users/90.jpg"
              alt=""
            />
            <span class="ml-3 font-medium text-gray-200 sm:hidden">Isla Connor</span>
          </div>
          <div
            v-on-click-outside="closeDropdown"
            class="mt-5 flex flex-col gap-y-3 sm:absolute sm:right-0 sm:bg-white sm:w-52 sm:rounded-lg sm:mr-5 sm:gap-y-0 sm:shadow-xl sm:z-50 sm:overflow-hidden"
            :class="dropdownOpen ? 'sm:flex' : 'sm:hidden'"
          >
            <a
              class="font-medium text-gray-400 hover:text-white sm:px-4 sm:py-3 sm:text-gray-800 sm:text-sm sm:hover:bg-indigo-500"
              href="#"
              >Account Settings</a
            >
            <a
              class="font-medium text-gray-400 hover:text-white sm:px-4 sm:py-3 sm:text-gray-800 sm:text-sm sm:hover:bg-indigo-500"
              href="#"
              >Support</a
            >
            <a
              class="font-medium text-gray-400 hover:text-white sm:px-4 sm:py-3 sm:text-gray-800 sm:text-sm sm:hover:bg-indigo-500"
              href="#"
              >Sign out</a
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
