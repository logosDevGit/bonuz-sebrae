import './styles.css';
const DifferentialCard = ({title, description, image}) => {

    return (
        <div className='differencial-card'>
            <img src={image} att={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default DifferentialCard;