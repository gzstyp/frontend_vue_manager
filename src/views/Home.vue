<template>
    <div>
        <ul>
            <li @click="toPage('menu')">菜单</li>
            <li @click="toPage('user')">账号</li>
            <li @click="toPage('role')">角色</li>
        </ul>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  methods : {
      toPage(passName){
          this.$router.push({name:passName});
      }
  }
}
</script>
