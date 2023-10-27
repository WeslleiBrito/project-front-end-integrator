
export const goLogin = (navigate) => {
    navigate('/user/login')
}

export const goSignup = (navigate) => {
    navigate('/user/signup')
}

export const goPost = (navigate) => {
    navigate('/')
}

export const goComment = (navigate, id) => {
    navigate(`/comment/post/${id}`)
}