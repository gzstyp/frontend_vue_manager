<template>
    <div>
        <el-form :model="loginForm" label-width="80px">
            <el-form-item label="登录账号">
                <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="登录密码">
                <el-input v-model="loginForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit()">登录认证</el-button>
                <el-button @click="resetForm()">取消重置</el-button>
            </el-form-item>
            <el-form-item>{{message}}</el-form-item>
        </el-form>
    </div>
</template>
<script>
    import MenuUtils from '@/utils/MenuUtils'; //此js主要用于处理成component组件,即把字符串转为component组件
    var routers = [];
    export default {
        name: "Login",
        data(){
            return {
                loginForm : {
                    username : 'admin',
                    password : '123456'
                },
                message : ''
            }
        },
        methods : {
            onSubmit(){
                let {code,msg,data} = this.execute(this.loginForm.username,this.loginForm.password);
                if(code === 200){
                    this.message = '';
                    this.handleLogin(data);
                }else{
                    this.message = msg;
                }
            },
            resetForm(){
                this.loginForm.username = '';
                this.loginForm.password = '';
            },
            handleLogin(data){
                console.info(data);
                sessionStorage.setItem('user',JSON.stringify(data));//这里是存入本地菜单信息
                MenuUtils(routers,data);//组装路由导航菜单,处理成component组件,即把字符串转为component组件
                this.$router.addRoutes(routers);//添加到动态路由
                this.$router.push({name:'home'});//区分大小写,这个值是在 src\router\index.js 定义的,其实也可以用 path 跳转的,即 this.$router.push({ path: '/main' });
            },
            execute : function(username,password){
                if(username === 'admin' && password === '123456'){
                    const appData = require('../json/data.json');
                    const menus = appData.menu;
                    var result = {
                        code : 200,
                        msg : '登录成功',
                        data : menus
                    }
                    return result;
                }else{
                    var result = {
                        code : 199,
                        msg : '用户名或密码错误'
                    }
                    return result;
                }
            }
        }
    }
</script>
<style scoped>
</style>
