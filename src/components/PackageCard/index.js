import "./styles.css";

const PackageCard = ({card}) => {

    const {
        type,
        valueBnz,
        parcel,
        valueR,
        free,
        label
    } = card;

    return ( 
        <div className={`package-card ${type}`}>
            <div className="label">
                <img src={label}/>
            </div>
            <div className="info">
                <div className={`value ${type}`}>
                    <span>{valueBnz} BNZs</span>
                    <p>{parcel}</p>
                    <small>R${valueR},00</small>
                </div>
                <p className="free">Ganhe {free} BNZs GRÁTIS</p>
                <button className={`btn btn-${type} mt-3`}>Saiba Mais</button>
            </div>
        </div>
     );
}
 
export default PackageCard;