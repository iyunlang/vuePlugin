require(['vue','dialog'],function(Vue,Dialog) {
    Vue.use(Dialog)
    var vm = new Vue({
        el: '#app',
        data: {
            
        },
        methods: {
            openDialog: function () {
                console.log('弹出层')
            }
        }
    })
})
