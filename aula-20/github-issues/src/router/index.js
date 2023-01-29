import Vue from 'vue'
import Router from 'vue-router'
import GitHubIssues from '@/components/GitHubIssues.vue'
import GitHubIssue from '@/components/GitHubIssue.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GitHubIssues',
      component: GitHubIssues
    },
    {
      path: '/:name/:repo/:issue',
      name: 'GitHubIssue',
      component: GitHubIssue
    }
  ]
})
