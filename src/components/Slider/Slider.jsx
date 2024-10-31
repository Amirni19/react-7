import style from './FadeSlider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export function FadeSlider() {
    {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            waitForAnimate: false
        };
        return (
            <>
                <div className={style.t}>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className={style.item}>
                                <img src='https://static.tildacdn.com/tild6230-3337-4562-a132-656239623733/KHHEsNpjkZI.jpg' />
                            </div>
                            <div className={style.item}>
                                <img src='https://cdn1.ozone.ru/s3/multimedia-u/6309754578.jpg' />
                            </div>
                            <div className={style.item}>
                                <img src='https://cdn.100sp.ru/pictures/154459748' />
                            </div>
                            <div className={style.item}>
                                <img src='https://img.joomcdn.net/c277491308c55bdbac8a828340ead27096963b3a_original.jpeg' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </>

        );
    }
}
