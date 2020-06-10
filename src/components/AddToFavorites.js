import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useHover from '../hooks/useHover';
import {toggleFavorite, setFavorites} from '../redux/favoritesReducer';

function AddToFavorites(props) {
    const favorites = useSelector(state => state.favorites);

    const [isFavorited, setFavorited] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setFavorites([1,2]))
        return function() {

            favorites.some((item) => item === props.product) ? setFavorited(true) : setFavorited(false)
        }
    })
    
    const [hovered, ref] = useHover();
    const favIcon = isFavorited || hovered ? ['fas', 'heart'] : ['far', 'heart']

    function handleClick(id) {
        dispatch(toggleFavorite(id))
    }

    return (
        <span ref={ref}>
            <FontAwesomeIcon
                onClick={() => handleClick(props.product)}
                icon={favIcon} 
                size="2x" 
                style={{color:'red'}}/>
        </span>
    )
}

export default AddToFavorites