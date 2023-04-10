import React from 'react';

function Banner({ bannerTitle }) {
    return (
        <div>
            <section id="banner">
                <div class="container">
                    <p>Use this space for <strong>profound thoughts</strong>.<br />
                        Or an enormous ad. Whatever.</p>
                    {/* {bannerTitle.map((nav) => {
                        return <Banner>
                            title = {nav.title}
                        </Banner>
                    })} */}
                </div>
            </section>
        </div>
    )
}

export default Banner;
