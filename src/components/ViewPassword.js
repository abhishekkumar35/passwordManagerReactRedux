import React from "react";
import { connect } from "react-redux";
import Input from "./Input";
import { url_search } from "../constants";
import AddedPasswordCard from "./AddedPasswordCard";
import { toggleShowPassword } from "../store/actions";

class ViewPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filteredArray: this.props.passwordArray, searchText: "" };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.passwordArray !== this.props.passwordArray) {
      this.setState({ filteredArray: this.props.passwordArray });
    }
  }

  handleSearch(e) {
    e.preventDefault();
    const searchText = e.target.value;
    this.setState({ searchText }, () => {
      if (searchText) {
        this.setState({
          filteredArray: this.props.passwordArray.filter((item) =>
            item.website.includes(searchText)
          ),
        });
      } else {
        this.setState({ filteredArray: this.props.passwordArray });
      }
    });
  }

  render() {
    return (
      <div className="m-6 p-2 md:p-6 bg-[#5863a5] rounded-lg">
        <div className="flex justify-between text-white">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex">
              <p> Your Passwords</p>
              <span className="mx-1 border-white border-2 rounded-lg w-1/6 md:w-6 text-center">
                {this.props.arrlen}
              </span>
            </div>
          </div>
          <div className="w-1/2 -mr-2">
            <Input
              src={url_search}
              placeholder="search"
              alt="search"
              value={this.state.searchText}
              OnChange={this.handleSearch}
            />
          </div>
        </div>
        <hr className="border-1 border-[#9caae9] md:my-3" />
        <div className="flex justify-end mr-2">
          <div className="md:my-4">
            <input
              type="checkbox"
              className="outline-none border-none mr-1"
              onChange={this.props.toggleShowPassword}
            />
            <label className="text-white ">Show Passwords</label>
          </div>
        </div>
        <div className="md:flex md:flex-wrap">
          {this.state.filteredArray.map((passwordObject) => {
            return (
              <AddedPasswordCard
                key={Math.floor(Math.random() * 20490 + 200)}
                username={passwordObject.username}
                password={passwordObject.password}
                website={passwordObject.website}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const passwordArray = state.passwordReducer.passwords;
  return { passwordArray: passwordArray, arrlen: passwordArray.length };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleShowPassword: () => dispatch(toggleShowPassword()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPassword);
