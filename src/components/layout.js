import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import './app.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main style={{
          padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)'
        }}>
          <div
            style={{
              margin: '60px auto',
              maxWidth: 860,
              padding: '0px 20px',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </main>
        <span aria-label="a hand waving good bye" role="img" style={{ display: 'block', fontSize: '5rem', paddingTop: '100px', 'textAlign': 'center' }}>👋🏻</span>
        <footer style={{textAlign:'center', margin: '100px 0 100px 0'}}><i>I hope you have a great day <span aria-label="a yellow heart" role="img">💛</span></i></footer>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
