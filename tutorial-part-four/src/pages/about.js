import React from 'react';
import Layout from '../components/layout.js';
import { graphql } from 'gatsby';

export default ({ data }) => (
    <Layout>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>
            We're the only site running on your computer showing
            all pandas all the time!
        </p>
    </Layout>
);

export const query = graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
`
