export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5bc3f6018c13095a9f4d7c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6nxq1zw7',
                  apiId: 'd8a3d504-e726-444f-9b76-6bfaaedc306d'
                },
                {
                  buildHookId: '5f5bc3f658f4330bf9dcf4c3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-t3pxnkbt',
                  apiId: 'fdbde61d-17f5-4421-ba9e-cfd562f8c06e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vkastanenka/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-t3pxnkbt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
