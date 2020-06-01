import React from 'react'
import { Link } from 'gatsby';

import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I currently am looking for a web developer job.</p>
      <p><Link to="/contact">Want to work with me? React out.</Link></p>
    </Layout>
  )
}
