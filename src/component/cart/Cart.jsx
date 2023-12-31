import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import './Cart.css'
const Cart = () => {

    return (
        <>
            <Navbar />
            <div className='container '>
                <div className="row justify-content-md-center">

                    <div className="col">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={'https://lsco.scene7.com/is/image/lsco/196270205-front-pdp-lse?fmt=jpeg&qlt=70&resMode=bisharp&fit=crop,0&op_usm=1.25,0.6,8&wid=2000&hei=1800'} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={'https://www.levistrauss.com/wp-content/uploads/2019/04/0426919_UNZIPPED_HERO_LINE_DRY.jpg'} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={'https://static.toiimg.com/thumb/msid-72349742,width-400,resizemode-4/72349742.jpg'} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        
                            <h1><em>long Blouse red burgubder</em></h1>
                            <h6>Rs:37,00.00</h6>
                            <hr />
                            <h6>Size: Euro 34</h6>
                            <div class="d-grid gap-2">
                                <button class="btn  btn btn-warning" type="button">ADD TO CART</button>
                                <button class="btn btn-primary" type="button">BUY IT NOW</button>
                            </div>
                            <h4 className='deliveryOption'>Delivery Option <i class="fa-solid fa-truck small"></i> </h4>
                            <form className="pincode"> 
                            <input  type="number" id="pincode" class="form-control  inputButton" pattern={'[0-9] {}'}  placeholder='Enter Pincode'/>
                            <input type='submit' className='inputButton' value="check"/>
                            </form>
                        
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Cart