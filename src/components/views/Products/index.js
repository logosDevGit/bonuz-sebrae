import Carousel from "react-multi-carousel"

import DataPrivacy from "../../ProductsCards/DataPrivacy"
import Family from "../../ProductsCards/Family"
import Hubs from "../../ProductsCards/Hubs"
import './styles.css'

const Products = () => {

    const settings ={
       responsive:  {
            desktop: {
            breakpoint: { max: 3000, min: 0 },
            items: 1
            }
        },
        arrows: false,
        showDots: true,
        autoPlay: false,
        infinite: true
    }

    return (
        <div className="products py-5">
            <h2>Outros Produtos</h2>
            <h5>Veja alguns dos nossos produtos</h5>
            <Carousel {...settings}>
                <DataPrivacy/>
                <Family/>
                <Hubs/>
            </Carousel>
        </div>
    )
}

export default Products