import {AsyncStorage} from 'react-native'
import {Notifications, Permissions} from 'expo'

const UDACICARD_NOTIFICATION_KEY = 'Udacicard:notification'

export function clearLocalNotification() {
  return AsyncStorage.removeItem(UDACICARD_NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createLocalNotification() {
  return {
    title: 'Take your quiz on Udacicard',
    body: "👋 don't forget to take quiz for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(UDACICARD_NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              const schedulingOptions = {
                time: tomorrow,
                repeat: 'day',
              }

              Notifications.scheduleLocalNotificationAsync(
                createLocalNotification(),
                schedulingOptions
              )

              AsyncStorage.setItem(UDACICARD_NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
