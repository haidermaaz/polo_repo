import './Navbar.css';

const navarr = [
    {
        title: 'HOME',
        Id: 'home'
    },
    {
        title: 'LAYOUT',
        id: 'layout',
        submenu: [
            { title: 'topbar' },
            { title: 'header' },
            { title: 'main menu' },
            { title: 'page title' },
            { title: 'page menu' },
            { title: 'sidebars' },
            { title: 'footers' },
            { title: 'options' }
        ]
    },
    {
        title: 'FEATURES',
        id: 'features',
        submenu: [
            { title: 'sliders' },
            { title: 'widgets' },
            { title: 'page loaders' },
            { title: 'model auto open' },
            { title: 'cookie notify' },
            { title: 'shape dividers' },
            { title: 'menu labels' }
        ]
    },
    {
        title: 'ELEMENTS',
        id: 'elements'
    },
    {
        title: 'PAGES',
        id: 'pages',
        submenu: [
            { title: 'about us' },
            { title: 'about me' },
            { title: 'contactus' },
            { title: 'gallery' },
            { title: 'user pages' },
            { title: 'services' },
            { title: 'our team' },
            { title: 'our clients' },
            { title: 'maintenance' },
            { title: '404 page' },
            { title: '404 page parallax' },
            { title: '500 page' },
            { title: 'full width page' },
            { title: 'full width page wide' },
            { title: 'page with side bar' },
            { title: 'site map' },
            { title: 'FAQ' }

        ]
    },
    {
        title: 'PORTFOLIO',
        id: 'portfolio'
    },
    {
        title: 'BLOG',
        id: 'blog'
    },
    {
        title: 'SHOP',
        id: 'shop'
    }
];
const drop = () => {
    var element = document.getElementById("d-men");
    element.classList.toggle("hidden");
}
const Navbar = () => {
    return (
        <>
            <div className="row">
                <div className='navbar'>
                    <div className="col-lg-3">
                        <div className="logo">POLO</div>
                    </div>
                    <div className="col-lg-8  d-lg-block d-none">
                        <ul className='global-nav'>
                            {
                                navarr.map((item) => {
                                    return (
                                        <>
                                            <li>
                                                <a href="#">{item.title}</a>
                                                {item.submenu ?
                                                    <ul className='local-nav'>{item.submenu.map((inner) =>
                                                        <li><a href='#'>{inner.title}</a></li>)}</ul> : ""}
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                        <div className="toggle me-5 d-lg-none d-block">
                            <i className="fa-solid fa-bars" onClick={drop}></i>
                        </div>
                </div>
            </div>
            <div className=" d-men d-lg-none" id="d-men">
                <ul className="py-3 drop-ul">
                    {
                        navarr.map((item) => {
                            return (
                                <>
                                    <li>
                                        <a href="#">{item.title}</a>
                                        {item.submenu ?
                                            <ul className='local-nav'>{item.submenu.map((inner) =>
                                                <li><a href='#'>{inner.title}</a></li>)}</ul> : ""}
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Navbar;

