const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/pages/404.jsx')
  });

  const allMarkdownQuery = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
    }
  `);
  const BlogPostTemplate = require.resolve('./src/templates/blog-post.jsx');

  const ProjectPostTemplate = require.resolve(
    './src/templates/project-post.jsx'
  );
  const PageTemplate = require.resolve('./src/templates/page.jsx');

  const markdownFiles = allMarkdownQuery.data.allMdx.edges;
  const posts = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes('/content/posts/')
  );
  const projects = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes('/content/projects/')
  );

  const pages = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes('/content/pages/')
  );
  // -----------------Create Blog Post--------------
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: BlogPostTemplate,
      context: {
        slug: node.fields.slug
      }
    });
  });
  // ---------------Create Project Post------------------
  projects.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: ProjectPostTemplate,
      context: {
        slug: node.fields.slug
      }
    });
  });
  // ---------------Create Page ------------------
  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: PageTemplate,
      context: {
        slug: node.fields.slug
      }
    });
  });
};
