import Vue from 'vue'
import XEUtils from 'xe-utils'
import {
    VXETable,
    Table,
    Column,
    Header,
    Footer,
    Filter,
    Edit,
    Menu,
    Export,
    Keyboard,
    Validator,

    Grid,
    Toolbar,
    Pager,
    Checkbox,
    Radio,
    Input,
    Textarea,
    Button,
    Modal,
    Tooltip,
    Form,
    Select,
    Switch,
    List
} from 'vxe-table'
import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'

// 按需加载的方式默认是不带国际化的，需要自行导入
VXETable.setup({
    i18n: (key, value) => XEUtils.get(zhCNLocat, key)
})

// 先安装依赖模块
Vue.use(Icon)
Vue.use(Column)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Filter)
Vue.use(Edit)
Vue.use(Menu)
Vue.use(Export)
Vue.use(Keyboard)
Vue.use(Validator)

Vue.use(Tooltip)
Vue.use(Grid)
Vue.use(Toolbar)
Vue.use(Pager)
Vue.use(Form)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(Switch)
Vue.use(Input)
Vue.use(Select)
Vue.use(Button)
Vue.use(Modal)
Vue.use(List)

// 再安装核心库
Vue.use(Table)

// 给 vue 实例挂载全局窗口对象，属性名称随意定义，例如：$XModal
Vue.prototype.$modal = VXETable.modal