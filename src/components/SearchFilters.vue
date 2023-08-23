<script setup>
import { ref } from 'vue'

const searchIcon = ref('/icons/magnifying-glass.svg')
const filterIcon = ref('/icons/funnel.svg')

const isOpen = ref(true)
const toggleFiltersMenu = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <section class="bg-gray-800 xl:max-w-[296px]">
    <div class="flex justify-between px-4 py-3 xl:hidden">
      <div class="relative w-full max-w-xs">
        <div class="flex items-center absolute inset-y-0 left-0 pl-3">
          <img class="w-5 h-5" :src="searchIcon" alt="" />
        </div>
        <input
          class="w-full bg-gray-900 text-gray-300 text-sm pl-10 pr-3 py-2.5 rounded-lg focus:outline-0"
          placeholder="Search by keywords"
        />
      </div>
      <button
        type="button"
        @click="toggleFiltersMenu"
        class="inline-flex items-center bg-gray-700 rounded-lg shadow h-10 pl-3 pr-6 ml-3"
      >
        <img :src="filterIcon" class="w-4 h-4" alt="" />
        <span class="ml-1 text-gray-300 font-medium">Filters</span>
      </button>
    </div>
    <form v-show="isOpen" class="xl:h-full xl:w-full xl:flex xl:flex-col xl:justify-between">
      <div class="lg:flex xl:block xl:overflow-y-auto">
        <fieldset
          class="p-4 border-t border-gray-900 sm:flex lg:w-2/5 lg:max-w-[380px] lg:flex-wrap xl:w-full xl:border-t-0"
        >
          <div class="flex gap-x-4 sm:w-1/2 lg:w-full">
            <label class="block w-1/2">
              <span class="text-sm text-gray-500 font-medium">Bedrooms</span>
              <select class="form-select block w-full mt-1 rounded-lg text-gray-300 shadow">
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </label>
            <label class="block w-1/2">
              <span class="text-sm text-gray-500 font-medium">Bathrooms</span>
              <select class="form-select block w-full mt-1 rounded-lg text-gray-300 shadow">
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </label>
          </div>
          <div class="mt-6 sm:ml-4 sm:mt-0 sm:w-1/2 lg:w-full lg:ml-0 lg:mt-6">
            <label>
              <span class="text-sm text-gray-500 font-medium">Price Range</span>
              <select class="form-select block w-full mt-1 rounded-lg text-gray-300 shadow">
                <option>Up to $2,000 /wk</option>
                <option>Up to $5,000 /wk</option>
                <option>Up to $10,000 /wk</option>
                <option>Over $10,000 /wk</option>
              </select>
            </label>
          </div>
        </fieldset>
        <fieldset class="p-4 border-t border-gray-900 lg:w-1/5 lg:border-l xl:w-full">
          <span class="block text-sm text-gray-500 font-medium">Property Type</span>
          <div class="sm:flex sm:-mx-2 lg:block lg:mx-0">
            <label class="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:px-0">
              <input type="radio" class="form-radio" name="propertyType" value="house" />
              <span class="ml-2 text-gray-300">House</span>
            </label>
            <label class="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:px-0">
              <input type="radio" class="form-radio" name="propertyType" value="apartment" />
              <span class="ml-2 text-gray-300">Apartment</span>
            </label>
            <label class="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:px-0">
              <input type="radio" class="form-radio" name="propertyType" value="loft" />
              <span class="ml-2 text-gray-300">Loft</span>
            </label>
            <label class="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:px-0">
              <input type="radio" class="form-radio" name="propertyType" value="townhouse" />
              <span class="ml-2 text-gray-300">Townhouse</span>
            </label>
          </div>
        </fieldset>
        <fieldset class="p-4 border-t border-gray-900 lg:w-2/5 lg:border-l xl:w-full">
          <span class="block text-sm text-gray-500 font-medium">Amenities</span>
          <div class="sm:flex sm:flex-wrap sm:-mx-2 sm:gap-y-2">
            <label class="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input type="checkbox" class="form-checkbox" name="balcony" />
              <span class="ml-2 text-gray-300">Balcony</span>
            </label>
            <label class="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input type="checkbox" class="form-checkbox" name="pool" />
              <span class="ml-2 text-gray-300">Pool</span>
            </label>
            <label class="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input type="checkbox" class="form-checkbox" name="beach" />
              <span class="ml-2 text-gray-300">Beach</span>
            </label>
            <label class="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input type="checkbox" class="form-checkbox" name="petFriendly" />
              <span class="ml-2 text-gray-300">Pet friendly</span>
            </label>
            <label class="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input type="checkbox" class="form-checkbox" name="kidFriendly" />
              <span class="ml-2 text-gray-300">Kid friendly</span>
            </label>
            <label class="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input type="checkbox" class="form-checkbox" name="parking" />
              <span class="ml-2 text-gray-300">Parking</span>
            </label>
            <label class="flex items-center mt-3 sm:w-1/2 sm:px-2 lg:w-1/2 xl:w-full">
              <input type="checkbox" class="form-checkbox" name="airConditioning" />
              <span class="ml-2 text-gray-300">Air conditioning</span>
            </label>
          </div>
        </fieldset>
      </div>
      <div class="bg-gray-900 p-4 sm:text-right">
        <button
          class="bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg w-full sm:w-auto sm:inline-block xl:block xl:w-full"
        >
          Update results
        </button>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped></style>
