<script setup>
import { ref } from 'vue'

import SiteHeader from '@/components/SiteHeader.vue'
import SearchFilters from '@/components/SearchFilters.vue'
import PropertyCard from '@/components/PropertyCard.vue'

const properties = ref([
  {
    title: 'Modern home in city center',
    imageUrl: './img/home1.jpeg',
    beds: 4,
    baths: 5,
    pricePerWeek: 2500,
    reviewCount: 28,
    rating: 4
  },
  {
    title: 'Quiet living outside the city',
    imageUrl: './img/home2.jpg',
    beds: 6,
    baths: 6,
    pricePerWeek: 4200,
    reviewCount: 34,
    rating: 5
  },
  {
    title: 'Renovated apartment uptown',
    imageUrl: './img/home3.jpg',
    beds: 3,
    baths: 2,
    pricePerWeek: 3000,
    reviewCount: 45,
    rating: 3
  },
  {
    title: 'Modern home in city center',
    imageUrl: './img/home4.jpg',
    beds: 4,
    baths: 3,
    pricePerWeek: 2400,
    reviewCount: 12,
    rating: 4
  },
  {
    title: 'Modern home in city center',
    imageUrl: './img/home5.jpg',
    beds: 3,
    baths: 2,
    pricePerWeek: 2100,
    reviewCount: 18,
    rating: 4
  },
  {
    title: 'Modern home in city center',
    imageUrl: './img/home6.jpg',
    beds: 3,
    baths: 2,
    pricePerWeek: 1200,
    reviewCount: 6,
    rating: 4
  }
])
</script>

<template>
  <site-header class="xl:flex-shrink-0" />
  <div class="xl:flex-1 xl:flex xl:overflow-y-hidden">
    <search-filters />
    <main class="px-4 py-6 sm:pr-0 xl:overflow-y-auto">
      <div>
        <h3 class="text-gray-900 text-xl">Los Angeles</h3>
        <p class="mt-3 text-gray-600">
          Live like the stars in these luxurious Southern California estates.
        </p>
        <div class="mt-6 sm:flex sm:gap-x-4 sm:overflow-x-auto">
          <div
            v-for="(property, i) in properties"
            :key="i"
            :class="[
              'sm:max-w-sm',
              'sm:flex-shrink-0',
              'mb-10',
              { 'pr-4': i == properties.length - 1 }
            ]"
          >
            <property-card v-bind="property" />
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h3 class="text-gray-900 text-xl">Atlanta</h3>
        <p class="mt-3 text-gray-600">
          Feel at home in our state-of-the-art Georgian lofts and penthouses.
        </p>
        <div class="mt-6 sm:flex sm:gap-x-4 sm:overflow-x-auto">
          <div
            v-for="(property, i) in properties"
            :key="i"
            :class="[
              'sm:max-w-sm',
              'sm:flex-shrink-0',
              'mb-10',
              { 'pr-4': i == properties.length - 1 }
            ]"
          >
            <property-card v-bind="property" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
