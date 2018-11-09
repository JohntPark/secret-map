import React from 'react';

const ProductDetails = props => {
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Dentures</p>
                    <button className="delete" aria-label="close" onClick={props.closeModal}></button>
                </header>
                <section className="modal-card-body">
                    <p>These teeth are top-shelf.  Can chow through steak, veggies, and lasts for a very long time. Available in all countries.</p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button" onClick={props.closeModal}>Exit</button>
                </footer>
            </div>
        </div>
    );
}

export default ProductDetails;