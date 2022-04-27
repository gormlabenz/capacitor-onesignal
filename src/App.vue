<script setup>
import { OneSignal } from '@awesome-cordova-plugins/onesignal'
document.addEventListener('deviceready', () => OneSignalInit(), false)

const messages = ref([])

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
    messages.value.push(
      'notificationOpenedCallback: ' + JSON.stringify(jsonData)
    )
  })

  // iOS - Prompts the user for notification permissions.
  //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
  OneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
    console.log('User accepted notifications: ' + accepted)
    messages.value.push('User accepted notifications: ' + accepted)
  })
  OneSignal.endInit()
}
</script>
<template>
  <main>
    <div class="m-6">
      <p v-for="message in messages" :key="message">{{ message }}</p>
    </div>
  </main>
</template>
