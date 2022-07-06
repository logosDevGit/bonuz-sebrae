import './styles.css';
import Image1 from "../../../assets/images/differential/comp1.svg"
import Image2 from "../../../assets/images/differential/comp2.svg"
import Image3 from "../../../assets/images/differential/comp3.svg"
import DifferentialCard from "../../DifferentialCard";

const Differential = () => {

    const comps = [
        {
            title: "Valor",
            description: "Pacotes exclusivos que cabem dentro do seu bolso.",
            image: Image3
        },
        {
            title: "Agilidade",
            description: "Prazos de até 10 dias, podendo ainda solicitar urgência.",
            image: Image1
        },
        {
            title: "Experiência",
            description: "Produto validado no mercado por mais de 3 anos.",
            image: Image2
        },
    ]

    return(
        <div className="differential wd-cont py-5">
            <h2>Diferenciais</h2>
            <h5>Acompanhamos de ponta a ponta todo o processo</h5>
            <div className="cards-content">
                {comps.map(({title, image, description}, count) => {
                    return <DifferentialCard title={title} image={image} description={description} key={count}/>
                })}
            </div>
        </div>
    )
}

export default Differential;