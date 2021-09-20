import React from "react";
import insta from "../static/img/footer/insta.png";
import fb from "../static/img/footer/fb.png";
import twitter from "../static/img/footer/twitter.png";
import "../static/css/footer.css";

const Footer = () => {
    return (
        <div>

            <div class="container">
                <footer class="py-2">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><a href=" " class="nav-link px-2 text-muted">Home</a></li>
                        <li class="nav-item"><a href=" " class="nav-link px-2 text-muted">Policy</a></li>
                        <li class="nav-item"><a href=" " class="nav-link px-2 text-muted">Menu</a></li>
                        <li class="nav-item"><a href=" " class="nav-link px-2 text-muted">FAQs</a></li>
                        <li class="nav-item"><a href=" " class="nav-link px-2 text-muted">About</a></li>
                    </ul>
                    <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
                </footer>
                <footer class="pt-0">

                    <div class="row d-flex justify-content-between">
                        <div class="col-4 ms-2">
                            <form>
                                <h5>Register for latest Dishes!</h5>
                                <p className="p">Monthly menu of whats new and exciting from us.</p>
                                <div class="d-flex w-100 gap-2">

                                    <button class="btn btn-outline-secondary" type="button">Sign In</button>
                                    <button class="btn btn btn-dark" type="button">Register</button>
                                </div>
                            </form>
                            <div class="d-flex justify-content-between py-4 my-4">
                                <ul class="list-unstyled d-flex" style={{ marginRight: "200px" }}>
                                    <span ><a class="link-dark mx-1" href=" "><img className="social" src={insta} alt="ins" width="40" height="40" /></a></span>
                                    <span><a class="link-dark mx-1" href=" "><img className="social" src={fb} alt="ins" width="40" height="40" /></a></span>
                                    <span><a class="link-dark mx-1" href=" "><img className="social" src={twitter} alt="ins" width="40" height="40" /></a></span>
                                </ul>
                            </div>
                        </div>
                        <div class="col-2">
                            <h5>Location</h5>
                            <p className="p"> Near Chaocke hall in UK hotel,Sanghai,Chimchan,Karaoke road,surpur,Washington Dc,USA.113456</p>
                        </div>

                        <div class="col-2">
                            <h5>Contact</h5>
                            <p className="p">Ph no: +91XXXXXX4323
                                Email:toaki@rest.gmail.com
                                FaxId: 34@kksign4
                            </p>



                        </div>

                    </div>


                </footer>
            </div >

        </div >
    )
}

export default Footer