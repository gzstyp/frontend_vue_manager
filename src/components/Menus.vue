<template>
    <div>
        <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#459df5">
            <template v-for="(item,index) in menus">
                <!--判断是否含有二级页面1开始-->
                <template v-if="item.children">
                    <el-submenu :index="item.kid">
                        <!--父节点-->
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{item.label}}</span>
                        </template>
                        <template v-for="(subItem,subIndex) in item.children">
                            <!--判断是否没有三级页面2开始-->
                            <template v-if="subItem.children">
                                <el-submenu :index="subItem.kid">
                                    <!--父节点-->
                                    <template slot="title">{{subItem.label}}</template>
                                    <template v-for="(sub,indx) in subItem.children">
                                        <el-menu-item :index="sub.kid" @click="toPage(sub.kid,sub.path,sub.name)">
                                            <span slot="title">{{sub.label}}</span>
                                        </el-menu-item>
                                    </template>
                                </el-submenu>
                            </template>
                            <!--判断是否没有三级页面2结束-->
                            <template v-if="!subItem.children">
                                <el-menu-item :index="subItem.kid" @click="toPage(subItem.kid,subItem.path,subItem.name)">{{subItem.label}}</el-menu-item>
                            </template>
                        </template>
                    </el-submenu>
                </template>
                <!--判断是否含有二级页面1结束-->
                <template v-if="!item.children">
                    <el-menu-item :index="item.kid" @click="toPage(item.kid,item.path,item.name)">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.label}}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>
<script>
    export default {
        name: "Menus",
        methods : {
            toPage(kid,path,name){
                this.$router.push({name:name});
            }
        },
        data(){
            return {
                menus : [
                    {
                        kid : '0000000000640033000000000ea4c107',
                        label : '系统管理',
                        hidden : true,
                        icon :'el-icon-setting',
                        children : [
                            {
                                kid : '0000000004dfa8b9000000002f4e715c',
                                label : '角色管理',
                                hidden : true,
                                icon :'',
                                path : '/role',
                                name : 'role'
                            },
                            {
                                kid : '0000000007c4dd77ffffffffe68454c6',
                                label : '菜单管理',
                                hidden : true,
                                icon :'',
                                path : '/menu',
                                name : 'menu'
                            },
                            {
                                kid : '00000000456de029ffffffffc68a479c',
                                label : '账号管理',
                                hidden : true,
                                icon :'',
                                children : [
                                    {
                                        kid : '00000000454d3232ffffffffd0b0c4dd',
                                        label : '系统账号',
                                        hidden : true,
                                        icon :'',
                                        path : '/user',
                                        name : 'user'
                                    },
                                    {
                                        kid : '0000000043a8763d000000001f8b393f',
                                        label : '会员用户',
                                        hidden : true,
                                        icon :'',
                                        path : '/vip',
                                        name : 'vip'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        kid : '000000003bb712cd00000000022090e8',
                        label : '个人信息',
                        hidden : true,
                        icon :'el-icon-s-custom',
                        path : '/persion',
                        name : 'persion'
                    },
                    {
                        kid : '00000000338a27a7ffffffff905a8f9e',
                        label : '属性配置',
                        hidden : true,
                        icon :'el-icon-orange',
                        path : '/setting',
                        name : 'setting'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
</style>
