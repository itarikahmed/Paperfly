import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import RootLayout from '../layouts/RootLayout';
import About from '../pages/About';
import BookDetails from '../pages/BookDetails';
import Books from '../pages/Books';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const router= createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<RootLayout/>}>

<Route index element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='books' element={<Books/>}/>
<Route path='bookdetails' element={<BookDetails/>}/>
<Route path='signup' element={<SignUp/>}/>
<Route path='signin' element={<SignIn/>}/>
</Route>
 ))
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
