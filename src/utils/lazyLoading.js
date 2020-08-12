export default (component) => () => import(`@/views/${component}.vue`);//指定组件vue页面名称,处理成component组件,即把字符串转为component组件
