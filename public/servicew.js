
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function (reg) {
            console.log("service worker registered");
        }).catch(function (err) {
            console.log("error: ", err)
        });
}