import Navbar from "./Navbar";
import Herosec from "./Herosec";
import Ourservices from "./Ourservices";
import Footer from "./Footer";
import About from "./about";

const Layout = ()=>{
    let author = localStorage.getItem('user')
    author = JSON.parse(author)
    return(
        <>
            {/* {author?<Navbar/>:<Navbar/>} */}
            <Herosec/>
            <Ourservices/>
            <About/>
            <Footer/>
        </>
    );
}

export default Layout;