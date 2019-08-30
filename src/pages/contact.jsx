import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </Layout>
);
