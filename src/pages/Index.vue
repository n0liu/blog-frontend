<template>
  <Layout>
    <div style="min-height: 600px">
      <el-card shadow="never" style="min-height: 400px" v-if="$page.dynamic.edges[0].node.id">
          <div slot="header">
              <span>{{$page.dynamic.edges[0].node.title}}</span>
          </div>
          <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
              发布 {{$page.dynamic.edges[0].node.created_at | date}}
              <br> 更新 {{$page.dynamic.edges[0].node.updated_at | date}}
          </div>
          <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
              <pre style="font-family: '微软雅黑'"
                v-html="mdToHtml($page.dynamic.edges[0].node.updateRecord)"
              ></pre>
          </div>
           <div class="markdown-body"
               style="padding-top: 20px;">
            <p>
              <img :src="'http://49.233.213.46:1337' + $page.dynamic.edges[0].node.station.url"
                   alt="" width="100%"/>
            </p>
          </div>
      </el-card>
      <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!$page.dynamic.edges[0].node.id">
          <font style="font-size: 30px;color:#dddddd ">
              <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
          </font>
      </el-card>
    </div>
  </Layout>
</template>
<page-query>
  query{
    dynamic:allStrapiDynamic(sortBy:"updated_at"){
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
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
export default {
  name: 'news',
  metaInfo: {
    title: 'news'
  },
  data() {
    return {
      blog:''
    }
  },
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown);
    },
  },
}
</script>

<style>

</style>
