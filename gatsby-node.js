const { graphql } = require("gatsby");
 var path =require('path')
exports.createPages= async ({actions, graphql})=>{
const {createPage} = actions;
const result = await graphql(`
{
    allContentfulBlogPost {
        nodes {
          createdAt
          title
          updatedAt
          content {
            json
          }
        }
      }
}
`)
console.log(JSON.stringify(result))
    result.data.allContentfulBlogPost.nodes.forEach((obj)=>{
        createPage({
            path: `/products/${obj.title}`,
            component: path.resolve('./src/template/products.tsx'),
            context:{
                itemDetails: obj
            }
        })
    })
}
