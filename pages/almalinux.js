import Head from 'next/head';
import HeaderComponent from "../components/common/header";
import FooterComponent from "../components/common/footer";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

import '../styles/Main.module.scss';

export default function Home() {

  const { locales } = useRouter();
  const intl = useIntl();

  return (
<div>
<HeaderComponent></HeaderComponent>
<div className="al-body-container">
    
    <section className="al-page-index">
        <div className="container px-0 al-py-lg">
            <div className="row flex-lg-row-reverse align-items-center py-2 py-md-5">
                <div className="d-none d-lg-block col-10 col-sm-8 col-lg-6">
                    

                        <img src="/images/hero.png" className="d-block mx-lg-auto img-fluid" alt="Hero image" width="624" height="430" />

                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-5 mb-md-3">
                        <FormattedMessage id="hello world" />
                        Free Linux OS for the community, by the community
                    </h1>
                    <p className="lead mb-5 mb-md-3">
                        An Open Source, community owned and governed, forever-free enterprise Linux distribution, focused on long-term stability, providing a robust production-grade platform. AlmaLinux OS is 1:1 binary compatible with RHEL® and pre-Stream CentOS.
                    </p>
                    <div className="d-grid gap-3 d-md-flex justify-content-md-start pt-3">
                        <a href="/contribute/" className="btn btn-lg px-xl-4 px-lg-2   me-md-2 al-hero-cta-primary">
                            <i className="bi bi-people pe-1"></i>
                            Contribute
                        </a>
                        <a href="https://mirrors.almalinux.org/isos.html" className="btn btn-lg px-xl-4 px-lg-2 al-hero-cta-secondary">
                            <i className="bi bi-download pe-1"></i>
                            Download
                        </a>
                        <a href="https://github.com/AlmaLinux/almalinux-deploy" className="btn btn-lg px-xl-4 px-lg-2   al-hero-cta-tertiary">
                            <img src="/images/icon-migrate.svg" alt="Icon" className="pe-1" />
                            Migrate
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="al-index-community-container">
            <div className="container al-py-md">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-2 py-md-5">
                    <div className="col d-flex align-items-stretch">
                        <i className="bi bi-github al-index-community-icon"></i>
                        <div className="al-index-community-content-wrap">
                            <h4 className="fw-bold mb-0 pb-2">GitHub</h4>
                            <p>
                                Our GitHub organization contains source code and tools used to build AlmaLinux OS and related infrastructure.
                            </p>
                            <div className="pt-1" >
                                <a href="https://github.com/AlmaLinux/" className="btn btn-primary al-community-cta">
                                    Explore
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-items-stretch">
                        <img loading="lazy" className="al-index-community-icon img" src="/images/icon-reddit.svg" alt="Reddit"/>
                        <div className="al-index-community-content-wrap">
                            <h4 className="fw-bold mb-0 pb-2">Reddit</h4>
                            <p>
                                Join our vibrant Reddit community, interact with other AlmaLinux OS users, receive updates, find and provide help.
                            </p>
                            <div className="pt-1" >
                                <a href="https://www.reddit.com/r/almalinux" className="btn btn-primary al-community-cta reddit">
                                    Join
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-items-stretch">
                        <i className="bi bi-chat-dots al-index-community-icon"></i>
                        <div className="al-index-community-content-wrap">
                            <h4 className="fw-bold mb-0 pb-2">
                                Community chat
                            </h4>
                            <p>
                                Join a real time discussion with other AlmaLinux OS community members, governance team and AlmaLinux OS developers.
                            </p>
                            <div className="pt-1" >
                                <a href="https://chat.almalinux.org" className="btn btn-primary al-community-cta">
                                    Engage
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-items-stretch">
                        <i className="bi bi-journals al-index-community-icon"></i>
                        <div className="al-index-community-content-wrap">
                            <h4 className="fw-bold mb-0 pb-2">Community forums</h4>
                            <p>
                                Ask questions, get answers and contribute community support to others in AlmaLinux OS community and developers alike.
                            </p>
                            <div className="pt-1">
                                <a href="https://almalinux.discourse.group" className="btn btn-primary al-community-cta">
                                    Discover
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="al-index-about">
            <div className="container al-py-md">
                <div className="row d-flex align-items-center justify-content-center py-2 py-md-5">
                    <div className="col-12 col-md-12">
                        <h2 className="pb-3">About AlmaLinux OS</h2>
                        <p>
                            AlmaLinux OS is an open-source, community-driven Linux operating system that fills the gap left by the discontinuation of the CentOS Linux stable release. AlmaLinux OS is a 1:1 binary compatible clone of RHEL® guided and built by the community.
                        </p>
                        <p>
                            As a standalone, completely free OS, AlmaLinux OS enjoys $1M in annual sponsorship from CloudLinux Inc and support from other sponsors. Ongoing development efforts are governed by the members of the community.
                        </p>
                        <p>
                            The AlmaLinux OS Foundation is a 501(c)(6) non-profit created for the benefit of the AlmaLinux OS community.
                        </p>
                    </div>
                </div>
            </div>
        </div>


        
        

            <div className="container">
                <h2 className="pb-2 mb-5 text-center border-bottom">
                    Backed by
                </h2>
                <div className="row row-cols-2 row-cols-sm-4 row-cols-md-6 g-5 al-backed-by-list">
                    
                        <a href="https://www.cloudlinux.com">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/brands/cloudlinux.svg" alt="CloudLinux" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://codenotary.com">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/brands/light.svg" alt="Codenotary" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://aws.amazon.com">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/brands/aws.svg" alt="Amazon AWS" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://azure.microsoft.com">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/brands/azurelarge1.svg" alt="Microsoft Azure" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://www.arm.com">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/brands/arm.svg" alt="ARM" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://www.equinix.com">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/brands/equinix.svg" alt="Equinix" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://cpanel.net">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/d0/a2/0b/cpanel.svg" alt="CPanel" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://www.hivelocity.net">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/ba/df/b0/hivelocity.svg" alt="Hivelocity" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://osuosl.org">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/10/72/a4/osuosl.svg" alt="OSU Open Source Lab" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://www.plesk.com">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/e5/2e/e6/plesk.svg" alt="Plesk" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://mattermost.com">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/33/66/d4/mattermost.svg" alt="Mattermost" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://www.algolia.com">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/ef/42/93/logo-algolia-nebula-blue-full_a52auc4.svg" alt="Algolia" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://rackspeed.de">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/26/75/2f/rackspeed-logo-reverse.svg" alt="RackSpeed" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://www.knownhost.com/">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/b8/3a/9c/KnownHostLogoFLATWHITE.svg" alt="KnownHost" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://www.amd.com/">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/fd/ff/4f/AMD_Logo.svg" alt="AMD" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://black.host/">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/6f/68/dc/blackhost_logo.svg" alt="BlackHOST" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://www.cloudfest.com/">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/27/6f/92/Cloudfest_logo_2022_white_1.svg" alt="CloudFest" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="http://procomputers.com/">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/ce/73/7f/procomputers_logo_white.svg" alt="ProComputers" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://orcharhino.com/en/">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/c4/d0/9d/167500144-1f877ea7-9b48-40cc-8363-7f795ce585fe.svg" alt="Orcharhino" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://world4you.com">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/42/07/89/w4y_logo_rgb_weiss.svg" alt="World4You" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://www.keepsec.ca/">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/4c/0d/85/keepsec-logo-white.svg" alt="Keepsec Technologies" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://www.hawkhost.com">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/5e/be/e1/HH-AllWhiteAlma.svg" alt="HawkHost" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                        <a href="https://www.openlogic.com/">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-backer-logo-container">
                                <img loading="lazy" src="/media/b1/94/44/logo-openlogic-tagline-white-no.svg" alt="OpenLogic" className="al-backer-logo"/>
                            </div>
                        </a>
                    
                </div>
            </div>
        
        <div className="al-index-feature-container">
            <div className="container al-py-md">
                <div className="row row-cols-1 row-cols-md-3 pt-2 pt-md-5">
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-battery-charging al-index-feature-icon"></i>
                        <div>
                            <h4 className="fw-bold mb-0 pb-2">Production-ready</h4>
                            <p>
                                AlmaLinux OS is an enterprise-grade server OS and a stable Linux distribution with regular releases that come with a long support windows. You can rely on AlmaLinux OS to run any and every critical workloads.
                            </p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-people al-index-feature-icon"></i>
                        <div>
                            <h4 className="fw-bold mb-0 pb-2">Fully supported, always free</h4>
                            <p>
                                AlmaLinux OS Foundation members, sponsors and partners back the AlmaLinux OS with investments and long support commitments to ensure the distribution is free of limitations, fees and charges.
                            </p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-emoji-smile al-index-feature-icon"></i>
                        <div>
                            <h4 className="fw-bold mb-0 pb-2">Effortless to switch to</h4>
                            <p>
                                Switching distributions is usually costly and time-consuming, but that’s not the case when switching from CentOS and other RHEL® derivatives to AlmaLinux OS. Switching is easy - <a href="https://github.com/AlmaLinux/almalinux-deploy">read how.</a>
                            </p>
                        </div>
                    </div>
                </div>
            








            </div>
        </div>

        <div className="al-index-commercial-support al-py-lg">
            <div className="container">
                <h2 className="pb-2 mb-5 text-center border-bottom">
                    Commercial Support
                </h2>
                <div className="row row-cols-2 row-cols-sm-4 row-cols-md-6 g-5 al-commercial-supporter-list">
                    
                        <a href="https://tuxcare.com/linux-support-services/">
                            <div className="col d-flex flex-fill align-items-center justify-content-center al-commercial-supporter-logo-container">
                                <img loading="lazy" src="/brands/TuxCare_2.svg" alt="TuxCare" className="al-commercial-supporter-logo"/>
                            </div>
                        </a>
                    
                </div>
            </div>
        </div>


        <div className="al-index-faq">
            <div className="container al-py-lg">
                <h2 className="mb-5">
                    Answers to Key Questions
                </h2>
                <div className="accordion accordion-flush" id="accordionFAQ">
                    <div className="accordion-item mb-3" >
                       <h2 className="accordion-header" id="flush-heading-1">
                            <button 
                            className="accordion-button" 
                            type="button"  
                            
                            data-toggle="collapse" data-target="#flush-collapse-1" aria-expanded="true" aria-controls="flush-collapse-1">
                                Who is AlmaLinux OS for?
                            </button>                                
                        </h2>                           
                        <div id="flush-collapse-1" className="accordion-collapse collapse show" aria-labelledby="flush-heading-1" data-parent="#accordionFAQ" >
                         <div className="accordion-body">
                            Individuals and organizations that require an enterprise-grade, Fedora-like distribution but who do not want to or cannot pay for a RHEL® license. AlmaLinux OS is also a perfect replacement for anyone who currently relies on the CentOS stable release to achieve computing objectives.

                          </div>
                        </div>
                   </div>
                    
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="flush-heading-2">
                            <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#flush-collapse-2" aria-expanded="true" aria-controls="flush-collapse-2">
                                Why did we call it AlmaLinux OS?
                            </button>
                        </h2>
                        <div id="flush-collapse-2" className="accordion-collapse collapse" aria-labelledby="flush-heading-2" data-parent="#accordionFAQ" >
                            <div className="accordion-body">
                                    Alma means soul in Spanish and other Latin languages. Looking back, it is easy to see that Linux is as popular and pervasive as it is thanks to the efforts of a passionate, diverse developer community. This community is the soul of Linux, and everyone that relies on a Linux distribution is indebted to the efforts of the Linux community. That is why we called our new distribution AlmaLinux OS.

                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="flush-heading-3">
                            <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#flush-collapse-3" aria-expanded="true" aria-controls="flush-collapse-3">
                                 What motivated us?
                            </button>
                        </h2>
                        <div id="flush-collapse-3" className="accordion-collapse collapse" aria-labelledby="flush-heading-3" data-parent="#accordionFAQ" >
                            <div className="accordion-body">
                                We’re already doing it – experience with RHEL forks towards CloudLinux. We have the staff, the capabilities, the resources. Frankly: we want to put ourselves on the map re CloudLinux and KernelCare. It is worth the effort.

                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="flush-heading-4">
                            <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#flush-collapse-4" aria-expanded="true" aria-controls="flush-collapse-4">
                                How is the community protected from future course changes?
                            </button>
                        </h2>
                        <div id="flush-collapse-4" className="accordion-collapse collapse" aria-labelledby="flush-heading-4" data-parent="#accordionFAQ" >
                            <div className="accordion-body">
                                We are involving the community right through the process, including in the governing board. At all times, AlmaLinux OS will be free and open. The community can pick the project at any time.

                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="flush-heading-5">
                            <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#flush-collapse-5" aria-expanded="true" aria-controls="flush-collapse-5">
                                    Why should I rely on CloudLinux for a CentOS alternative?
                            </button>
                        </h2>
                        <div id="flush-collapse-5" className="accordion-collapse collapse " aria-labelledby="flush-heading-5" data-parent="#accordionFAQ">
                            <div className="accordion-body">
                                CloudLinux's core product, the CloudLinux OS, is a RHEL® fork that has been in place for over ten years. More than 4,000 companies including Dell, Liquid Web, and 1&amp;1 rely on the CloudLinux OS across more than 200,000 product installations. CloudLinux has proven experience in creating and maintaining a RHEL fork and have done so starting with RHEL release 5, right through to release 8. AlmaLinux OS is an opportunity for us to channel our expertise in RHEL into a Linux distribution that serves the broader community. Furthermore, we are including the Linux community right from the inception of AlmaLinux OS. Moving forward, community members will be on the governing board for the AlmaLinux OS project and involved in key decisions too. Finally, AlmaLinux OS will always be free and open source. The community can pick up and continue to develop AlmaLinux OS at any time.

                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="flush-heading-6">
                            <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#flush-collapse-6" aria-expanded="true" aria-controls="flush-collapse-6">
                                I want to convert from CentOS to AlmaLinux OS. How do I do it?
                            </button>
                        </h2>
                        <div id="flush-collapse-6" className="accordion-collapse collapse " aria-labelledby="flush-heading-6" data-parent="#accordionFAQ">
                            <div className="accordion-body">
                                Switching Linux distros can be a headache, but that is not the case when switching from CentOS to AlmaLinux OS. Just like CentOS, AlmaLinux OS is a 1:1 binary compatible fork of RHEL®, so switching is simple.

                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="flush-heading-7">
                            <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#flush-collapse-7" aria-expanded="true" aria-controls="flush-collapse-7">
                                Can I really port an entire fleet of servers from CentOS to AlmaLinux OS with a single command?
                            </button>
                        </h2>
                        <div id="flush-collapse-7" className="accordion-collapse collapse " aria-labelledby="flush-heading-7" data-parent="#accordionFAQ">
                            <div className="accordion-body">
                                    Yes, AlmaLinux OS is a 1:1 binary compatible fork of RHEL®, which means that your applications and services will remain compatible. For that reason, you can rapidly migrate any number of servers with just one command.

If you are using CentOS 7 or 8 and need help upgrading and migrating, check out [ELevate](https://almalinux.org/elevate).
                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="flush-heading-8">
                            <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#flush-collapse-8" aria-expanded="true" aria-controls="flush-collapse-8">
                                Until when will we support AlmaLinux OS 8?
                            </button>
                        </h2>
                        <div id="flush-collapse-8" className="accordion-collapse collapse " aria-labelledby="flush-heading-8" data-parent="#accordionFAQ">
                            <div className="accordion-body">
                                AlmaLinux OS partners has committed to supporting AlmaLinux OS 8 at least until 2029, including stable and thoroughly tested updates and security patches.

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className="al-index-newsletter">
            <div className="container al-py-lg">
                <div className="row">
                    <div className="col-12 col-md-6 mx-auto">
                        <h2 className="mb-2">
                            Stay updated!
                        </h2>
                        <h6 className="mb-4">
                            Subscribe to our Announce mailing list and never miss out on the latest in AlmaLinux OS development!
                        </h6>
						<div className="row">
							<a href="https://lists.almalinux.org/mailman3/lists/?all-lists">AlmaLinux Mailing lists</a>
						</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="al-index-press al-py-lg">
            <div className="container">
                <h2 className="pb-2 mb-3">
                    AlmaLinux OS in the Press
                </h2>
                <div className="row">
                    
                        <div className="al-index-press-item">
                            <figure>
                                <blockquote className="blockquote">AlmaLinux is a solid RHEL clone. The AlmaLinux Foundation, the non-profit behind AlmaLinux, is also working on the open-source ELevate Project. This is an effort to enable migration between major versions of RHEL derivatives.</blockquote>
                                <figcaption className="blockquote-footer">
                                    <a href="https://www.zdnet.com/article/centos-linux-8-is-about-to-die-what-do-you-do-next/">
                                        <cite title="ZDNet - CentOS Linux 8 is about to die. What do you do next?">ZDNet - CentOS Linux 8 is about to die. What do you do next?</cite>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    
                        <div className="al-index-press-item">
                            <figure>
                                <blockquote className="blockquote">To migrate from CentOS 8 to AlmaLinux OS, you can use a free tool called almalinux-deploy</blockquote>
                                <figcaption className="blockquote-footer">
                                    <a href="https://9to5linux.com/centos-linux-8-reached-end-of-life-its-time-to-migrate-to-an-alternative-os">
                                        <cite title="9 to 5 Linux - CentOS Linux 8 Reached End of Life, It’s Time to Migrate to an Alternative OS">9 to 5 Linux - CentOS Linux 8 Reached End of Life, It’s Time to Migrate to an Alternative OS</cite>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    
                        <div className="al-index-press-item">
                            <figure>
                                <blockquote className="blockquote">AlmaLinux was one of the first such alternatives, and it has quickly risen to the top of the heap.</blockquote>
                                <figcaption className="blockquote-footer">
                                    <a href="https://thenewstack.io/linux-and-cloud-native-security-almalinux/">
                                        <cite title="The New Stack - Linux and Cloud Native Security: AlmaLinux">The New Stack - Linux and Cloud Native Security: AlmaLinux</cite>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    
                        <div className="al-index-press-item">
                            <figure>
                                <blockquote className="blockquote">AlmaLinux very quickly became the CentOS replacement to beat. 48 hours after Red Hat released version 8.5 of Red Hat Enterprise Linux (RHEL), the developers released version 8.5 of AlmaLinux.</blockquote>
                                <figcaption className="blockquote-footer">
                                    <a href="https://thenewstack.io/linux-distros-year-in-review/">
                                        <cite title="The New Stack - Linux Distros: Year in Review">The New Stack - Linux Distros: Year in Review</cite>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    
                </div>
            </div>
    </div></section>

</div>
<FooterComponent></FooterComponent>
</div>
  );
}
