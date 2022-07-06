import './styles.css';
import BgQuestion from '../../../assets/images/bgQuestion.svg'
import Carousel from 'react-multi-carousel';
import { services } from '../../../helpers/services';


const Question = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 601 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 600, min: 1 },
            items: 3
        },

    }

    return(
        <div className="question py-5">
            <img className='bg' src={BgQuestion} alt="background"/>
            <div className='wd-cont'>
                <div className='info'>
                    <h2 className='pb-4'>Tire todas as suas dúvidas Jurídicas!</h2>
                    <p className='pb-4'>Você tem direito a uma consulta grátis de 30 min com um Advogado para conhecer nossos serviços!</p>
                    <strong className='pb-4'>Cadastra-se agora e ganhe 20% de desconto em créditos nos serviços da B.onuz!</strong>
                    <button className='btn-red'>Saiba mais</button>
                    <Carousel
                        responsive={responsive}
                        autoPlay={false}
                    >
                        {services.map(({icon, title}) => (
                            <div className='icon' key={title}>
                                <img src={icon} alt={title}/>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Question;