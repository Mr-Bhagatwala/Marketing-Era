import NavbarAd from "./navbaradm";
import Herosec from "./Herosec";
import Ourservices from "./Ourservices";
import Footer from "./Footer";

const LayoutAd = ()=>{
    let author = localStorage.getItem('user')
    author = JSON.parse(author)
    return(
        <>
            {/* {author?<NavbarAd/>:<NavbarAd/>} */}
            <Herosec/>
            <Footer/>
        </>
    );
}

export default LayoutAd;