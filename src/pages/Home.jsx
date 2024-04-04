import React from "react";
import "../styles/home.css"
import {Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from  "../assets/images/experience.png";

import Subtitle from "./../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";

const Home = () => {
  return (
    <>

      {/* ============== hero section start =================== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                Journey Through Sound, Collect{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                Introducing Wandersound: Your passport to unforgettable journeys. With our immersive audio guide app, explore the world through soundscapes that narrate the stories of every destination. From ancient streets to bustling markets, let Wandersound transform your travels into vibrant experiences. Start your adventure today and discover the extraordinary in every moment.</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls/>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar/>
          </Row>
        </Container>
      </section>
      {/* ============== hero section start =================== */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="service__title">We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>

      {/* ==================== featured tour section start ========================*/}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'}/>
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>
      {/* ==================== featured tour section end ========================*/}

      {/* ==================== experience section start ========================*/}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>

                <h2>With our all experience <br /> we will serve you</h2>
                <p>
                Crafting Memorable Experiences, <br/>
                Every Step of the Way
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>150+</span>
                  <h6>Audio clips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>3</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==================== experience section end ========================*/}
      
      {/* ==================== gallery section start ========================*/}
      <section>
        <Container>
          <Row>
            <Col lang='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">
                Explore Our Audio Adventure Gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==================== gallery section start ========================*/}
    </>
  );
};

export default Home
