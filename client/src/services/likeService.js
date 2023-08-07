
import * as request from '../components/EditRecipe/requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, recipeId) => request.post(`${baseUrl}/likes`, {userId, recipeId});

export const getLikes = (recipeId) => {
    const query = encodeURIComponent(`recipeId="${recipeId}"`);

    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};




export const getDislikes = (recipeId) => {
    const query = encodeURIComponent(`recipeId="${recipeId}"`);

    return request.get(`${baseUrl}/dislikes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};



export const dislike = (userId, recipeId) => request.remove(`${baseUrl}/likes`, {userId, recipeId});
