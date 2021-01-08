import firebase from './firebase.app'

export const addUserToFirestore = async (user, additionalData) => {
    if (!user) return
    const { email, displayName } = user
    const userRef = firebase.firestore().collection('users').doc(user.uid)
    const userSnapshot = await userRef.get()

    if (!userSnapshot.exists) {
        try {
            await userRef.set({
                email,
                displayName,
                createdAt: new Date(),
                ...additionalData
            })
        } catch (error) {
            console.log('Error while creating user ' + error.message)
        }
    }

    return userRef
}
