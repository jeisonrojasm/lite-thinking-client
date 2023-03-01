import { useEffect, useState } from "react";
import { listEnterprisesFunction } from './EnterpriseServer';
import EnterpriseItem from './EnterpriseItem';
import "../styles/EnterpriseList.css";

function EnterpriseList() {
    const [enterprises, setEnterprises] = useState([]);

    const listEnterprises = async () => {
        try {
            const response = await listEnterprisesFunction();
            const data = await response.json();
            setEnterprises(data.enterprises);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listEnterprises();
    }, []);

    return (
        <div className="container py-4 enterprise-list">
            {
                enterprises.map(e => <EnterpriseItem enterprise={e} key={e.nit} listEnterprises={listEnterprises} />)
            }
        </div>
    );
}

export default EnterpriseList;