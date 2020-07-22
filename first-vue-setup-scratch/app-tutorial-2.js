new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertHandler: function () {
                alert('message button was clicked on')
            },
            keyDownHandler: function (e) {
                console.log(e)
                this.value = e.target.value
            },
            onEnterHandler: function (e) {
                console.log(e.target.value)
                this.value = e.target.value
            }
        }
    
    });