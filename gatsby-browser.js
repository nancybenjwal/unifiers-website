/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import "bootstrap/dist/css/bootstrap.min.css"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import Header from "./src/components/header"
import Footer from "./src/components/footer"

export function wrapPageElement({ element, props }) {
  return (
    <>
      {/* <div id="page-container" className=""> */}
      <Header />

      {element}
      <Footer />

      {/* </footer> */}
      {/* </div> */}
    </>
  )
}
