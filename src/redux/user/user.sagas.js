import { all, call, put, takeLatest } from 'redux-saga/effects'
import { USER_TYPES } from './user.types'
import { loginSuccess, loginFailure, logoutSuccess, logoutFail } from './user.actions'
import { auth } from '../../firebase/firebase.app'
import { createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'

export function* getUserDataFromRef(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
        const userSnapshot = yield userRef.get()
        yield put(loginSuccess(userSnapshot.data()))
    } catch (error) {
        yield put(loginFailure(error.message))
    }
}

export function* checkAuthSession() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return
        yield call(getUserDataFromRef, userAuth)
    } catch (error) {
        yield put(loginFailure(error.message))
    }
}

export function* loginUser({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield call(getUserDataFromRef, user)
    } catch (error) {
        yield put(loginFailure(error.message))
    }
}

export function* logoutUser() {
    try {
        yield auth.signOut()
        yield put(logoutSuccess())
    } catch (error) {
        yield put(logoutFail(error.message))
    }
}

export function* userSignUp({ payload: { email, password, additionalData } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        yield call(getUserDataFromRef, user, additionalData)
    } catch (error) {
        yield put(loginFailure(error.message))
    }
}

export function* onCheckAuthSession() {
    yield takeLatest(USER_TYPES.CHECK_USER_SESSION, checkAuthSession)
}

export function* onUserLoginStart() {
    yield takeLatest(USER_TYPES.LOGIN_USER_START, loginUser)
}

export function* onUserLogOut() {
    yield takeLatest(USER_TYPES.SIGNOUT_USER_START, logoutUser)
}

export function* onUserSignup() {
    yield takeLatest(USER_TYPES.SIGNUP_USER_START, userSignUp)
}

export function* userSagas() {
    yield all([
        call(onUserLoginStart),
        call(onCheckAuthSession),
        call(onUserLogOut),
        call(onUserSignup)
    ])
}
