import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Img from 'gatsby-image'

const Visit = () => {
  const data = useStaticQuery(graphql`
    query {
      home_visit: file(relativePath: { eq: "home_visit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chef: file(relativePath: { eq: "chef.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      home_image: file(relativePath: { eq: "home_image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      produit: file(relativePath: { eq: "produit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      home_drink: file(relativePath: { eq: "home_drink.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      home_eat: file(relativePath: { eq: "home_eat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <>
    <SEO title="Visit" />
    <Header />

    <div className="visit_page">
        <section className="header_section">
         <Img fluid={data.home_visit.childImageSharp.fluid} alt="" className="image" />
         <div className="text_container">
          <h1>Visit</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, praesentium non! Corrupti, officiis.</p>
            <a href="/visit#visit">Have a look</a>  
         </div>
      
        </section>

        <div className="container" id="visit">
            <section className="about">
                <div className="text">
                    <h4>Our story</h4>
                    <h2>About us</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit placeat explicabo incidunt repudiandae impedit ducimus, maiores doloribus alias dolorem aspernatur in adipisci commodi ipsa. Sit.</p>
                </div>
                <div className="images_div">
                    <div>
                        <Img fluid={data.home_image.childImageSharp.fluid} alt="" className="image" />
                    </div>
                    <div>
                        <Img fluid={data.chef.childImageSharp.fluid} alt="" className="image" />
                    </div>
                </div>
            </section>

            <section className="chef">
                <div className="image_container">
                    <Img fluid={data.produit.childImageSharp.fluid} alt="" className="image" />
                </div>
                <div className="text">
                    <h4>product</h4>
                    <h2>Our chef's product</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est quidem nemo aut qui repellendus quo ipsam illum deserunt itaque.</p>
                </div>
            </section>

            <section className="menu">
                <h2>Our menu</h2>
                <div className="images_container">

                    <div>
                    <Link to="/eat">
                      <Img fluid={data.home_eat.childImageSharp.fluid} alt="" className="image" />
                    </Link>
                        <h2>Eat</h2>
                    </div>
                    <div>
                      <Link to="/drink">
                        <Img fluid={data.home_drink.childImageSharp.fluid} alt="" className="image" />
                      </Link>
                        <h2>Drink</h2>
                    </div>
                </div>
            </section>
        </div>
    <Footer />
    </div>
  </>
  )
}

export default Visit