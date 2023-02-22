import React, { Component } from "react";
import { connect } from "react-redux";
import { addPassword } from "../store/actions";
import {
  url_password_manager_sm,
  url_website,
  url_password,
  url_username,
} from "../constants";
import Input from "./Input";

export class CreatePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      website: "",
      username: "",
      password: "",
    };
  }
  submitHandlerButton = (e) => {
    try {
      e.preventDefault();
      // console.log(this.state);
      this.props.submitHandler(this.state);

      // setTimeout(() => {
      //   console.log(this.props.passwords);
      // }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="flex flex-col bg-[#5863a5] p-4 rounded-lg m-6">
        <div className="flex justify-center md:hidden">
          <img
            src={url_password_manager_sm}
            alt="password manager"
            className="w-2/3"
          />
        </div>
        <div className="h-300 bg-[#454f84] rounded pb-4">
          <div className="p-5">
            <form>
              <div className="md:flex flex-col justify-center">
                <div className="md:flex md:justify-center">
                  <legend className="ml-2 text-white font-bold">
                    Add New password
                  </legend>
                </div>
                <div className="md:flex justify-center">
                  <Input
                    placeholder="Enter Website"
                    src={url_website}
                    alt="website"
                    value={this.state.website}
                    OnChange={(e) => {
                      this.setState({ ...this.state, website: e.target.value });
                    }}
                  />
                </div>
                <div className="md:flex justify-center">
                  <Input
                    placeholder="Enter Username"
                    src={url_username}
                    alt="username"
                    value={this.state.username}
                    OnChange={(e) => {
                      this.setState({
                        ...this.state,
                        username: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="md:flex justify-center">
                  <Input
                    placeholder="Enter Password"
                    src={url_password}
                    alt="password"
                    value={this.state.password}
                    OnChange={(e) => {
                      this.setState({
                        ...this.state,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="md:flex justify-center">
                  <button
                    type="submit"
                    className="float-right mr-3 bg-blue-600 px-3 py-1 rounded text-white"
                    onClick={this.submitHandlerButton}
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    submitHandler: (state) => dispatch(addPassword(state)),
  };
}

function mapStateToProps(state) {
  return {
    passwords: state.passwordReducer.passwords,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePassword);
