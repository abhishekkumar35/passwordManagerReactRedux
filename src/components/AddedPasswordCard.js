import React, { Component } from "react";
import { connect } from "react-redux";
import { url_delete } from "../constants";
import { deletePassword } from "../store/actions";

class AddedPasswordCard extends Component {
  randomColor = () => {
    let arr = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let newColor = "";

    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      newColor += arr[randomIndex];
    }

    return "#" + newColor;
  };
  render() {
    return (
      <div className="flex  rounded border-[#9caae9] text-black border-2 p-5 m-3">
        <div id="flexfull" className="flex  justify-between w-full">
          <div className="flex">
            <div className="flex items-center">
              <div
                style={{ backgroundColor: this.randomColor() }}
                className="w-12 h-12 border-2 border-cyan-300 rounded-full flex justify-center items-center "
              >
                <span>Y</span>
              </div>
            </div>
            <div className="flex flex-col mx-4 text-white">
              <div>
                <p>{this.props.website}</p>
              </div>
              <div>
                <p>{this.props.username}</p>
              </div>
              <div>
                <p>
                  {this.props.showPassword
                    ? "***********"
                    : this.props.password}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-self-end  items-center">
            <div className="w-8 h-8 flex">
              <button
                onClick={() => {
                  this.props.deleteHandler({
                    username: this.props.username,
                    password: this.props.password,
                    website: this.props.website,
                  });
                }}
              >
                <img src={url_delete} alt="delete" className="w-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    deleteHandler: (password) => dispatch(deletePassword(password)),
  };
}
function mapStateToProps(state) {
  return {
    showPassword: state.passwordReducer.showPassword,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddedPasswordCard);
