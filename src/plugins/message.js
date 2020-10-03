import { Message } from 'element-ui' 

Vue.prototype.$success = (text) => {
    Message({
        message: text,
        type: 'success'
    })
}

Vue.prototype.$warning = (text) => {
    Message({
        message: text,
        type: 'warning'
    })
}

Vue.prototype.$info = (text) => {
    Message({
        message: text,
        type: 'info'
    })
}

Vue.prototype.$error = (text) => {
    Message.error(text)
}