import "../styles/EnterpriseItem.css";
import { deleteEnterprise } from "./EnterpriseServer";
import { useNavigate } from "react-router-dom";

function EnterpriseItem({ enterprise, listEnterprises }) {

    const navigate = useNavigate();

    const handleDelete = async enterpriseNit => {
        await deleteEnterprise(enterpriseNit);
        listEnterprises();
    };

    return (
        <div className="card card-body enterprise-item">
            <h2 className="enterprise-name">
                {enterprise.name}
            </h2>
            <p className="enterprise-address">
                <span>Dirección: </span>{enterprise.address}
            </p>
            <p className="enterprise-nit">
                <span>NIT: </span>{enterprise.nit}
            </p>
            <p className="enterprise-tel">
                <span>Teléfono: </span>{enterprise.tel}
            </p>
            <div className="enterprise-item__buttons">
                <button onClick={() => enterprise.nit ? handleDelete(enterprise.nit) : null} className="btn btn-danger mx-2">Eliminar</button>
                <button onClick={() => navigate(`/enterpriseUpdate/${enterprise.nit}`)} className="btn btn-primary mx-2">Editar</button>
            </div>
        </div>
    );
}

export default EnterpriseItem;