import React, { useState } from 'react';

const Contact = () => {
    //To store user input data here
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: ""
    });
    //We nedd to access the user input data in form so we create state
    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    // when click on submit button page refresh so to stop this e.prevent
    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My full name is ${data.fullname}.Phone number is ${data.phone}.Email is ${data.email}. My Message is ${data.msg}. `
        );
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>

            </div>
            <div className="container contact_div">
                <div className="row">
                    {/* col-md-6 defines 6 columns in page instead of 12 by default */}
                    <div className="col-md-6 col-10 mx-auto">

                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Enter Your Full Name"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                />
                                <div id="emailHelp" class="form-text"></div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Enter Your Phone Number"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                />

                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                ></textarea>

                            </div>

                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact;
