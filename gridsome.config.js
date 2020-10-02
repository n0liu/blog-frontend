// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '多多博客',
  templates:{
    StrapiFollower:[
      {
        path:'/follower/:id',
        component:'./src/templates/Follower.vue'
      },
    ],
    StrapiFollowings:[
      {
        path:'/followers/:id',
        component:'./src/templates/Followers.vue'
      }
    ],
    StrapiDynamic:[
      {
        path:'/blogdetail/:id',
        component:'./src/templates/blogDetail.vue'
      }
    ],
    StrapiProject:[
      {
        path:'/projectdetail/:id',
        component:'./src/templates/projectDetail.vue'
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://49.233.213.46:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['follower','followings','dynamic','project'],
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ]
}
