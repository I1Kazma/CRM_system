<template>
  <ul class="sidenav app-sidenav" :class="{open: modelValue}">
    <router-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      exact
    >
      <li
        @click="$router.push(link.url)"
        :class="{
         'active': $route.path === link.url
        }"
      >
      <a
          class="waves-effect waves-orange pointer"
      >
        {{ link.title }}
      </a>
    </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  data: () => ({
    links: [
      { title: 'Счет', url: '/', exact: true },
      { title: 'История', url: '/history' },
      { title: 'Планирование', url: '/planning' },
      { title: 'Новая запись', url: '/record' },
      { title: 'Категории', url: '/categories' }
    ]
  })
}
</script>



