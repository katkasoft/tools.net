Vue.createApp({
    data() {
        return {
            result: '0'
        }
    },
    methods: {
        add(char) {
            if (this.result == '0' || this.result == 'error') {
                this.result = char
            } else {
                this.result += char
            }
        },
        addChar(e) {
            var char = e.target.innerText
            if (char == '×') char = '*'
            if (char == '÷') char = '/'
            this.add(char)
        },
        addKey(key) {
            this.add(key)
        },
        count() {
            var result = eval(this.result)
            if (result == Infinity) result = 'error'
            this.result = result
        },
        backspace() {
            this.result = this.result.substring(0, this.result.length -1)
            if (this.result == '') this.result = '0'
        },
        clear() {
            this.result = '0'
        },
    },
    beforeMount() {
        document.addEventListener('keyup', (event) => {
            const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*', '(', ')', '.']
            if (event.key in keys) {
                this.addKey(event.key)
            } else if (event.key == 'Enter') {
                this.count()
            } else if (event.key == 'c' || event.key == 'Delete') {
                this.clear()
            }
        })
    }
}).mount('#app')