
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../Pages/Login/LoginPage'
import { SignupPage } from '../Pages/Signup/SignupPage'
import { PostPage } from '../Pages/Post/PostPage'
import { CommentPage } from '../Pages/Comment/CommentPage'

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PostPage />} />
                <Route path='/user/signup' element={<SignupPage />} />
                <Route path='/user/login' element={<LoginPage />} />
                <Route path='/comment/post/:id' element={<CommentPage />} />
            </Routes>
        </BrowserRouter>
    )
}