import Navbar from "./Navbar";
import Herosec from "./Herosec";
import Ourservices from "./Ourservices";
import Footer from "./Footer";
import Em from "./Em";

const SEO1 = ()=>{
    return(
        <>
            <Navbar/>
            {/* <Em/> */}
            <div className="ratio ratio-16x9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xsVTqzratPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            {/* <Footer/> */}
        </>
    );
}

export default SEO1;