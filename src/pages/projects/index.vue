<template>
  <Layout>
    <div style="min-height: 600px;" class>
      <div>
        <div class="el-card is-hover-shadow"
             style="margin-bottom: 20px;"
             v-for="(repo, index) in $page.repos.edges"
             :key="index">
          <div class="el-card__header">
            <div>
              <div class="el-row">
                <div class="el-col el-col-16">
                  <span @click="$router.push(`/projectdetail/${repo.node.id}`)">
                    <a style="text-decoration: none; cursor: pointer;">
                      <i class="el-icon-service"></i>
                      &nbsp;&nbsp; {{repo.node.name}}
                    </a>
                  </span>
                </div>
                <div class="el-col el-col-8">
                  <div style="text-align: right;">
                    <button type="button"
                            class="el-button el-button--text"
                            style="padding: 3px 0px;">
                      <a :href="repo.node.html_url"
                          @click.stop>
                        <i class="el-icon-back"></i>
                        <span>前往GitHub</span>
                      </a>
                    </button>
                    <button type="button"
                            class="el-button el-button--text"
                            style="padding: 3px 0px;"
                            @click="$share()">
                      <i class="el-icon-share" ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="el-card__body">
            <div style="font-size: 0.9rem; line-height: 1.5; color: rgb(96, 108, 113);">最近更新 {{repo.node.updated_at | date}}</div>
            <!-- <div style="font-size: 1.1rem; line-height: 1.5; color: rgb(48, 49, 51); padding: 10px 0px 0px;"
                  v-html="mdToHtml(repo.node.content)"></div> -->
            <div style="font-size: 1.1rem; color: rgb(48, 49, 51); padding: 10px 0px 0px;">
              <div class="el-row">
                <div class="el-col el-col-16"
                      style="padding-top: 5px;">
                  <i class="el-icon-star-off el-tooltip"
                      aria-describedby="el-tooltip-3097"
                      tabindex="0"
                      style="margin: 0px 5px 0px 0px;"></i>
                  {{repo.node.star}}
                  <i class="el-icon-view el-tooltip"
                      aria-describedby="el-tooltip-1258"
                      tabindex="0"
                      style="margin: 0px 5px 0px 15px;"></i>
                  {{repo.node.watcher}}
                  <i class="el-icon-bell el-tooltip"
                      aria-describedby="el-tooltip-4677"
                      tabindex="0"
                      style="margin: 0px 5px 0px 15px;"></i>
                  {{repo.node.fork}}
                </div>
                <div class="el-col el-col-8"
                      style="text-align: right;">
                  <span class="el-tag el-tag--danger el-tag--small"
                        v-for="(tag, index) in repo.node.tags"
                        style="margin-left:5px"
                        :key="index">
                        <template>
                          {{tag.title}}
                        </template>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pager :info="$page.repos.pageInfo" />
      <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!$page.repos.edges||$page.repos.edges.length==0">
        <font style="font-size: 30px;color:#dddddd ">
            <b>还没有开源项目 (╯°Д°)╯︵ ┻━┻</b>
        </font>
        </el-card>
    </div>
  </Layout>
</template>
<page-query>
query($page: Int) {
  repos:allStrapiProject(perPage: 5, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        name
        content
        created_at
        updated_at
        star
        fork
        watcher
        html_url
        tags{
          id
          title
        }
      }
    }
  }
}
</page-query>
<script>
import { Pager } from "gridsome";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
export default {
  components: {
    Pager
  },
  data () {
    return {
    }
  },
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown);
    },
  }
}
</script>
<style lang="less" scoped>

</style>
