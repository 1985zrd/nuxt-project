<template>
  <div>
    <Search v-if="!showHeader"/>
    <v-header v-if="showHeader"></v-header>
    <v-label :list="categories" v-if="showTabel"></v-label>
    <nuxt />
  </div>
</template>

<script>
import Search from '@/components/search/Search.vue'
import Header from '@/components/Header.vue'
import Label from '@/components/Label.vue'
import { getCategorylist } from '@/api'
export default {
  components: {
    Search,
    'v-header': Header,
    'v-label': Label
  },
  computed: {
    categories: function () {
      return this.$store.state.categories
    },
    showHeader: function () {
      return this.$route.path !== '/search'
    },
    showTabel: function () {
      return this.$route.path !== '/user' && this.$route.path !== '/write' && this.$route.path !== '/search'
    }
  },
  mounted () {
    if (!this.categories.length) {
      this.getCategory()
    }
  },
  methods: {
    async getCategory () {
      const res = await getCategorylist()
      this.$store.commit('setCategory', res.data)
    }
  }
}
</script>
