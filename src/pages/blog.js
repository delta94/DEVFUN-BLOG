import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'gatsby';
import SEO from 'components/common/SEO';
import Layout from 'components/common/Layout';
import useFetchAllBlog from 'hooks/useFetchAllBlog';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const Blog = () => {
  const data = useFetchAllBlog();
  return (
    <Layout>
      <SEO title="BLOG" />
      <Typography variant="h4" component="h2" style={{ marginBottom: 10 }}>
        Total Post:
        {data.allMarkdownRemark.totalCount}
      </Typography>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card style={{ marginBottom: 40 }}>
            <CardActionArea>
              <CardMedia
                style={{ height: 500 }}
                image={node.frontmatter.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {node.frontmatter.title}
                </Typography>
              </CardContent>
              <li key={node.id}>
                <h3>
                  <span>{node.frontmatter.date}</span>
                </h3>
                <Link className="no-underline" to={node.fields.slug}>
                  <p>{node.excerpt}</p>
                </Link>
              </li>
            </CardActionArea>
          </Card>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
