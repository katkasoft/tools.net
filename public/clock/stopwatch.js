Vue.createApp({
    data() {
        return {
            time: 0,
            btntext: "Start"
        }
    },
    methods: {
        start() {
            if (this.btntext == 'Start') {
                this.btntext = 'Stop'
                setInterval(() => {
                    this.time++
                }, 1000)
            }
        }
    }
}).mount('#app')