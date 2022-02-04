import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home, LoginRegister, UserPanel, StorePanel, AdminPanel } from "./views"
import { Navbar } from "./components"
import { useSelector } from 'react-redux';



function App() {
  const role = useSelector((state) => state.user.role)
  console.log("ROLE", role);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginRegister />} />
        <Route path="register" element={<LoginRegister />} />
        <Route path="userpanel" element={<UserPanel.Wrapper />} >
          <Route index element={role == 0 ? <UserPanel.Profile /> : <Home />} />
          <Route path="my-orders" element={role == 0 ? <UserPanel.MyOrders /> : <Home />} />
          <Route path="my-cart" element={role == 0 ? <UserPanel.MyCart /> : <Home />} />
          <Route path="refund-requests" element={role == 0 ? <UserPanel.RefundRequests /> : <Home />} />
          <Route path="settings" element={role == 0 ? <UserPanel.Settings /> : <Home />} />
        </Route>
        <Route path="storepanel">
          <Route path="settings" element={role == 1 ? <StorePanel.Settings /> : <Home />} />
          <Route index element={role == 1 ? <StorePanel.Home /> : <Home />} />
        </Route>
        <Route path="adminpanel" >
          <Route path="settings" element={role == 2 ? <AdminPanel.Settings /> : <Home />} />
          <Route index element={role == 2 ? <AdminPanel.Home /> : <Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
