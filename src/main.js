
import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router/router'
import { musicList } from './musicList'
import { dataList } from './dataListSample'
import { employees} from './employee'
import {datas} from './anotherSampleOfData'
import './globalCss.css'
import store from './store/store'

// createApp(App).mount('#app')

// App.use(router);
const musicSongList = ref(musicList)

const app = createApp(App)
app.use(router)
app.mount('#app')

app.provide('musicList', musicSongList)

const sampleDataList = ref(dataList) // for provide and inject data
app.provide('sampleData', sampleDataList) // this one too provide and inject

const employee = ref(employees)
app.provide('employee', employee)

const anotherSampleOfData = ref(datas)
app.provide('datas', anotherSampleOfData)

app.use(store)