<template>
  <div class="q-pa-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input filled v-model="label" label="标题" hint="填写标题" lazy-rules
               :rules="[ val => val && val.length > 0 || '请输入标题']" clearable/>
      <q-input filled type="textarea" v-model="content" label="内容" hint="填写内容" lazy-rules
               :rules="[ val => val && val.length > 0 || '请输入内容']" clearable/>
      <q-toggle v-model="anonymous" label="是否匿名"/>
      <div>
        <q-btn label="提交" type="submit" color="primary"/>
        <q-btn label="重置" type="reset" color="primary" flat class="q-ml-sm"/>
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { api } from 'boot/axios'

export default {
  name: 'QuestionForm',
  setup () {
    const $q = useQuasar()
    const label = ref(null)
    const content = ref(null)
    const anonymous = ref(false)
    return {
      label,
      content,
      anonymous,
      onSubmit () {
        if (anonymous.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: '你会以真实名称发表'
          })
        } else {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: '你会匿名发表'
          })
        }
        api.post('/api/post/create', {
          authorId: 1,
          authorName: 'yyds',
          postTitle: label.value,
          content: content.value
        }).then(res => {
          console.log(res)
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: '提交成功'
          })
        })
      },
      onReset () {
        label.value = null
        content.value = null
        anonymous.value = false
      }
    }
  }
}
</script>

<style scoped>

</style>
