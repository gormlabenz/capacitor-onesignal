import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import { OneSignal } from '@ionic-native/onesignal'

import './styles/main.css'

document.addEventListener('deviceready', () => OneSignalInit(), false)

function OneSignalInit() {
  // Uncomment to set OneSignal device logging to VERBOSE
  OneSignal.setLogLevel({ logLevel: 6, visualLevel: 0 })

  // NOTE: Update the setAppId value below with your OneSignal AppId.
  OneSignal.startInit(import.meta.env.VITE_ONESIGNAL_APPID)
  OneSignal.iOSSettings({
    kOSSettingsKeyAutoPrompt: true,
    kOSSettingsKeyInAppLaunchURL: false,
  })
  OneSignal.handleNotificationOpened((jsonData) => {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData))
  })

  // iOS - Prompts the user for notification permissions.
  //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
  OneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
    console.log('User accepted notifications: ' + accepted)
  })
  OneSignal.endInit()
}

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.mount('#app')
