<template>
  <Layout>
     <div style="min-height: 600px">
        <div>
            <el-card shadow="hover" v-for="(item,index) in $page.blogs.edges" :key="'p'+index" style="margin-bottom: 20px" v-if="!item.node.hide">
                <div slot="header">
                    <el-row>
                        <el-col :span="16">
                            <span>
                                <a style="text-decoration:none;cursor:pointer" @click="$router.push(`/blogdetail/${item.node.id}`)">
                                    <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; {{item.node.title}}
                                </a>
                            </span>
                        </el-col>
                        <!-- <el-col :span="8">
                            <div style="text-align: right;">
                                <el-button @click="$share('/user/blog/details/'+item.node.id)" style="padding: 3px 0" type="text" icon="el-icon-share"></el-button>
                                <el-button @click="editBlog(index)" style="padding: 3px 0" type="text" icon="el-icon-edit"></el-button>
                                <el-button @click="deleteBlog(index)" style="padding: 3px 0" type="text" icon="el-icon-delete"></el-button>
                            </div>
                        </el-col> -->
                    </el-row>
                </div>
                <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    最近更新 {{item.node.updated_at | date}}
                </div>
                <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
                    {{item.node.updateRecord}}
                </div>
            </el-card>
            <div style="text-align: center">
                <!-- <el-pagination @current-change="list" background layout="prev, pager, next" :current-page.sync="query.page" :page-size="query.pageSize"
                    :total="query.pageNumber*query.pageSize">
                </el-pagination> -->
                <!-- Pager -->
                <Pager :info="$page.blogs.pageInfo"/>
            </div>
        </div>

        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!$page.blogs.edges||$page.blogs.edges.length==0">
            <font style="font-size: 30px;color:#dddddd ">
                <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
            </font>
        </el-card>
    </div>
  </Layout>
</template>
<page-query>
  query($page: Int){
    blogs:allStrapiDynamic(perPage:5,page:$page) @paginate{
      pageInfo {
        totalPages
        currentPage
      }
      edges{
        node{
          id
          title
          created_at
          updated_at
          updateRecord
          station{
            url
          }
        }
      }
    }
  }
</page-query>
<script>
import { Pager } from "gridsome";
export default {
  components: {
    Pager
  },
  name: "Blog",
  metaInfo: {
    title: "Blog",
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>

</style>
