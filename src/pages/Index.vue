<template>
  <q-page>
    <div class="q-pa-md">
      <question-form/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import QuestionForm from 'components/QuestionForm'

export default defineComponent({
  name: 'PageIndex',
  components: { QuestionForm },
  setup () {
    return {
      title: ''
    }
  }
})
</script>
