import React from 'react'
import Navbar from '../component/navbar/navbar'
import Footer from '../component/footer/footer'
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar />

      <div>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="homeImage homeImagecontent1">

              </div>
              {/* <img src={"https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-retail-boutique-interior-in-tokyo-image_2533544.png"} className="img-fluid carouselImage" alt="..."/> */}
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="homeImage homeImagecontent2"></div>
              {/* <img src={"https://imgv3.fotor.com/images/side/remove-several-product-image-backgrounds-in-Fotor-online-batch-image-background-remover-for-ecommerce.png"} className=" carouselImage" alt="..."/> */}
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="homeImage homeImagecontent3"></div>
              {/* <img src={"https://cutout.s3.amazonaws.com/cutout-nuxt/editing/exam/2c.jpeg"} className=" carouselImage" alt="..."/> */}
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="categories">
                <h1 className='mt-5 mb-5 text-secondary-emphasis' ><b>CATEGORIES</b></h1>

                <div className="categoriesTag">
                  <div className="menTag">men</div>
                  <div className="womenTag">women</div>
                  <div className="homelivingTag">home</div>
                </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Home

