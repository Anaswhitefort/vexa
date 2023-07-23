import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
           
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">support@vexa.ae</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <a href="tel:+971563901109">+971 56 390 11 09</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Vexa.ae - Spar Building - Al Khaleej Al Arabi St<br />
                        Al Khalidiyah , Abu Dhabi<br />
                       United Arab Emirates </span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
