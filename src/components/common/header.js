import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'

function Header() {
    const [ isFixed, setIsFixed ] = useState( false );

    useEffect(()=> {
        window.addEventListener('scroll', function() {
            window.pageYOffset > 0 ? setIsFixed(true) : setIsFixed(false);
        })
    }, [])

    const location = useLocation();

    return (
        <>
            <nav className={ isFixed > 0 ? 'header fixed' : 'header' }>
                <div className="header-left">
                    <button className="toggle-menu" aria-label="Toggle menu" scale="md" onClick={(e)=> {document.querySelector('body').classList.toggle('sidebar-active')}}>
                        <svg viewBox="0 0 24 24" width="24px" color="textSubtle" xmlns="http://www.w3.org/2000/svg" className="fill-white hwtrnV">
                            <path d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"></path>
                        </svg>
                    </button>

                    <a href="/" className="logo">
                        <img src={"/images/logo/logo2.png"} alt="logo" />
                    </a>

                    <a href="https://marketplace.tally.org" className="btn header-market-link">
                        <img src={"/images/logo/logo2.png"} alt="logo" width="20" />
                        <span>Tally Market</span>
                        <div className="badge badge-new">
                            <span color="inherit" className="sc-TBWPX ivFOiv dhrjNk"><p className="sc-GEbAx bNSare">New</p></span>
                        </div>
                    </a>
                </div>
                {
                  location.pathname === "/scamtokens" && (
                    <div className="navbar-collapse collapse">
                      <ul className="nav navbar-nav">
                          <li className="">
                              <a href="airdrops"> {/*<i className="fas fa-gift"></i>*/} Airdrops </a>
                          </li>
                          <li className="">
                              <a href="contest"> {/*<i className="fas fa-trophy"></i>*/} Contest </a>
                          </li>
                          <li className="">
                              <a href="advertise">Advertise&nbsp;
                                 {/* <i className="fas fa-star"></i>*/}
                              </a>
                          </li>
                          <li className="dropdown"> <a className="btn btn-primary dropdown-toggle dropdown-style" type="button" data-toggle="dropdown">List your project {/*<i className="fas fa-chevron-down"></i>*/}</a>
                              {/*<ul className="dropdown-menu">
                                  <li>
                                      <a href="submit"> <i className="fa fa-plus"></i> Add a coin </a>
                                  </li>
                                  <li>
                                      <a href="submit/airdrop"> <i className="fa fa-plus"></i> Add an airdrop </a>
                                  </li>
                              </ul>*/}
                          </li>
                          <li className="dropdown"> <a className="btn btn-primary dropdown-toggle dropdown-style" type="button" data-toggle="dropdown">Account{/*&nbsp;<i className="fas fa-chevron-down"></i>*/}</a>
                              {/*<ul className="dropdown-menu">
                                  <li>
                                      <a href="login"> <i className="fas fa-sign-in-alt"></i> Login </a>
                                  </li>
                                  <li className="">
                                      <a href="register"> <i className="fas fa-user-plus"></i> Register </a>
                                  </li>
                              </ul>*/}
                          </li>
                      </ul>
                    </div>
                  )
                }
                <div className="header-right">
                    {/*<a href="https://www.certik.org/projects/tally" className="brand">
                        <svg width="94" height="28" viewBox="0 0 94 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.7136 3.9968L11.3958 1.75L4.08653 3.9968C3.96814 4.03737 3.87048 4.12401 3.81502 4.23787C3.75944 4.3516 3.75061 4.48318 3.79048 4.60366C3.83023 4.72413 3.9155 4.82351 4.02727 4.88006C4.13916 4.93649 4.26848 4.94548 4.38687 4.90503L11.4169 2.75286L18.4682 4.90503C18.5818 4.92425 18.6982 4.89991 18.7953 4.83686C18.8922 4.77382 18.9627 4.67632 18.9933 4.56346C19.0237 4.45048 19.0121 4.33013 18.9604 4.22538C18.9088 4.12077 18.8208 4.03937 18.7136 3.9968Z" fill="white"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.8147 5.05685C21.8861 5.12876 21.9335 5.22177 21.9501 5.32264C22.3447 8.04996 22.2111 10.8297 21.5567 13.5048C20.5161 17.71 17.8809 22.5953 11.6333 25.6986L11.4261 25.7976L11.2231 25.6986C4.96705 22.5953 2.34023 17.71 1.29968 13.5006C0.636766 10.8286 0.493085 8.05058 0.876683 5.32264C0.894436 5.21752 0.945328 5.12127 1.02164 5.04824C1.09795 4.9752 1.19555 4.92951 1.29968 4.91803C1.39453 4.91078 1.4894 4.93163 1.57276 4.97832C1.65611 5.02489 1.72436 5.09518 1.76919 5.18057L5.9991 13.5952H16.8234L21.0533 5.18057C21.0992 5.08956 21.1721 5.01565 21.2617 4.96921C21.3512 4.92277 21.4528 4.90629 21.5521 4.92202C21.6514 4.93775 21.7433 4.98494 21.8147 5.05685ZM1.61691 6.98405C1.49077 9.09677 1.67902 11.2168 2.17527 13.2724C2.71523 15.5599 3.71636 17.7082 5.11514 19.5812C6.51391 21.4542 8.27976 23.0113 10.3009 24.1534L5.30543 14.3011L1.61691 6.98405ZM6.48127 14.5636L11.3964 24.2438L16.3539 14.5636H6.48127ZM17.6798 19.5747C19.0789 17.7034 20.0821 15.5576 20.6261 13.2724C21.1306 11.2124 21.3219 9.08578 21.1929 6.96682L17.5086 14.2839L12.4962 24.1448C14.5156 23.0019 16.2805 21.4458 17.6798 19.5747Z" fill="white"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M29.3202 23.1327C29.4431 23.2609 29.5903 23.3622 29.7528 23.4305C29.9152 23.4987 30.0896 23.5325 30.2652 23.5296H36.9067V22.61H30.2652C30.208 22.6121 30.1509 22.6022 30.0976 22.5809C30.0443 22.5594 29.9959 22.527 29.9553 22.4856C29.9149 22.4442 29.8832 22.3947 29.8622 22.3402C29.8413 22.2858 29.8316 22.2274 29.8337 22.1689V16.7172C29.8327 16.6602 29.8431 16.6037 29.8643 16.551C29.8854 16.4983 29.9169 16.4505 29.9567 16.4106C29.997 16.368 30.0452 16.3342 30.0986 16.311C30.152 16.2879 30.2094 16.276 30.2674 16.2761H36.9067V15.3543H30.2652C30.09 15.3534 29.9164 15.388 29.7545 15.456C29.5924 15.5241 29.4452 15.6242 29.3212 15.7507C29.1972 15.8772 29.099 16.0276 29.0322 16.1931C28.9653 16.3586 28.9312 16.5359 28.9318 16.715V22.1689C28.9293 22.3481 28.9624 22.5259 29.0292 22.6915C29.0959 22.8572 29.1949 23.0073 29.3202 23.1327ZM42.0508 15.3565V23.5296H49.3504V22.61H42.9527V19.9084H48.0924V18.9777H42.9527V16.2761H49.3504V15.3543L42.0508 15.3565ZM54.4858 23.5296V15.3697H61.151C61.5038 15.3726 61.8413 15.5171 62.0908 15.7721C62.3402 16.0271 62.4816 16.3721 62.4844 16.7326V19.1255C62.4861 19.3048 62.4526 19.4827 62.3859 19.6487C62.3191 19.8145 62.2206 19.9651 62.0961 20.0914C61.9731 20.2197 61.8259 20.321 61.6634 20.3893C61.501 20.4575 61.3266 20.4912 61.151 20.4884H59.9297L62.4391 23.5142H61.2503L58.7537 20.4884L55.3877 20.4752V23.5296H54.4858ZM55.8192 19.5599H61.151C61.2066 19.5606 61.2619 19.5497 61.3134 19.5281C61.3649 19.5065 61.4117 19.4746 61.4509 19.4342C61.4908 19.3945 61.5223 19.3467 61.5435 19.294C61.5646 19.2413 61.575 19.1846 61.5739 19.1277V16.7304C61.575 16.6735 61.5646 16.6169 61.5435 16.5642C61.5223 16.5114 61.4908 16.4637 61.4509 16.4239C61.4135 16.3803 61.3674 16.3455 61.3156 16.3219C61.2638 16.2983 61.2076 16.2865 61.151 16.2872H55.8192C55.7611 16.2874 55.7036 16.2996 55.6502 16.3231C55.5968 16.3466 55.5486 16.3809 55.5085 16.4239C55.4693 16.4641 55.4384 16.512 55.4177 16.5646C55.3969 16.6172 55.3867 16.6737 55.3877 16.7304V19.1255C55.3867 19.1823 55.3969 19.2386 55.4177 19.2913C55.4384 19.344 55.4693 19.3918 55.5085 19.432C55.593 19.5123 55.7039 19.5572 55.8192 19.5578V19.5599ZM70.7806 16.2761V23.5296H71.6831V16.2761H75.2279V15.3543H67.2296V16.2739L70.7806 16.2761ZM79.975 15.3543H80.8856V23.5275H79.975V15.3543ZM86.3705 15.3543V23.5275H87.2812V19.9084H89.8571L92.8349 23.5296H94.0003L90.6495 19.4431L94.0003 15.3675H92.8456L89.8684 18.9888H87.283V15.3543H86.3705Z" fill="white"></path>
                            <path d="M33.4986 9.83022L31.5303 5.1348H30.9483L28.9766 9.83022H29.6201L30.0617 8.76685H32.4135L32.8551 9.83022H33.4986ZM31.2154 5.99448L31.2359 5.91507H31.2427L31.2599 5.99448L32.1978 8.24897H30.2774L31.2154 5.99448Z" fill="white"></path>
                            <path d="M37.078 9.92689C38.2042 9.92689 39.0052 9.14317 39.0052 8.01074V5.13135H38.3993V7.97277C38.3993 8.73923 37.9064 9.36068 37.078 9.36068C36.229 9.36068 35.7532 8.72887 35.7532 7.96586V5.13135H35.1507V8.01074C35.1507 9.17424 35.9928 9.92689 37.078 9.92689Z" fill="white"></path>
                            <path d="M43.2966 9.83022C44.7652 9.83022 45.7408 8.89114 45.7408 7.47906C45.7408 6.07388 44.7583 5.1348 43.2863 5.1348H41.585V9.83022H43.2966ZM42.1806 5.6803H43.2692C44.4263 5.6803 45.128 6.40187 45.128 7.49287C45.128 8.58041 44.4228 9.27782 43.2829 9.27782H42.1806V5.6803Z" fill="white"></path>
                            <path d="M48.6663 9.83022V5.1348H48.0603V9.83022H48.6663Z" fill="white"></path>
                            <path d="M52.9508 9.83022V5.68375H54.4262V5.1348H50.8729V5.68375H52.3449V9.83022H52.9508Z" fill="white"></path>
                            <path d="M59.7616 9.83022V9.27782H57.2421V7.70347H59.4056V7.17869H57.2421V5.69065H59.7308V5.1348H56.6362V9.83022H59.7616Z" fill="white"></path>
                            <path d="M63.7551 9.83022C65.2237 9.83022 66.1993 8.89114 66.1993 7.47906C66.1993 6.07388 65.2169 5.1348 63.7449 5.1348H62.0435V9.83022H63.7551ZM62.6392 5.6803H63.7278C64.8848 5.6803 65.5866 6.40187 65.5866 7.49287C65.5866 8.58041 64.8814 9.27782 63.7415 9.27782H62.6392V5.6803Z" fill="white"></path>
                            <path d="M73.8372 9.83022C74.5629 9.83022 75.2407 9.35377 75.2407 8.50445C75.2407 7.9555 74.8471 7.49287 74.3541 7.34786C74.6999 7.19595 74.9703 6.80236 74.9703 6.3708C74.9703 5.63541 74.4157 5.1348 73.6421 5.1348H71.6532V9.83022H73.8372ZM72.266 5.66649H73.6181C74.0289 5.66649 74.3576 5.99793 74.3576 6.41568C74.3576 6.84034 74.0289 7.17178 73.6147 7.17178H72.266V5.66649ZM72.266 7.64478H73.7961C74.2583 7.64478 74.6177 8.01074 74.6177 8.45957C74.6177 8.93602 74.2549 9.29163 73.7893 9.29163H72.266V7.64478Z" fill="white"></path>
                            <path d="M79.2856 9.83022L79.2822 8.02801L81.165 5.1348H80.4461L78.9844 7.48251H78.981L77.5124 5.1348H76.7969L78.6797 8.03146V9.83022H79.2856Z" fill="white"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M86.5645 4.41667C87.9834 3.97475 89.5114 3.38552 90.0571 2.75946C90.6028 3.38552 92.1309 3.97475 93.5498 4.41667C93.6589 6.03705 93.1131 9.60925 90.0571 10.935C87.0011 9.60925 86.4553 6.03705 86.5645 4.41667ZM89.3935 7.46317L91.5405 5.29775C91.6829 5.15412 91.9166 5.15412 92.059 5.29775C92.2014 5.44137 92.2014 5.67338 92.059 5.81701L89.6527 8.24389C89.5103 8.38752 89.2803 8.38752 89.1379 8.24389L88.1922 7.29008C88.0498 7.14645 88.0498 6.91445 88.1922 6.77082C88.3346 6.6272 88.5646 6.6272 88.707 6.77082L89.3935 7.46317Z" fill="#1DC872"></path>
                        </svg>
                    </a>*/}
                    <div>
                        <button className="btn btn-wallet" scale="sm">
                            <svg viewBox="0 0 24 24" width="24px" color="contrast" xmlns="http://www.w3.org/2000/svg" className="fill-white YIGJj" style={{cursor: "pointer"}}>
                                <g opacity="0.56">
                                    <path d="M18.6667 7.625L6 7.625C5.82319 7.625 5.65362 7.55586 5.5286 7.43279C5.40357 7.30972 5.33333 7.1428 5.33333 6.96875C5.33333 6.7947 5.40357 6.62778 5.5286 6.50471C5.65362 6.38164 5.82319 6.3125 6 6.3125L16.6667 6.3125C16.8435 6.3125 17.013 6.24336 17.1381 6.12029C17.2631 5.99722 17.3333 5.8303 17.3333 5.65625C17.3333 5.4822 17.2631 5.31528 17.1381 5.19221C17.013 5.06914 16.8435 5 16.6667 5L6 5C5.46975 5.0006 4.9614 5.20821 4.58646 5.57729C4.21151 5.94638 4.00061 6.44679 4 6.96875L4 17.0312C4.00061 17.5532 4.21151 18.0536 4.58646 18.4227C4.9614 18.7918 5.46975 18.9994 6 19H18.6667C19.0202 18.9996 19.3591 18.8612 19.609 18.6151C19.859 18.3691 19.9996 18.0355 20 17.6875V8.9375C19.9996 8.58953 19.859 8.25592 19.609 8.00986C19.3591 7.76381 19.0202 7.6254 18.6667 7.625ZM16.3333 14.5156C16.1356 14.5156 15.9422 14.4579 15.7778 14.3497C15.6133 14.2416 15.4851 14.0878 15.4095 13.908C15.3338 13.7281 15.314 13.5302 15.3525 13.3392C15.3911 13.1483 15.4864 12.9729 15.6262 12.8352C15.7661 12.6975 15.9443 12.6038 16.1382 12.5658C16.3322 12.5278 16.5333 12.5473 16.716 12.6218C16.8987 12.6963 17.0549 12.8225 17.1648 12.9844C17.2747 13.1462 17.3333 13.3366 17.3333 13.5313C17.3333 13.7923 17.228 14.0427 17.0404 14.2273C16.8529 14.4119 16.5985 14.5156 16.3333 14.5156Z"></path>
                                </g>
                            </svg>Connect wallet
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;