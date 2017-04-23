import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Head = styled.header`
  width: 100%;
`
export default () => (
  <Head>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/page">Page</Link></li>
  </Head>
)
