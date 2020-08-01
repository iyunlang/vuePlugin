dialog.install = function(Vue, options) {
    // 1.添加全局方法或属性
    Vue.showDialog = function() {
        console.log('显示弹出层')
    }

    // 2.添加全局资源
    Vue.directive('dialog-close',{
        bind (el, binding, vnode, oldVnode) {
            console.log('关掉弹出层')
        }
    })

    // 3.注入组件选项
    Vue.mixin({
        created: function() {
            console.log('创建时')
        }
    })

    // 4.添加实例方法
    Vue.prototype.$closeDialog = function() {
        console.log('关闭弹出层2')
    }
}