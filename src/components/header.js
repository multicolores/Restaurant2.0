import { Link, useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import Img from 'gatsby-image'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      home_eat: file(relativePath: { eq: "home_eat.jpg" }) {
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
      home_visit: file(relativePath: { eq: "home_visit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  const [revealImage, setRevealImage] = useState({
    show: true,
    image: "home_drink",
    key: "0",
  });

  let image = <Img fluid={data.home_eat.childImageSharp.fluid} alt="" className="image" />;

  if (revealImage.image === "home_eat") {
    image = <Img fluid={data.home_eat.childImageSharp.fluid} alt="" className="image" />;
  } 
  if (revealImage.image === "home_drink") {
    image = <Img fluid={data.home_drink.childImageSharp.fluid} alt="" className="image" />;
  }
  if (revealImage.image === "home_visit") {
    image = <Img fluid={data.home_visit.childImageSharp.fluid} alt="" className="image" />;
  }
  return(
    <>
    <div>
    <header>
          <div className="container-nav-header">
            <div className="adresse">
              <p>32 rue du Maréchale a Laville</p>
            </div>
            <div className="nav-header-items">
              <Link to="/eat">
                <a href="">
                  <motion.span
                    onHoverStart={() =>
                      setRevealImage({
                        show: true,
                        image: "home_eat",
                        key: "1",
                      })
                    }
                    onHoverEnd={() =>
                      setRevealImage({
                        show: true,
                        image: "home_eat",
                        key: "0",
                      })
                    }
                  >
                    Eat
                  </motion.span>
                </a>
              </Link>
              <Link to="/drink">
                <a href="">
                  <motion.span
                    onHoverStart={() =>
                      setRevealImage({
                        show: true,
                        image: "home_drink",
                        key: "2",
                      })
                    }
                    onHoverEnd={() =>
                      setRevealImage({
                        show: true,
                        image: "home_drink",
                        key: "0",
                      })
                    }
                  >
                    Drink
                  </motion.span>
                </a>
              </Link>
              <Link to="/visit">
                <a href="">
                  <motion.span
                    onHoverStart={() =>
                      setRevealImage({
                        show: true,
                        image: "home_visit",
                        key: "2",
                      })
                    }
                    onHoverEnd={() =>
                      setRevealImage({
                        show: true,
                        image: "home_visit",
                        key: "0",
                      })
                    }
                  >
                    Visit
                  </motion.span>
                </a>
              </Link>
            </div>
          </div>
          {/* <AnimatePresence initial={false}>
            <motion.img
              key={revealImage.key}
              src={revealImage.image}
              alt=""
              className="background_image"
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
              }}
            />
          </AnimatePresence> */}
          <div className="background_image">
          {/* <Img
                fluid={data.home_drink.childImageSharp.fluid}
                alt=""
                className="image"
          /> */}
            {image}
          </div>

          <div className="bg-color"></div>
        </header>
    </div>

    </>
  )
}

export default Header
