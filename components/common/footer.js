import '../../styles/Main.module.scss';

function FooterComponent() {
    return (
    <footer>
    <div className="container">
        <div className="row">
            <div className="col-12 col-md">
                <img src="/images/icon.svg" alt="AlmaLinux OS icon" className="mb-3" height="64" />
                <div className="d-block mb-3">© 2022 AlmaLinux OS Foundation</div>
            </div>
            <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled">
                    <li><a href="https://wiki.almalinux.org">Wiki</a></li>
                    <li><a href="https://github.com/AlmaLinux/">GitHub</a></li>
                    <li><a href="https://bugs.almalinux.org/">Bugs</a></li>
                    <li><a href="https://repo.almalinux.org/">Repository</a></li>
                    <li><a href="https://mirrors.almalinux.org/isos.html">Downloads</a></li>
                    <li><a href="/members/">Membership</a></li>
                    <li><a href="/elevate">ELevate</a></li>
                    <li><a href="https://lists.almalinux.org/">Mailing Lists</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Community</h5>
                <ul className="list-unstyled">
                    <li><a href="https://chat.almalinux.org">Chat</a></li>
                    <li><a href="https://almalinux.discourse.group/">Forums</a></li>
                    <li><a href="https://www.reddit.com/r/AlmaLinux/">Reddit</a></li>
                    <li><a href="https://twitter.com/AlmaLinux">Twitter</a></li>
                    <li><a href="https://fosstodon.org/@almalinux" rel="me">Mastodon</a></li>
                    <li><a href="https://www.facebook.com/AlmaLinux/">Facebook</a></li>
                    <li><a href="https://www.linkedin.com/company/almalinuxos/">LinkedIn</a></li>
                    <li><a href="ircs://irc.libera.chat:6697/almalinux">#almalinux IRC</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Legal</h5>
                <ul className="list-unstyled">
                    <li><a href="/p/legal-notice/">Legal Notice</a></li>
                    <li><a href="/p/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="/p/terms-of-service/">Terms of Service</a></li>
                    <li>
                        <a href="/p/the-almalinux-os-licensing-policy/">
                            Licensing Policy
                        </a>
                    </li>
                    <li>
                        <a href="/p/the-almalinux-os-trademark-usage-policy/">
                            Trademark Usage Policy
                        </a>
                    </li>
                    <li>
                        <a href="/p/foundation-bylaws/">
                            Foundation Bylaws
                        </a>
                    </li>
                    <li>
                        <a href="/p/membership-committee/">
                            Membership Committee
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>

)

}

export default FooterComponent
