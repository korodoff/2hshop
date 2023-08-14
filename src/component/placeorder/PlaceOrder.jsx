import React from 'react'
import './placeorder.css'

const PlaceOrder = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <div className='pinContainer'>
                            delivery time
                            <form className="pin">
                                <input type="number" id="pincode" class="form-control  inputButton" pattern={'[0-9] {}'} placeholder='Enter Pincode' />
                                <input type='submit' className='inputButton' value="check" />
                            </form>
                        </div>
                        
                            <div className="Itemorder">
                                <img  src={'https://lsco.scene7.com/is/image/lsco/196270205-front-pdp-lse?fmt=jpeg&qlt=70&resMode=bisharp&fit=crop,0&op_usm=1.25,0.6,8&wid=2000&hei=1800'} className="img-thumbnail itemImage" alt="..."></img>
                            <div>
                            <h5><em>long Blouse red burgubder</em></h5>
                            <h6>Rs:37,00.00</h6>
                            <hr />
                            <h6>Size: Euro 34</h6>
                            </div>
                            </div>
                        
                    </div>
                    <div class="col-sm-4">col-sm-4</div>
                </div>
            </div>
        </>
    )
}

export default PlaceOrder