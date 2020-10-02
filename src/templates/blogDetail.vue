<template>
  <Layout>
    <div style="min-height: 600px">
      <el-card shadow="never" style="min-height: 400px">
          <div slot="header">
              <span>{{$page.dynamic.title}}</span>
              <div style="text-align: right;float:right">
                <button type="button"
                        class="el-button el-button--text"
                        style="padding: 3px 0px;"
                        @click="$share()">
                  <i class="el-icon-share"></i>
                  <span>分享</span>
                </button>
                <button type="button"
                        class="el-button el-button--text"
                        style="padding: 3px 0px;">
                  <g-link to="/blogs">
                    <i class="el-icon-more-outline"></i>
                    <span>更多项目</span>
                  </g-link>
                </button>
              </div>
          </div>
          <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
              发布 {{$page.dynamic.created_at | date}}
              <br> 更新 {{$page.dynamic.updated_at | date}}
          </div>
          <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
              <pre style="font-family: '微软雅黑'"
                v-html="mdToHtml($page.dynamic.updateRecord)"
              ></pre>
          </div>
           <div class="markdown-body"
               style="padding-top: 20px;">
            <p>
              <img :src="'http://49.233.213.46:1337' + $page.dynamic.station.url"
                   alt="" width="100%"/>
            </p>
          </div>
      </el-card>
    </div>
  </Layout>
</template>
<page-query>
  query($id: ID!){
    dynamic:strapiDynamic(id:$id){
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
</page-query>
<script>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
export default {
  name: 'Blog-Detail',
  metaInfo: {
    title: "Blog-Detail",
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
