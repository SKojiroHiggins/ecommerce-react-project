import React from 'react';
import ReactFormInputValidation from "react-form-input-validation";

class contactBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: "",
                email: "",
                phone_number: ""
            },
            errors: {}
        };
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name: "required",
            email: "required|email",
            phone_number: "required|numeric|digits_between:10,12",
        });
        this.form.onformsubmit = (fields) => {
            // Do you ajax calls here.
        }
    }

    render() {
        return (<React.Fragment>
            <form onSubmit={this.form.handleSubmit}>
                <p>
                    <label className="contact">
                        Full Name
                  <input
                            type="text"
                            name="name"
                            onBlur={this.form.handleBlurEvent}
                            onChange={this.form.handleChangeEvent}
                            value={this.state.fields.name}
                            placeholder="Your name"
            
                        />
                    </label>
                    <label className="error">
                        {this.state.errors.name ? this.state.errors.name : ""}
                    </label>
                </p>

                <p>
                    <div className="email-space"></div>
                    <label className="contact email-label">
                        Email
                  <input
                            type="email"
                            name="email"
                            onBlur={this.form.handleBlurEvent}
                            onChange={this.form.handleChangeEvent}
                            value={this.state.fields.email}
                            placeholder="your_email@gmail.com"
                        />
                    </label>
                    <label className="error">
                        {this.state.errors.email ? this.state.errors.email : ""}
                    </label>
                </p>

                <label className="comment contact" for="comment">Comment:</label>
                              
                <textarea id="comment" name="comment" placeholder="Your comment here." ></textarea>
                <p>
                    <button type="submitButton">Submit</button>
                </p>
            </form>
        </React.Fragment>)
    }
}

export default contactBody;