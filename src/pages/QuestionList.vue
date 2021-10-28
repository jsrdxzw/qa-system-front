<template>
  <q-page>
    <div class="q-gutter-y-md">
      <q-tabs v-model="tab" align="justify">
        <q-tab :key="tab.name" v-for="tab in tabs" :name="tab.name" :icon="tab.icon" :label="tab.label"></q-tab>
      </q-tabs>
      <div></div>
    </div>
    <div class="q-gutter-y-sm">
      <q-tab-panels
        v-model="tab"
        animated
        transition-prev="scale"
        transition-next="scale"
        class="text-center"
      >
        <q-tab-panel name="Finance" class="q-gutter-md">
          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption q-mt-sm text-center">
                  随便写点内容随便写点内容随便写点内容随便写点内容随便写点内容随便写点内容随便写点内容随便写点内容随便写点内容随便写点内容随便写点内容随便写点内容随便写点内容
                </div>
              </q-card-section>

              <!--              <q-card-section class="col-4 flex flex-center">-->
              <!--                <q-img-->
              <!--                  class="rounded-borders"-->
              <!--                  src="https://cdn.quasar.dev/img/parallax2.jpg"-->
              <!--                />-->
              <!--              </q-card-section>-->
            </q-card-section>

            <q-separator/>

            <q-card-actions>
              <q-btn flat round icon="event"/>
              <q-btn flat>
                7:30PM
              </q-btn>
              <q-btn flat color="primary" @click="OnLookArticle">
                查看
              </q-btn>
              <q-space/>
              <q-btn flat icon="thumb_up" align="between">赞</q-btn>
            </q-card-actions>
          </q-card>
        </q-tab-panel>

        <q-tab-panel name="Lottery">
          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-section class="col-5 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card-section>
          </q-card>
        </q-tab-panel>

        <q-tab-panel name="Property">
          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-section class="col-5 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card-section>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import router from '../router'

export default {
  name: 'QuestionList',
  setup () {
    const tabs = ref([
      {
        name: 'Finance',
        icon: 'mail',
        label: '财经'
      },
      {
        name: 'Lottery',
        icon: 'mail',
        label: '彩票'
      },
      {
        name: 'Property',
        icon: 'mail',
        label: '房产'
      },
      {
        name: 'Shares',
        icon: 'mail',
        label: '股票'
      },
      {
        name: 'Furnishing',
        icon: 'mail',
        label: '家居'
      },
      {
        name: 'Education',
        icon: 'mail',
        label: '教育'
      },
      {
        name: 'Technology',
        icon: 'mail',
        label: '科技'
      },
      {
        name: 'Sociology',
        icon: 'mail',
        label: '社会'
      },
      {
        name: 'Fashion',
        icon: 'mail',
        label: '时尚'
      },
      {
        name: 'Affairs',
        icon: 'mail',
        label: '时政'
      },
      {
        name: 'Sports',
        icon: 'mail',
        label: '体育'
      },
      {
        name: 'Constellation',
        icon: 'mail',
        label: '星座'
      },
      {
        name: 'Game',
        icon: 'mail',
        label: '游戏'
      },
      {
        name: 'Entertainment',
        icon: 'mail',
        label: '娱乐'
      }
    ])
    const tab = ref('Finance')
    return {
      tabs,
      tab,
      OnLookArticle () {
        router.push({ name: 'article' })
      }
    }
  }
}
</script>
