const URL = 'http://localhost:8000/app/enterprises/';

export const listEnterprisesFunction = async () => {
    return await fetch(URL);
}

export const getEnterpriseFunction = async (enterpriseNit) => {
    return await fetch(`${URL}${enterpriseNit}`);
}

export const registerEnterprise = async (newEnterprise) => {
    return await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': String(newEnterprise.name).trim(),
            'address': String(newEnterprise.address).trim(),
            'nit': parseInt(newEnterprise.nit),
            'tel': parseInt(newEnterprise.tel)
        })
    });
};

export const updateEnterprise = async (enterpriseNit, updateEnterprise) => {
    return await fetch(`${URL}${enterpriseNit}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': String(updateEnterprise.name).trim(),
            'address': String(updateEnterprise.address).trim(),
            'nit': parseInt(updateEnterprise.nit),
            'tel': parseInt(updateEnterprise.tel)
        })
    });
};

export const deleteEnterprise = async (enterpriseNit) => {
    return await fetch(`${URL}${enterpriseNit}`, {
        method: 'DELETE'
    });
};