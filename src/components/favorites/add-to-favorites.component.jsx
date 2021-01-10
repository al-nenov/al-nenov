import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import useHover from '../../hooks/useHover'

import { toggleFavorite } from '../../redux/favorites/favorites.actions'

import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import IconButton from '@material-ui/core/IconButton'

const AddToFavorites = ({ productId }) => {
    const dispatch = useDispatch()
    const [hovered, ref] = useHover()
    const favorites = useSelector((state) => state.favorites)
    const favorited = favorites.some((id) => id === productId)

    const handleClick = (id) => {
        dispatch(toggleFavorite(id))
    }

    return (
        <span ref={ref} className="favorites-icon">
            <IconButton onClick={() => handleClick(productId)} style={{ color: 'red' }}>
                {hovered || favorited ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
            </IconButton>
        </span>
    )
}

AddToFavorites.propTypes = {
    product: PropTypes.number.isRequired
}

export default AddToFavorites
