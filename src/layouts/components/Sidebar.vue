<template>
  <div>
    <el-card shadow="never">
      <el-menu :default-active="active" @select="onSelect">
        <el-menu-item v-for="item in constantRouterMap" :key="item.path" :index="item.path">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      constantRouterMap: [
        {
          path: '/',
          meta: {
              type: "user",
              icon: 'el-icon-star-off',
              title: '最新动态'
          }
        },
        {
            path: '/socials',
            meta: {
                type: "social",
                icon: 'el-icon-mobile-phone',
                title: '社交圈'
            }
        },
        {
            path: '/blogs',
            meta: {
                type: "blog",
                icon: 'el-icon-edit-outline',
                title: '博客列表'
            }
        },
        {
            path: '/projects',
            meta: {
                type: "project",
                icon: 'el-icon-service',
                title: '开源项目'
            }
        }
      ],
      active: "",
      parentUrl: "",
      menuList: [],
    };
  },
  mounted() {
    this.active = this.$route.path
  },
  methods: {
    onSelect(index) {
      this.$router.push(index);
    },
    openTokenDialog() {
      this.$refs.tokenDialog.open(() => {});
    },
    cancellation() {
      this.$store.dispatch("Cancellation");
    },
  },
};
</script>