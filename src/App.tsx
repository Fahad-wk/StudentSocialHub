 //rafce 
 import { Routes, Route } from 'react-router-dom';
 import './globals.css';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages';
import SigninForm from './_auth/forms/SigninForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
 
const App = () => {
  console.log('App component rendered'); // Add this line

  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes (everybody can see) */}  
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
       
        {/* private routes (u can see only if u sign in) */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>
    </main>
  )
}

export default App
