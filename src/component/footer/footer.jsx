import React from 'react'

const Footer = () => {
  return (
    // <footer>
    //   <div className="inner">
    //     <div className="itemText">
    //     <strong>2hShop.com</strong>
    //     <address></address>
    //     

    //     </div>
    //     <div className="itemLink">
    //       <h2>Help</h2>
    //       <h4>FAQs</h4>
    //       <h4>Shipment&Delivery</h4>
    //       <h4>Return</h4>
    //       <h4>Terms of services</h4>
    //       <h4>Privacy Policy</h4>
    //     </div>
    //     <div className="itemsocial">
    //       <h4><i className="fa-brands fa-facebook"></i>facebook</h4>
    //       <h4><i className="fa-brands fa-instagram"></i>Instagram</h4>
    //       <h4><i className="fa-brands fa-youtube"></i>youtube</h4>
    //     </div>
    //   </div>

    // </footer>


    <footer className="bg-dark text-center text-white">

      <div className="container p-4">

        <section className="mb-4">

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-facebook-f"></i></a>


          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-twitter"></i></a>


          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-google"></i></a>


          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-instagram"></i></a>


          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-linkedin-in"></i></a>


          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-github"></i></a>
        </section>



        <section className="">
          <form action="">

            <div className="row d-flex justify-content-center">

              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">

                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" className="form-control" />
                  <label className="form-label" for="form5Example21">Email address</label>
                </div>
              </div>

              <div className="col-auto">

                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>

            </div>

          </form>
        </section>



        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
            eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>



        <section className="">

          <div className="row">

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <strong className="text-uppercase">2hShop.com</strong>

              <ul className="list-unstyled mb-0">
                <li>
                 <address className='text-white'>street 11,Iawmusiang West Jaintai Hills</address>
                </li>
                <li>
                <h6 className='text-white'>Ph.No +9189897632, +9187876343</h6>
                </li>
                <li>
                  <h6>2hshop@gmail.com</h6>
                </li>
                <li>
                 
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Help</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Payments</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Shipping</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Cancellation & Returns</a>
                </li>
                <li>
                  <a href="#!" className="text-white">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Consumer Policy</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Terms Of Use</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Security</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Privacy</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Report</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Social</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Facebook</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Twitter</a>
                </li>
                <li>
                  <a href="#!" className="text-white">instagram</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Youtube</a>
                </li>
              </ul>
            </div>

          </div>

        </section>

      </div>



      <div className="text-center p-3" >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>

    </footer>




  )
}

export default Footer
