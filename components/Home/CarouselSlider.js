import React from 'react'
import styles from '../../styles/CarouselSlider.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Typography } from '@material-ui/core';

const CarouselSlider = () => {

    const settings = {
        arrow: false,
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        appendDots: dots => (
            <div
              style={{
                position: "initial",
              }}
            >
                <ul 
                    style={{ 
                        margin: "0",
                    }}
                > 
                    {dots} 
                </ul>
            </div>
        )
    };
  
    return (
        <div className={styles.carouselSlider}>
            <h2>
                Self-Repent Posted From Users
            </h2>
            <div className={styles.carouselSlider__Carousel}>
                <Slider {...settings}>
                    <div>
                        <Card 
                            className={styles.carouselSlider__CardRoot}
                        >
                            <CardContent
                                className={styles.carouselSlider__CardContent}
                            >
                                <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <div className={styles.carouselSlider__CardPosted}>
                                <a href="#">
                                    Posted On: From USA
                                </a>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <Card 
                            className={styles.carouselSlider__CardRoot}
                        >
                            <CardContent
                                className={styles.carouselSlider__CardContent}
                            >
                                <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <div className={styles.carouselSlider__CardPosted}>
                                <a href="#">
                                    Posted On: From USA
                                </a>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <Card 
                            className={styles.carouselSlider__CardRoot}
                        >
                            <CardContent
                                className={styles.carouselSlider__CardContent}
                            >
                                <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <div className={styles.carouselSlider__CardPosted}>
                                <a href="#">
                                    Posted On: From USA
                                </a>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <Card 
                            className={styles.carouselSlider__CardRoot}
                        >
                            <CardContent
                                className={styles.carouselSlider__CardContent}
                            >
                                <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <div className={styles.carouselSlider__CardPosted}>
                                <a href="#">
                                    Posted On: From USA
                                </a>
                            </div>
                        </Card>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default CarouselSlider
