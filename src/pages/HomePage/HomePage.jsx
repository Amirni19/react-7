import style from './HomePage.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner } from '../../components/BannerComponent/Banner';
import { Catalog } from '../../components/CatalogComponent/Catalog'
import { FadeSlider } from '../../components/Slider/Slider';
import { Accordeon } from '../../components/AccordeonComponent/Accordeon';


export function HomePage() {
    return (
        <>
            <Banner />
            <div className='container'>
                <Accordeon />
                <div className="mt110">
                    <Catalog />
                </div>
                <FadeSlider />
            </div>
        </>
    )
}
