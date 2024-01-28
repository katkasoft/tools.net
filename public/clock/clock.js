Vue.createApp({
    data() {
        return {
            time: ""
        }
    },
    beforeMount() {
        setInterval(() => {
            const d = new Date()
            let minutes = d.getMinutes().toString()
            if (minutes.length == 1) {
                minutes = '0' + minutes
            }
            let seconds = d.getSeconds().toString()
            if (seconds.length == 1) {
                seconds = '0' + seconds
            }
            this.time = d.getHours() + ':' + minutes + ':' + seconds
        }, 1000)
    }
}).mount('#app')