<template>
  <a
    class="work_link"
    :href="work.link"
    :style="workStyle"
    target="_blank"
  >
   <p v-if="getCat(work) !== ''" class="cat">{{ getCat(work) }}</p>
    <div class="hover_active">
      <p>CL:{{ work.client.value }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'WorkListItem',
  props: {
    work: {
      type: Object,
      required: true
    }
  },
  computed: {
    workStyle() {
      return `background-image:url(${this.work.thumbnail_url})`
    }
  },
  methods: {
    getCat(work){
      const notDisplayingListNames = ['KAI-YOU Marketing', 'MILL', 'KAI-YOU Medium Tech.']
      return work.list_names
        .map(l => l.name)
        .filter(name => !notDisplayingListNames.includes(name))
        .join('　')
    }
  }
}
</script>
