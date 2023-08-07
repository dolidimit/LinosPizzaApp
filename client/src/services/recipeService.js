const baseUrl = 'http://localhost:3030/jsonstore';


export const getAll = async () => {
    let response = await fetch(`${baseUrl}/recipes`)

    let recipes = await response.json();

    let result = Object.values(recipes);

    return result;
}



export const getOne =  async (recipeId) => {
    return await fetch(`${baseUrl}/recipes/${recipeId}`)
    .then(res => res.json())
}

export const remove = (recipeId,token) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`, {
       method: 'DELETE'
    })
    .then(res => res.json());
};

export const create = async (recipeData,token) => {
    let response = await fetch(`${baseUrl}/recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...recipeData, likes: []})
    });
    
    let  result = await response.json();

    return result;
};




