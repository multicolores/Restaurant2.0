import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import svg from "../images/pattern.svg"

const Eat = () => {
  const data = useStaticQuery(graphql`
    query {
      home_eat: file(relativePath: { eq: "home_eat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entree: file(relativePath: { eq: "entree2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      viande: file(relativePath: { eq: "viande.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dessert: file(relativePath: { eq: "dessert.jpg" }) {
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
    <SEO title="Eat" />
    <Header />

    <div className="eat_page">
        <section className="header_section">
         <Img fluid={data.home_eat.childImageSharp.fluid} alt="" className="image" />
         <div className="text_container">
          <h1>Our Dishs</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, praesentium non! Corrupti, officiis.</p>
            <a href="#food">Have a look</a>  
         </div>
      
        </section>

        <div className="container" id="food">

    <section >

        <div className="text_container">
          <h4>Food</h4>
          <h2>Entrances</h2>
          <div className="articles">
            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$7</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  

            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$12</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>  

            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$8</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            
            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$12</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>

              <div className="item">
              <span>name</span>
              <div> </div>
              <span>$8</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            
          </div>

        </div>

        <div className="img_container">
          <img src={svg} alt="" className="svg"/>
          <div className="img">
            <Img fluid={data.entree.childImageSharp.fluid} alt="" />
          </div>
        </div>
    </section>

    <section className="left">
    <div className="img_container">
          <img src={svg} alt="" className="svg"/>
          <div className="img">
            <Img fluid={data.viande.childImageSharp.fluid} alt="" />
          </div>
        </div>
    <div className="text_container">
          <h4>Food</h4>
          <h2>Dishs</h2>
          <div className="articles">
            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$7</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  

            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$12</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>  

            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$8</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            
            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$12</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>

              <div className="item">
              <span>name</span>
              <div> </div>
              <span>$8</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            
          </div>

        </div>
    </section>

    <section className="right">

        <div className="text_container">
          <h4>Food</h4>
          <h2>Desserts</h2>
          <div className="articles">
            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$7</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  

            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$12</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>  

            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$8</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            
            <div className="item">
              <span>name</span>
              <div> </div>
              <span>$12</span>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>

              <div className="item">
              <span>name</span>
              <div> </div>
              <span>$8</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            
          </div>

        </div>

        <div className="img_container">
          <img src={svg} alt="" className="svg"/>
          <div className="img">
            <Img fluid={data.dessert.childImageSharp.fluid} alt="" />
          </div>
        </div>
    </section>
</div>

    </div>
  </>
  )
}

export default Eat