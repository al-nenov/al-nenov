export const toggleFavorite = (favorites, item) => {
    const existingItem = favorites.find((favorited) => favorited === item)

    if (existingItem) {
        return favorites.filter((favorited) => favorited !== item)
    } else {
        return [...favorites, item]
    }
}
