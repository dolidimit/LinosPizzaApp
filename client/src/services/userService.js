import * as request from '../components/EditRecipe/requester';

const baseUrl = 'http://localhost:3030/data';


export const create = async (recipeData,token) => {
    let response = await fetch(`${baseUrl}/recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...recipeData, likes: [], dislikes: []})
    });
    
    let  result = await response.json();

    return result;
};



export const addComment = async (recipeData,token) => {
    let response = await fetch(`${baseUrl}/comments`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(recipeData)
    });
    
    let  result = await response.json();

    
    return result;
};

export const getAllComments = async () => {
    let response = await fetch(`${baseUrl}/comments`)

    let comments = await response.json();

    let result = Object.values(comments);

    return result;
}




export const addFavourite = async (recipeData,token) => {
    let response = await fetch(`${baseUrl}/favourites`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(recipeData)
    });
    
    let  result = await response.json();

    
    return result;
};

export const getAllFavourites = async () => {
    
    let response = await fetch(`${baseUrl}/favourites`)

    let recipes = await response.json();

    let result = Object.values(recipes);

    return result;
}

export const removeFavourite = (recipeId, token) => {
    return fetch(`${baseUrl}/favourites/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token,
        },
    }).then(res => res.json());
};


export const removeFavouriteAll = (token) => {
    return fetch(`${baseUrl}/favourites`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token,
        },
    }).then(res => res.json());
};



export const getOneFav = (recipeId) => {
    return fetch(`${baseUrl}/favourites/${recipeId}`)
        .then(res => res.json())
};


export const ownRecipes = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/recipes?where=${query}`);
};


export const yourFavourites = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/favourites?where=${query}`);
};


export const getAllShared = (userId) => {
    let query = encodeURIComponent(`userId!="${userId}"`);

    return request.get(`${baseUrl}/recipes?where!=${query}`);
};


export const getAll = () => request.get(`${baseUrl}/recipes`);

export const getOne = (recipeId) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`)
        .then(res => res.json())
};

export const remove = (recipeId, token) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};


export const update = (recipeId, recipeData) => request.put(`${baseUrl}/recipes/${recipeId}`, recipeData);



