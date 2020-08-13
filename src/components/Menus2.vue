<template>
    <div>
        <el-menu
            default-active="2"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <template v-for="(item,index) in menus">
                <!--判断是否含有二级页面1开始-->
                <template v-if="item.children">
                    <el-submenu :index="item.kid">
                        <!--父节点-->
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.label}}</span>
                        </template>
                        <template v-for="(subItem,subIndex) in item.children">
                            <!--判断是否没有三级页面2开始-->
                            <template v-if="subItem.children">
                                <el-submenu :index="subItem.kid">
                                    <!--父节点-->
                                    <template slot="title">{{subItem.label}}</template>
                                    <template v-for="(sub,indx) in subItem.children">
                                        <el-menu-item :index="sub.kid">
                                            <span slot="title">{{sub.label}}</span>
                                        </el-menu-item>
                                    </template>
                                </el-submenu>
                            </template>
                            <!--判断是否没有三级页面2结束-->
                            <template v-if="!subItem.children">
                                <el-menu-item :index="subItem.kid">{{subItem.label}}</el-menu-item>
                            </template>
                        </template>
                    </el-submenu>
                </template>
                <!--判断是否含有二级页面1结束-->
                <template v-if="!item.children">
                    <el-menu-item :index="item.kid">
                        <i class="el-icon-setting"></i>
                        <span slot="title">{{item.label}}</span>
                    </el-menu-item>
                </template>
            </template>

            <!--
            <el-submenu index="11111">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>系统管理</span>
                </template>
                <el-menu-item index="222222">角色管理</el-menu-item>
                <el-menu-item index="33333">菜单管理</el-menu-item>
                <el-submenu index="44444">
                    <template slot="title">账号管理</template>
                    <el-menu-item index="55555" :route="{name:'user'}">系统账号</el-menu-item>
                    <el-menu-item index="66666">
                        <span slot="title">会员用户</span>
                    </el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">个人信息</span>
            </el-menu-item>
            <el-menu-item index="77777">
                <i class="el-icon-setting"></i>
                <span slot="title">属性配置</span>
            </el-menu-item>

            -->

        </el-menu>
    </div>
</template>
<script>
    export default {
        name: "Menus2",
        methods : {
            handleOpen(key,keyPath) {
                console.log(key,keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        data(){
            return {
                menus : [
                    {
                        kid : '0000000000640033000000000ea4c107',
                        label : '系统管理',
                        children : [
                            {
                                kid : '0000000004dfa8b9000000002f4e715c',
                                label : '角色管理',
                                path : '/role',
                                name : 'role'
                            },
                            {
                                kid : '0000000007c4dd77ffffffffe68454c6',
                                label : '菜单管理',
                                path : '/menu',
                                name : 'menu'
                            },
                            {
                                kid : '00000000456de029ffffffffc68a479c',
                                label : '账号管理',
                                children : [
                                    {
                                        kid : '00000000454d3232ffffffffd0b0c4dd',
                                        label : '系统账号',
                                        path : '/user',
                                        name : 'user'
                                    },
                                    {
                                        kid : '0000000043a8763d000000001f8b393f',
                                        label : '会员用户',
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
                        path : '/persion',
                        name : 'persion'
                    },
                    {
                        kid : '00000000338a27a7ffffffff905a8f9e',
                        label : '属性配置',
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
