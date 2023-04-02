import Listcontent from "components/Listcontent";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import "./styles.css";

function AdminPage() {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <Listcontent /> 
    </>
  );
}

export default AdminPage;
