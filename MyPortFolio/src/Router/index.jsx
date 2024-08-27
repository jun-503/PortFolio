import { RouterProvider } from "react-router-dom";
import CertPage from "../pages/CertPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Layout from '../Components/layout'
import Homepage from "../pages/homepage";
import ProjectPage from "../pages/ProjectsPage";
import { ProjectLoader,CertLoader } from "./helper";
import Myresume from "../pages/Resume";

import BlogPage from "../pages/Blog";


const Router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />}/>
                <Route path='/projects' element={<ProjectPage />}  loader={ProjectLoader} />
                <Route path='/certifications' element={<CertPage />} loader={CertLoader}/>
                <Route path='/resume' element={<Myresume />}/>
                <Route path='/blogs' element={<BlogPage />}/>
                <Route path="*" element={<h1>Page not found</h1>} />

            </Route>

        )
);


const Index = () => {
    return <RouterProvider router={Router} />;
  };
  
  export default Index;