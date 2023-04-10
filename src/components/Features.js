import React from 'react';
import jpg from '../images/pic02.jpg';
import png from '../images/pic03.jpg';
import img from '../images/pic03.jpg';

const Features = ({ featuresList }) => {
    return (
        <div>
            <section id="features">
                <div class="container">
                    <header>
                        <h2>{featuresList.title}</h2>
                    </header>
                    <div class="row aln-center">
                        {featuresList.itemList.map(section => {
                            return (
                                <div class="col-4 col-6-medium col-12-small">
                                    <section>
                                        <a href="#" class="image featured"><img src={jpg} alt="" /></a>
                                        <header>
                                            <h3>Okay, so what is this?</h3>
                                        </header>
                                        <p>This is <strong>Strongly Typed</strong>, a free, fully responsive site template
                                            by <a href="http://html5up.net">HTML5 UP</a>. Free for personal and commercial use under the
                                            <a href="http://html5up.net/license">CCA 3.0 license</a>.</p>
                                    </section>
                                </div>
                            )
                        })}

                        <div class="col-12">
                            <ul class="actions">
                                <li><a href="#" class="button icon solid fa-file">Tell Me More</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features



// <Features>
// {Object.keys(featuresList).itemList.map((employee) => {
//     const list = (
//         <>
//             <ul>
//                 <li>title: {employee.title}</li>
//                 <li>subtitle: {employee.subtitle}</li>
//             </ul>
//             <hr />
//         </>
//     );
//     return list;
// })}
// </Features>