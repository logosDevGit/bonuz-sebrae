import './styles.css';

const EmployeesCard = ({employees}) => {

    const {
        name,
        image,
        description,
        position
    } = employees;

    return (  
        <div className="employees-card">
            <div className='user'>
                <div>
                    <img src={image} alt={`${name} image`} />
                </div>
                <div className='mx-2'>
                    <h6>{name}</h6>
                    <p className='mb-0'>{position}</p>
                </div>
            </div>
            <div style={{padding: "0 24px 5px 18px"}}>
                <p>{description}</p>
            </div>
        </div>
    );
}
 
export default EmployeesCard;