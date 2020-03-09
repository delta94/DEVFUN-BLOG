const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const paginate = async ({
  graphql,
  actions,
  collection,
  pathPrefix,
  component,
}) => {
  const { errors, data } = await graphql(
    `
      {
        allMdx(filter: { fields: { collection: { eq: "${collection}" } } }) {
          totalCount
        }
      }
    `,
  );

  const { totalCount } = data.allMdx;
  const pages = Math.ceil(totalCount / 10);

  Array.from({ length: pages }).forEach((_, i) => {
    // for each page, use the createPages api to dynamically create that page
    actions.createPage({
      path: `${pathPrefix}${i + 1}`,
      component,
      context: {
        skip: i * 10,
        currentPage: i + 1,
      },
    });
  });
};
// https://www.youtube.com/watch?v=gXhmnDdc_bc&t=0s

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);
  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
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
  const BlogPostTemplate = path.resolve('./src/templates/blog-post.js');

  const ProjectPostTemplate = path.resolve('./src/templates/project-post.js');
  const PageTemplate = path.resolve('./src/templates/page.js');

  const markdownFiles = allMarkdownQuery.data.allMdx.edges;
  const posts = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes('/content/posts/'),
  );
  const projects = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes('/content/projects/'),
  );

  const pages = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes('/content/pages/'),
  );
  // -----------------Create Blog Post--------------
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: BlogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });
  // ---------------Create Project Post------------------
  projects.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: ProjectPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });
  // ---------------Create Page ------------------
  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: PageTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
