
import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router/router'
import { musicList } from './musicList'
import { dataList } from './dataListSample'
import { employees, myGirls } from './employee.js'
import { datas } from './anotherSampleOfData'
import './style.css'
import store from './store/store'
import {
    Quasar,
    Dialog
} from 'quasar'
import 'quasar/dist/quasar.css'
import DialogQusar from './quasarUi/DialogQusar.vue'




// createApp(App).mount('#app')

// App.use(router);
const musicSongList = ref(musicList)
const sampleDataList = ref(dataList) // for provide and inject data
const employers = ref(employees)
const anotherSampleOfData = ref(datas)


const app = createApp(App)
app.use(router)

app.use(Quasar, {
    plugins: {
        Dialog
    }
})

app.component('DialogQusar', DialogQusar)

app.provide('musicList', musicSongList)

app.provide('sampleData', sampleDataList) // this one too provide and inject

app.provide('employee', employers)

app.provide('datas', anotherSampleOfData)

app.provide('girl', myGirls)

app.use(store)
app.mount('#app')

