<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-input standout="bg-teal text-white" v-model="title" label="Custom standout" style="width: 100%"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  setup () {
    return {
      title: ''
    }
  }
})
</script>
