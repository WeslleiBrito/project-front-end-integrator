
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../Pages/Login/LoginPage'
import { SignupPage } from '../Pages/Signup/SignupPage'
import { PostPage } from '../Pages/Post/PostPage'

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path='/user/signup' element={<SignupPage />} />
                <Route path='/post' element={<PostPage />} />
            </Routes>
        </BrowserRouter>
    )
}