import React from 'react'

const Header = ({ headerNavList }) => {
    return (
        <div>
            <section id="header">
                <div class="container">
                    <h1 id="logo"><a href="index.html">Strongly Typed</a></h1>
                    <p>A responsive HTML5 site template. Manufactured by HTML5 UP.</p>

                    <nav id="nav">
                        <ul>
                            {headerNavList.map(nav => {
                                const { title, dropDownlist } = nav
                                return (
                                    <li>
                                        <a href="#" class="icon fa-chart-bar"><span>{title}</span></a>
                                        {dropDownlist.length ? (
                                            <div>
                                                <div><a href="#">Lorem ipsum dolor</a></div>
                                                <div><a href="#">Magna phasellus</a></div>
                                            </div>
                                        ) : ""}
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                </div>
            </section>
        </div>
    )
}

export default Header;
