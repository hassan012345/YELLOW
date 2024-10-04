const reqOptions = (type,formData) =>{
    switch(type){
        case 'POST':
            return {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
        case 'GET':
            return {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
        default:
            return {};
    }
}

export default reqOptions;