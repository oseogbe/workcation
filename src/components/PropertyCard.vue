<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  imageUrl: String,
  beds: Number,
  baths: Number,
  pricePerWeek: Number,
  reviewCount: Number,
  rating: Number
})

const priceFormatted = computed(() => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return formatter.format(props.pricePerWeek)
})
</script>

<template>
  <div>
    <div class="sm:h-[280px] aspect-6x5 overflow-hidden rounded-lg">
      <img
        class="object-cover rounded-lg shadow-md transition ease-out hover:scale-125 duration-1000"
        :src="imageUrl"
        alt=""
      />
    </div>
    <div class="relative -mt-16 px-3">
      <div class="bg-white rounded-lg p-4 shadow-lg">
        <div class="flex items-center gap-x-2">
          <span
            class="inline-block px-2 py-1 bg-teal-200 text-teal-800 leading-none rounded-full font-semibold uppercase tracking-wide text-xs"
            >Plus</span
          >
          <div class="text-xs text-gray-600 font-semibold uppercase tracking-wide">
            {{ beds }} beds &bull; {{ baths }} baths
          </div>
        </div>
        <h4 class="mt-1 text-gray-900 font-medium text-lg">{{ title }}</h4>
        <div class="mt-1">
          <span class="text-gray-900">{{ priceFormatted }}</span>
          <span class="ml-1 text-sm text-gray-600">/wk</span>
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-600">
          <svg
            v-for="i in 5"
            :key="i"
            class="w-4 h-4 fill-current"
            :class="rating >= i ? 'text-teal-500' : 'text-gray-400'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            />
          </svg>
          <span class="ml-2">{{ reviewCount }} Reviews</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
