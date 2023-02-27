import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import RootLayout from '../layouts/RootLayout';
import About from '../pages/About';
import BookDetails from '../pages/BookDetails';
import Books from '../pages/Books';
import Home from '../pages/Home';


const router= createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<RootLayout/>}>

<Route index element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='books' element={<Books/>}>
<Route path='bookdetails' element={<BookDetails/>}/>
</Route>

</Route>
 ))
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
