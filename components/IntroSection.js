import React from 'react'

function IntroSection() {
    return (
        <section class="clearfix" id="intro">

            <div class="container">

                <div class="intro-img"><img class="img-fluid" src="img/intro-img.webp" alt=""></div>

                <div class="intro-info">

                    <h2>We are a company dedicated to provide technological solutions.</h2>

                    <div><a class="btn-get-started scrollto intro_buttons" href="#contact">Let's work together</a><a class="popup-youtube video_popup intro_buttons" href="https://www.youtube.com/watch?v=2mC4zqdTWs4" id="fl-homepage-video"> <span><img class="img-fluid" src="img/icon/play.svg" alt=""></span>Intro Video</a>

                    </div>

                </div>

            </div>

            <div class="hero-app-1 custom-animation"><img src="img/animate_icon/icon_1.png" alt=""></div>

            <div class="hero-app-2 custom-animation2"><img src="img/animate_icon/icon_2.png" alt=""></div>

            <div class="hero-app-5 custom-animation4"><img src="img/animate_icon/icon_5.png" alt=""></div>

            <div class="hero-app-7 custom-animation2"><img src="img/animate_icon/icon_7.png" alt=""></div>

            <div class="hero-app-8 custom-animation"><img src="img/animate_icon/icon_8.png" alt=""></div>

        </section>
    )
}

export default IntroSection