<template>
  <q-layout class="bg-image" v-cloak>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card class="login-form" v-bind:style="$q.platform.is.mobile?{'width': '60%'}:{'width':'20%'}">
          <q-card-section>
            <q-avatar size="74px" class="absolute-center shadow-10">
              <img src="profile.svg">
            </q-avatar>
          </q-card-section>
          <q-card-section class="q-mt-md">
            <div class="text-h6 text-center">
              <q-input filled dense v-model="username" type="text" placeholder="大爷怎么称呼">
                <template v-slot:prepend>
                  <q-icon name="account_circle"/>
                </template>
              </q-input>
            </div>
            <q-input dense filled v-model="password" :type="isPwd ? 'password' : 'text'" placeholder="暗号"
                     class="margin">
              <template v-slot:prepend>
                <q-icon name="lock"/>
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn padding="8px 16px" push label="登录" class="text-capitalize" color="primary" @click="onLogin"></q-btn>
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'
import { api } from 'boot/axios'
import router from '../router'

export default defineComponent({
  name: 'Login',

  setup () {
    const username = ref('')
    const password = ref('')
    return {
      username,
      password,
      isPwd: ref('password'),
      onLogin () {
        api.get('/abc', {
          params: {
            username,
            password
          }
        }).then(res => {
        })
          .catch(error => console.error(error))
          .finally(() => {
            router.push({ name: 'questionList' })
          })
      }
    }
  }

})
</script>

<style>
.bg-image {
  background-image: url("~assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

[v-cloak] {
  display: none !important;
}

.margin {
  margin-top: 8px;
}
</style>
