import Head from 'next/head';
import '../../styles/Main.module.scss';

function HeaderComponent() {
    return (
<div>
<Head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
    <meta content="ie=edge" http-equiv="X-UA-Compatible" />
    <title>AlmaLinux OS - Forever-Free Enterprise-Grade Operating System</title>
    <meta property="og:site_name" content="AlmaLinux OS" />
    <meta name="description" content="An Open Source, community owned and governed, forever-free enterprise Linux distribution." />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="alternate" type="application/rss+xml" title="RSS Feed for AlmaLinux OS" href="/feed/" />
    <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
    <link rel="manifest" href="/fav/site.webmanifest" />
    <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#0069da" />
    <link rel="shortcut icon" href="/fav/favicon.ico" />
    <meta name="msapplication-TileColor" content="#0069da" />
    <meta name="msapplication-config" content="/fav/browserconfig.xml" />
    <meta name="theme-color" content="#0f4266" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&amp;display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        <meta property="og:image" content="/images/hero.png" />
        <meta property="og:url" content="https://almalinux.org/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:locale" content="en" />
</Head>

<nav id="al-primary-navbar" className="al-primary-navbar navbar p-0 sticky-top navbar-expand-lg navbar-dark flex-column with-motd">

    <div className="container  my-3">
        <a className="navbar-brand" href="/">
            <img src="images/logo.svg" alt="AlmaLinux OS logo" width="165.93" height="32" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="main-navbar">
            <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="/blog/" style={{ "margin-top": "5px" }}>
                        Blog
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://wiki.almalinux.org" style={{ "margin-top": "5px" }}>
                        Wiki
                    </a>
                </li>
                <li className="nav-item dropdown ">
                    <a className="nav-link dropdown-toggle " id="navbarDropResources" data-toggle="dropdown" aria-expanded="false" style={{"margin-top": "3px"}}>
                        Resources
                    </a>
                    
                
                    <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-start" aria-labelledby="navbarDropResources">
                        <li>
                            <a className="dropdown-item" href="https://github.com/AlmaLinux/almalinux-deploy" style={{color: "aliceblue"}}>
                                Migrate from CentOS 8
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="https://bugs.almalinux.org" style={{color:"aliceblue"}}>
                                Report Bugs
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/members" style={{color:"aliceblue"}}>
                                Membership
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/elevate" style={{color:"aliceblue"}}>
                                ELevate
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="https://lists.almalinux.org/" style={{color:"aliceblue"}}>
                                Mailing Lists
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://shop.almalinux.org/?utm_source=almalinuxorg&amp;utm_medium=web&amp;utm_campaign=almalinuxorg_navbar" style={{"margin-top": "5px"}}>
                        Shop
                    </a>
                </li>
                <li className="nav-item dropdown ps-md-2">
                    <button className="btn nav-link dropdown-toggle al-language-switch" id="navbarDropLanguages" data-toggle="dropdown" aria-expanded="false" style={{"margin-top":"3px"}}>
                        <img src="/images/lang.svg" alt="Language" width="24" height="24" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-start" aria-labelledby="navbarDropLanguages">
                        
                        
                        
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/de/" hreflang="de">
                                     Deutsch
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link active" href="/" hreflang="en">
                                     English
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/es/" hreflang="es">
                                     español
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/fr/" hreflang="fr">
                                     français
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/he/" hreflang="he">
                                     עברית
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/it/" hreflang="it">
                                     italiano
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/ja/" hreflang="ja">
                                     日本語
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/lv/" hreflang="lv">
                                     latviešu
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/pl/" hreflang="pl">
                                     polski
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/pt/" hreflang="pt">
                                     Português
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/pt-br/" hreflang="pt-br">
                                     Português Brasileiro
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/ru/" hreflang="ru">
                                     Русский
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/sk/" hreflang="sk">
                                     Slovensky
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/sv/" hreflang="sv">
                                     svenska
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/tr/" hreflang="tr">
                                     Türkçe
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/uk/" hreflang="uk">
                                     Українська
                                </a>
                            </li>
                        
                            <li>
                                <a className="dropdown-item al-language-link " href="/zh-hans/" hreflang="zh-hans">
                                     简体中文
                                </a>
                            </li>
                        
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li className="al-translate-callout">
                            <a className="dropdown-item al-language-link" href="https://hosted.weblate.org/engage/almalinux/">
                                <i className="bi bi-pencil"></i>
                                Translate
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item ps-md-2">
                    <a className="nav-link btn btn al-download-button" href="https://mirrors.almalinux.org/isos.html">
                        <i className="bi bi-download pe-1 d-none d-xl-inline"></i>
                        Download
                    </a>
                </li>
            </ul>
        </div>
    </div>

<div id="al-motd" dir="ltr" data-nosnippet="" style={{display: "block", "letter-spacing": "0px"}}>
    <div className="container pl-3">
        <i className="bi bi-info-circle"></i>
        <div className="text">Introducing ELevate Project, an open source initiative to assist users perform migrations between different RHEL-derivative based distributions. <a href="/elevate">Read more</a></div>
    </div>
</div>

</nav>


</div>
);
}

export default HeaderComponent
