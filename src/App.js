import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./website/pages/Cart";
import Checkout from "./website/pages/Checkout";
import Contact from "./website/pages/Contact";
import Home from "./website/pages/Home";
import Login from "./website/pages/Login";
import Myaccount from "./website/pages/Myaccount";
import Products from "./website/pages/Products";
import Wishlist from "./website/pages/Wishlist";
import Productsdetails from "./website/pages/Productsdetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import Admin_login from "./admin/pages/Admin_login";
import Dashboard from "./admin/pages/Dashboard";
import Add_categories from "./admin/pages/Add_categories";
import Manage_categories from "./admin/pages/Manage_categories";
import Add_emp from "./admin/pages/Add_emp";
import Manage_emp from "./admin/pages/Manage_emp";
import Manage_user from "./admin/pages/Manage_user";
import Manag_feedback from "./admin/pages/Manag_feedback";
import Manage_Contact from "./admin/pages/Manage_Contact";
import Add_items from "./admin/pages/Add_items";
import Manage_items from "./admin/pages/Manage_items";
import Add_user from "./admin/pages/Add_user";
import Signup from "./website/pages/Signup";
import Profile from "./website/pages/Profile";
import PNF from "./website/pages/PNF";
import Feedback from "./website/pages/Feedback";
import View_products from "./website/pages/View_products";











function App() {
  return (
    <>
      {/* <Header/> */}
      {/* <Footer/> */}
      {/* <Home/> */}
      {/* <Products/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Myaccount/> */}
      {/* <Wishlist/> */}
      {/* <Login/> */}
      {/* <Contact/> */}
      {/* <Productsdetails/> */}



      {/* <Admin_login /> */}
      {/* <Dashboard /> */}

      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><Home /></>}></Route>
          <Route path="/Products" element={<><Products /></>}></Route>
          <Route path="/Productdetails" element={<><Productsdetails /></>}></Route>
          <Route path="/Cart" element={<><Cart /></>}></Route>
          <Route path="/Checkout" element={<><Checkout /></>}></Route>
          <Route path="/Myaccount" element={<><Myaccount /></>}></Route>
          <Route path="/Wishlist" element={<><Wishlist /></>}></Route>
          <Route path="/signup" element={<><Signup /></>}></Route>
          <Route path="/Login" element={<><Login /></>}></Route>
          <Route path="/view_products/:cate_id" element={<><View_products /></>}></Route>
          <Route path="/Contact" element={<><Contact /></>}></Route>
          <Route path="/Feedback" element={<><Feedback /></>}></Route>
          <Route path="/profile" element={<><Profile /></>}></Route>
          <Route path="*" element={<><PNF /></>}></Route>



          {/* Admin */}
          <Route path="/admin/login" element={<><Admin_login /></>}></Route>
          <Route path="/dashboard" element={<>< Dashboard /></>}></Route>
          <Route path="/categories/add" element={<><Add_categories /></>}></Route>
          <Route path="/categories/manage" element={<><Manage_categories /></>}></Route>
          <Route path="/Employee/add" element={<><Add_emp /></>}></Route>
          <Route path="/Employee/manage" element={<><Manage_emp /></>}></Route>
          <Route path="/items/add" element={<><Add_items /></>}></Route>
          <Route path="/items/manage" element={<><Manage_items /></>}></Route>
          <Route path="/manage_user" element={<><Manage_user /></>}></Route>
          <Route path="/add_user" element={<><Add_user /></>}></Route>
          <Route path="/manage-feedback" element={<><Manag_feedback /></>}></Route>
          <Route path="/manage-contact" element={<><Manage_Contact /></>}></Route>

        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
