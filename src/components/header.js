import { Link, useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import Img from 'gatsby-image'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      home_image: file(relativePath: { eq: "home_image2.jpg" }) {
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
    image: "",
  });

  let image = <motion.Img alt="" className="image" />;
  

  if (revealImage.image === "home_eat") {
    image =  <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 0.3,}}> <Img fluid={data.home_eat.childImageSharp.fluid} alt="" className="image" /> </motion.div>;
  } 
  if (revealImage.image === "home_drink") {
    image = <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 0.3,}}> <Img fluid={data.home_drink.childImageSharp.fluid} alt="" className="image" /> </motion.div>;
  }
  if (revealImage.image === "home_visit") {
    image = <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 0.3,}}> <Img fluid={data.home_visit.childImageSharp.fluid} alt="" className="image" /> </motion.div>;
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
                  <motion.span
                    onHoverStart={() =>
                      setRevealImage({
                        image: "home_eat",
                      })
                    }
                    onHoverEnd={() =>
                      setRevealImage({
                        image: "",
                      })
                    }
                  >
                    Eat
                  </motion.span>
              </Link>
              <Link to="/drink">
                  <motion.span
                    onHoverStart={() =>
                      setRevealImage({
                        image: "home_drink",
                      })
                    }
                    onHoverEnd={() =>
                      setRevealImage({
                        image: "",
                      })
                    }
                  >
                    Drink
                  </motion.span>
              </Link>
              <Link to="/visit">
                  <motion.span
                    onHoverStart={() =>
                      setRevealImage({
                        image: "home_visit",
                      })
                    }
                    onHoverEnd={() =>
                      setRevealImage({
                        image: "",
                      })
                    }
                  >
                    Visit
                  </motion.span>
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
          <AnimatePresence initial={false}>
          <div className="background_image">
            {image}
          </div>
          </AnimatePresence>



          <div className="bg-color">
          <Img fluid={data.home_image.childImageSharp.fluid} alt="" className="image_bg" />
          </div>
        </header>
    </div>

    </>
  )
}

export default Header
