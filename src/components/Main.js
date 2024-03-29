import React from 'react';
import pic4 from '../images/pic04.jpg';
import pic5 from '../images/pic05.jpg';
import pic6 from '../images/pic05.jpg';
import pic7 from '../images/pic05.jpg';

function Main() {
    return (
        <div>
            <section id="main">
                <div class="container">
                    <div class="row">
                        <div id="content" class="col-8 col-12-medium">
                            <article class="box post">
                                <header>
                                    <h2><a href="#">I don’t want to say <strong>it’s the aliens</strong> ...<br />
                                        but it’s the aliens.</a></h2>
                                </header>
                                <a href="#" class="image featured"><img src={pic4} alt="" /></a>
                                <h3>I mean isn't it possible?</h3>
                                <p>Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit
                                    ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris
                                    sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada
                                    in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
                                    magna tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros
                                    consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
                                    justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet
                                    mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique.
                                    Curabitur leo nibh, rutrum eu malesuada in tristique.</p>
                                <ul class="actions">
                                    <li><a href="#" class="button icon solid fa-file">Continue Reading</a></li>
                                </ul>
                            </article>

                            <article class="box post">
                                <header>
                                    <h2><a href="#">By the way, many thanks to <strong>regularjane</strong>
                                        for these awesome demo photos</a></h2>
                                </header>
                                <a href="#" class="image featured"><img src={pic5} alt="" /></a>
                                <h3>You should probably check out her work</h3>
                                <p>Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit
                                    ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris
                                    sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada
                                    in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
                                    consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
                                    in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
                                    magna tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros
                                    consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
                                    justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet
                                    mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique.
                                    Curabitur leo nibh, rutrum malesuada.</p>
                                <p>Erat lorem ipsum veroeros consequat magna tempus lorem ipsum consequat
                                    Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit ligula
                                    vel quam viverra sit amet mollis tortor congue. Sed quis mauris sit amet
                                    magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada in,
                                    tristique at erat. Curabitur leo nibh, rutrum eu malesuada in, tristique
                                    at erat lorem ipsum dolor sit amet lorem ipsum sed consequat magna
                                    tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros consequat
                                    magna tempus.</p>
                                <ul class="actions">
                                    <li><a href="#" class="button icon solid fa-file">Continue Reading</a></li>
                                </ul>
                            </article>
                        </div>

                        <div id="sidebar" class="col-4 col-12-medium">
                            <section>
                                <ul class="divided">
                                    <li>
                                        <article class="box excerpt">
                                            <header>
                                                <span class="date">July 30</span>
                                                <h3><a href="#">Just another post</a></h3>
                                            </header>
                                            <p>Lorem ipsum dolor odio facilisis convallis. Etiam non nunc vel est
                                                suscipit convallis non id orci lorem ipsum sed magna consequat feugiat lorem dolore.</p>
                                        </article>
                                    </li>
                                    <li>
                                        <article class="box excerpt">
                                            <header>
                                                <span class="date">July 28</span>
                                                <h3><a href="#">And another post</a></h3>
                                            </header>
                                            <p>Lorem ipsum dolor odio facilisis convallis. Etiam non nunc vel est
                                                suscipit convallis non id orci lorem ipsum sed magna consequat feugiat lorem dolore.</p>
                                        </article>
                                    </li>
                                    <li>
                                        <article class="box excerpt">
                                            <header>
                                                <span class="date">July 24</span>
                                                <h3><a href="#">One more post</a></h3>
                                            </header>
                                            <p>Lorem ipsum dolor odio facilisis convallis. Etiam non nunc vel est
                                                suscipit convallis non id orci lorem ipsum sed magna consequat feugiat lorem dolore.</p>
                                        </article>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <ul class="divided">
                                    <li>
                                        <article class="box highlight">
                                            <header>
                                                <h3><a href="#">Something of note</a></h3>
                                            </header>
                                            <a href="#" class="image left"><img src={pic6} alt="" /></a>
                                            <p>Phasellus sed laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam
                                                viverra sit amet mollis tortor congue magna lorem ipsum dolor et quisque ut odio facilisis
                                                convallis. Etiam non nunc vel est suscipit convallis non id orci. Ut interdum tempus
                                                facilisis convallis. Etiam non nunc vel est suscipit convallis non id orci.</p>
                                            <ul class="actions">
                                                <li><a href="#" class="button icon solid fa-file">Learn More</a></li>
                                            </ul>
                                        </article>
                                    </li>
                                    <li>
                                        <article class="box highlight">
                                            <header>
                                                <h3><a href="#">Something of less note</a></h3>
                                            </header>
                                            <a href="#" class="image left"><img src={pic7} alt="" /></a>
                                            <p>Phasellus sed laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam
                                                viverra sit amet mollis tortor congue magna lorem ipsum dolor et quisque ut odio facilisis
                                                convallis. Etiam non nunc vel est suscipit convallis non id orci. Ut interdum tempus
                                                facilisis convallis. Etiam non nunc vel est suscipit convallis non id orci.</p>
                                            <ul class="actions">
                                                <li><a href="#" class="button icon solid fa-file">Learn More</a></li>
                                            </ul>
                                        </article>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
