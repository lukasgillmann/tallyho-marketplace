import PreLoader from "./common/preloader";
import Header from "./common/header";
import Sidebar from "./common/sidebar";
import Footer from './common/footer';
import SocialModal from './common/socialmodal';

import data from '../data/data.json';

function Layout({ children }) {
    return (
        <>
            <div className="page-wrapper">
                <PreLoader />
                <Sidebar />
                
                <div className="page-body">
                    <Header />
                    <SocialModal />

                    {children}
                    <Footer footerInfo={data.footerInfo} />
                </div>


                <div role="presentation" className="sidebar-overlay" onClick={(e)=> {document.querySelector('body').classList.toggle('sidebar-active')}}></div>
            </div>
        </>
    )
}

export default Layout;