<template>
  <div class="text-center q-pa-md">
    {{ title }}
  </div>
  <div class="text-center q-pa-md">
    {{ content }}
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'Article',
  setup () {
    // const router = useRouter()
    const route = useRoute()
    const postNo = route.params.id
    const title = ref('')
    const content = ref('')
    api.get(`/api/post/${postNo}`)
      .then(res => {
        const data = res.data.data
        title.value = data.postTitle
        content.value = data.content
      })
    return {
      title,
      content
    }
  }
})
</script>

<style scoped>

</style>
