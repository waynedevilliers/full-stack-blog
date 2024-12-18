import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import UpdatePostPage from "./pages/UpdatePostPage";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Homepage />} />
    <Route path="/createPost" element={<CreatePostPage />} />
    <Route path="/postDetails/:id" element={<PostDetailsPage />} />
    <Route path="/posts/:id/update" element={<UpdatePostPage />} />
  </Route>
));

function App() {

  return (
      <RouterProvider router={router} />
  ) 

}

export default App;
