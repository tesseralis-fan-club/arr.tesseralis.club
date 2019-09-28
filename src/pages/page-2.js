import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Yarr this be the second page</h1>
    <Link to="/">Click herr to sail back to land</Link>
  </Layout>
)

export default SecondPage
