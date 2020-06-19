import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useHover from '../hooks/useHover';
import useFavorites from '../hooks/useFavorites';
import {toggleFavorite} from '../actions/favoritesActions';

function AddToFavorites(props) {
    const dispatch = useDispatch();
    const [hovered, ref] = useHover();
    const [favorites] = useFavorites(props.product);
    const favorited = (favorites.some((id) => id === props.product))

    const favIcon = hovered || favorited ? ['fas', 'heart'] : ['far', 'heart']
    
    function handleClick(id) {
        dispatch(toggleFavorite(id))
    }


    return (
        <span ref={ref} className="favorites-icon">
            <FontAwesomeIcon
                onClick ={() => handleClick(props.product)}
                icon = {favIcon} 
                size= "2x" 
                style = {{color:'red'}}/>
        </span>
    )
}

AddToFavorites.propTypes = {
    product: PropTypes.number.isRequired
}

export default AddToFavorites