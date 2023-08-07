import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as userService from '../services/userService';

export const RecipeContext = createContext();

const recipesred = (state, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return state.map(x => x._id === action.recipeId ? { ...x, comments: [...x.comments, action.payload] } : x);
        default:
            return state;
    }
};

export const RecipeProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [recipes, dispatch] = useReducer(recipesred, []);

    useEffect(() => {
        userService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_GAMES',
                    payload: result
                };

                dispatch(action);
            });
    }, []);

    const selectRecipe = (recipeId) => {
        return recipes.find(x => x._id === recipeId) || {};
    };

    const addComment = (recipeId, comment) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
            recipeId
        });
    };

    return (
        <RecipeContext.Provider value={{
            addComment,
            selectRecipe
        }}>
            {children}
        </RecipeContext.Provider>
    );
}