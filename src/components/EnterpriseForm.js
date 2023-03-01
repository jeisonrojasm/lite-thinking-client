import { useEffect, useState } from "react";
import "../styles/EnterpriseForm.css";
import { registerEnterprise, getEnterpriseFunction, updateEnterprise } from "./EnterpriseServer";
import { useNavigate, useParams } from "react-router-dom";


function EnterpriseForm() {

    // Inicio actualizar enterprise
    const navigate = useNavigate();

    const params = useParams();

    const initialState = { name: '', address: '', nit: 0, tel: 0 };

    const [enterprise, setEnterprise] = useState(initialState);

    const handleInputChange = e => {
        setEnterprise({ ...enterprise, [e.target.name]: e.target.value });
    };
    // Fin actualizar enterprise

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (!params.nit) {
                response = await registerEnterprise(enterprise);
                const data = response.json();
                if (data.message === 'Success') {
                    setEnterprise(initialState);
                }
            } else {
                await updateEnterprise(params.nit, enterprise);
            }
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    const getEnterprise = async enterpriseNit => {
        try {
            const response = await getEnterpriseFunction(enterpriseNit);
            const data = await response.json();
            console.log(data, 'jej');
            const { name, address, nit, tel } = data.enterprise;
            setEnterprise({ name, address, nit, tel });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.nit) {
            getEnterprise(params.nit);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container py-4">
            <form className="enterprise-form" onSubmit={handleSubmit}>
                <label className="enterprise-form__label">
                    Nombre:
                </label>
                <input type="text" name="name" value={enterprise.name} onChange={handleInputChange} maxLength="30" required className=" mb-4 enterprise-form__input" />
                <label className="enterprise-form__label">
                    Dirección:
                </label>
                <input type="text" name="address" value={enterprise.address} onChange={handleInputChange} maxLength="30" required className=" mb-4 enterprise-form__input" />
                <label className="enterprise-form__label">
                    NIT:
                </label>
                <input type="number" name="nit" value={enterprise.nit} onChange={handleInputChange} min="0" max="999999999" required className=" mb-4 enterprise-form__input" />
                <label className="enterprise-form__label">
                    Teléfono:
                </label>
                <input type="number" name="tel" value={enterprise.tel} onChange={handleInputChange} max="9999999999" required className=" mb-4 enterprise-form__input" />
                <button type="submit" className="btn btn-success enterprise-form__button">Registrar</button>
            </form>
        </div>
    );
}

export default EnterpriseForm;