export const setUser = user => ({
    type: 'UPDATE_USER',
    payload: user
})

export const setRedirectFlash = message => ({
    type: 'SET_FLASH',
    payload: message
})