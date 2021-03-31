import React, { Component } from 'react';
import Slider from './Slider';
import Contact from './Contact';
import ScrollAnimation from 'react-animate-on-scroll';
import './style.scss';


export default class Home extends Component{
    render = () => {
        return(
            <main>
                <div id='header-img' style={{ backgroundImage: 'url(assets/images/bg.jpg)' }}></div>
                <section style={{marginTop: '300px'}}>
                    <Slider/>
                </section>
                <hr/>
                <section data-section="1" className="mt-5 pt-5">
                    <ScrollAnimation animateIn="tracking-in-expand">
                        <h1>WSTĘP</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slide-in-bottom">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Duis maximus risus sed nisl volutpat, eget dignissim nulla 
                        efficitur. Donec libero odio, tempor vitae tincidunt non, 
                        ultricies id dolor. Sed a turpis sollicitudin, ullamcorper 
                        arcu id, elementum quam. In ac rhoncus augue. Ut sollicitudin 
                        acus nisl, in vehicula arcu vestibulum ut. In suscipit dapibus 
                        lectus vel faucibus. Praesent fermentum commodo volutpat. Ut 
                        pellentesque quis felis a imperdiet. Nam lacus orci, consequat 
                        ac auctor in, condimentum vitae lacus. In euismod urna sit amet 
                        erat suscipit, sed tristique metus dapibus. Proin dictum dignissim 
                        nunc sed fermentum. Etiam nec magna iaculis, sagittis sapien eu, 
                        auctor libero. Phasellus dignissim erat metus, sit amet fringilla 
                        dolor vehicula in. Vestibulum dolor orci, convallis a sodales sit 
                        amet, consectetur eget massa.
                    </ScrollAnimation>
                </section>
                <section data-section="2" className="mt-5 pt-5">
                    <ScrollAnimation animateIn="tracking-in-expand">
                        <h1>O NAS</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slide-in-bottom">
                        Donec blandit nulla eget augue dignissim feugiat. Cras ultrices urna 
                        molestie risus vestibulum, vel facilisis ligula placerat. Vestibulum 
                        sit amet augue vel felis porta sodales. Ut porttitor lacus nec tempor 
                        volutpat. Vivamus venenatis purus a laoreet iaculis. Morbi nec scelerisque 
                        nisl, sed blandit sem. Praesent at nibh quis erat varius porta ac eu tortor. 
                        Nulla lobortis, tellus et auctor aliquam, orci neque ultricies eros, 
                        sed dapibus eros diam eu nulla. Suspendisse vestibulum, lorem et ultrices 
                        ultrices, nisi felis congue leo, quis scelerisque dolor est non mauris. 
                        Vestibulum at fringilla nisi, sed tincidunt metus. Praesent iaculis, 
                        ligula at malesuada accumsan, augue orci pulvinar nulla, ut pretium massa 
                        lorem non sapien.
                    </ScrollAnimation>
                </section>
                <section data-section="3" className="mt-5 pt-5">
                    <ScrollAnimation animateIn="tracking-in-expand">
                        <h1>KONTAKT</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slide-in-bottom">
                        <Contact/>
                    </ScrollAnimation>
                </section>
                <section data-section="4">
                    <svg xmlns="http://www.w3.org/2000/svg" id="wave" viewBox="0 0 1440 320">
                        <path fill="#0099ff" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,229.3C384,213,480,139,576,106.7C672,75,768,85,864,106.7C960,128,1056,160,1152,192C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                    <div id="under-wave-content">
                        <h1>SEKCJA</h1>
                        <p style={{ width: '90%', maxWidth: '900px', margin: '50px auto 0' }}>
                            In dignissim leo et metus sodales egestas. Curabitur sed diam vel orci 
                            fermentum ultrices. Vivamus sagittis rutrum lacinia. Aenean nunc lacus, 
                            mollis sed commodo nec, sodales sit amet odio. Maecenas consequat, odio 
                            vitae tristique eleifend, velit purus volutpat nulla, nec consectetur massa 
                            risus ac diam. Morbi blandit ut odio finibus placerat. Nam quis interdum orci, 
                            at placerat metus. Vivamus non arcu facilisis, vehicula diam eget, laoreet enim. 
                            Nulla vehicula tempor lectus, vel hendrerit augue fermentum a. Donec pharetra 
                            fringilla pharetra. Donec ut porttitor sapien.
                        </p>
                    </div>
                </section>
            </main>
        );
    }
}



//https://css-tricks.com/aos-css-driven-scroll-animation-library/