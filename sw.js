self.addEventListener('install', function(event) {
    self.skipWaiting();
    console.log('Installed', event);
});

self.addEventListener('activate', function(event) {
    console.log('Activated', event);
});

self.addEventListener('push', function(event) {
    console.log('Push message', event);

    var title = 'Push message';

    event.waitUntil(
        self.registration.showNotification(title, {
            body: 'The Message',
            icon: './images/spider-logo.png',
            tag: 'my-tag'
        }));
});

self.addEventListener('notificationclick', function(event) {
    console.log('Notification click: tag', event.notification.tag);
    // Android doesn't close the notification when you click it
    // See http://crbug.com/463146
    event.notification.close();

});