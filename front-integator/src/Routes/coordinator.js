
export const goLogin = (navigate) => {
    navigate('/')
}

export const goSignup = (navigate) => {
    navigate('/user/signup')
}

export const goPost = (navigate) => {
    navigate('/post')
}

export const goComment = (navigate) => {
    navigate('/comment/post/:id')
}