import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import VideoBanner from '../components/VideoBanner';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Vexa.ae | Digital Production House Abu dhabi"
                    meta={[
                        { name: 'Vexa.ae', content: 'Digital Production House Abu dhabi' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>
                <VideoBanner />
                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Promotional & Commercials Videos</h3>
                                <p>Bring marketing and filmmaking expertise to produce compelling promotional and brand awareness videos</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Digital Advertising</h3>
                                <p>Vexa helps you to reach right audience using paid advertising, on platforms like YouTube, Facebook, Snapchat, Tiktok and Instagram.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Creative & Branding</h3>
                                <p>Our goal is to help your business create a strong brand identity that sets it apart from competitors and connects with customers on a deeper level.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Website Development</h3>
                                <p>As a premier Website Development Company in Abu Dhabi, we specialize in creating highly converting websites. Our team crafts visually appealing and user-friendly sites that serve as powerful silent salespeople for your brand. </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>E-Commerce Development</h3>
                                <p>We offer end-to-end e-commerce solutions that include everything from website design and development to payment gateway integration and product management.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Product Package Designing</h3>
                                <p>Whether you're launching a new product or seeking a fresh look for your existing packaging, our Product Package Designing service is tailored to meet your specific needs</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>VEXA.AE</h2>
                            </header>
                            <p>PARTNER WITH VEXA AND EXPERIENCE THE POWER OF DIGITAL MARKETING AND VIDEO PRODUCTION DONE RIGHT. LET US HELP YOU ELEVATE YOUR BRAND, ENGAGE YOUR AUDIENCE, AND ACHIEVE REMARKABLE SUCCESS IN THE DIGITAL LANDSCAPE.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Contact Us</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
