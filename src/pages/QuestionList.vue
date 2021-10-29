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
        <q-tab-panel name="All" class="q-gutter-md">
          <q-card v-for="content in contents" :key="content.id" class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-h5 q-mt-sm q-mb-xs hidden-text">{{ content.postTitle }} -- 【{{ content.tag }}】</div>
                <div class="text-caption q-mt-sm text-center hidden-text">
                  {{ content.subTitle }}
                </div>
              </q-card-section>
            </q-card-section>

            <q-separator/>
            <q-card-section class="q-pt-xs text-teal">
              阿萨撒上
            </q-card-section>
            <q-separator/>

            <q-card-actions>
              <q-btn flat round icon="event"/>
              <q-btn flat>
                {{ formatDate(content.createdAt) }}
              </q-btn>
              <q-btn flat color="primary" @click="() => OnLookArticle(content.postNo)">
                查看
              </q-btn>
              <q-space/>
              <span>{{content.likesCount}}赞</span>
            </q-card-actions>
          </q-card>
        </q-tab-panel>
        <q-tab-panel name="Finance" class="q-gutter-md">
          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-h5 q-mt-sm q-mb-xs">{{ title }}</div>
                <div class="text-caption q-mt-sm text-center">
                  {{ content }}
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
import { ref, watch } from 'vue'
import { api } from 'boot/axios'
import router from '../router'

export default {
  name: 'QuestionList',
  setup () {
    const originTabs = [
      {
        name: 'All',
        icon: 'public',
        label: '全部'
      },
      {
        name: 'Finance',
        icon: 'credit_card',
        label: '财经'
      },
      {
        name: 'Lottery',
        icon: 'flight_takeoff',
        label: '彩票'
      },
      {
        name: 'Property',
        icon: 'maps_home_work',
        label: '房产'
      },
      {
        name: 'Shares',
        icon: 'inventory_2',
        label: '股票'
      },
      {
        name: 'Furnishing',
        icon: 'chair',
        label: '家居'
      },
      {
        name: 'Education',
        icon: 'school',
        label: '教育'
      },
      {
        name: 'Technology',
        icon: 'military_tech',
        label: '科技'
      },
      {
        name: 'Sociology',
        icon: 'people',
        label: '社会'
      },
      {
        name: 'Fashion',
        icon: 'checkroom',
        label: '时尚'
      },
      {
        name: 'Affairs',
        icon: 'traffic',
        label: '时政'
      },
      {
        name: 'Sports',
        icon: 'sports_soccer',
        label: '体育'
      },
      {
        name: 'Constellation',
        icon: 'star',
        label: '星座'
      },
      {
        name: 'Game',
        icon: 'sports_esports',
        label: '游戏'
      },
      {
        name: 'Entertainment',
        icon: 'smart_display',
        label: '娱乐'
      }
    ]
    const tabs = ref(originTabs)
    const tab = ref('All')
    const category = ref('分类')
    const contents = ref([])
    const fetchData = (tag) => {
      const data = originTabs.find(it => it.name === tag)
      let params = {}
      if (data && data.label !== 'All') {
        params = {
          tag: data.label
        }
      }
      api.get('/api/post/list', params)
        .then(res => {
          if (res.data && res.data.data) {
            contents.value = res.data.data
          }
        })
    }
    fetchData(null)
    watch(tab, () => {
      fetchData(tab.value)
    })
    return {
      tabs,
      tab,
      contents,
      category,
      OnLookArticle (postNo) {
        router.push({ path: `/article/${postNo}` })
      },
      formatDate (time) {
        const date = new Date(time)
        const year = date.getFullYear()
        /* 在日期格式中，月份是从0开始的，因此要加0
         * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
         * */
        const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        // 拼接
        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
      }
    }
  }
}
</script>
<style scoped lang="scss">
.hidden-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
