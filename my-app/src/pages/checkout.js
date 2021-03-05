import React from 'react'

export default function checkout() {
    return (
        <div>
            <div className="bootstrap-basic">
            <form className="needs-validation" novalidate="" >

            <div className="row">
                <div className="col-sm-6 mb-3">
                    <label for="cc-name">Cardholder Name</label>
                    <div className="form-control" id="cc-name"></div>
                    <small className="text-muted">Full name as displayed on card</small>
                    <div className="invalid-feedback">Name on card is required</div>
                </div>
                <div className="col-sm-6 mb-3">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                    <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <div className="form-control" id="cc-number"></div>
                    <div className="invalid-feedback">Credit card number is required</div>
                </div>
                <div className="col-sm-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <div className="form-control" id="cc-expiration"></div>
                    <div className="invalid-feedback">Expiration date required</div>
                </div>
                <div className="col-sm-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <div className="form-control" id="cc-cvv"></div>
                    <div className="invalid-feedback">Security code required</div>
                </div>
            </div>

            <hr className="mb-4" />
            <div className="text-center">
                <button className="btn btn-primary btn-lg" type="submit">Pay with <span id="card-brand">Card</span></button>
            </div>
            </form>
            </div>
         <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false">
             <div className="toast-header">
                <strong className="mr-auto">Success!</strong>
                <small>Just now</small>
                <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">&times;</span></button>
             </div>
             <div className="toast-body">Next, submit the payment method nonce to your server.</div>
             </div>
          </div>
         </div>

    )
}
