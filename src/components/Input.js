import React from "react";
import { connect } from "react-redux";
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="flex bg-white m-2 h-10 rounded md:w-64 md:float-right">
        <div className="border-r-2 flex justify-center w-1/6">
          <img
            src={this.props.src}
            alt={this.props.alt}
            className="w-2/3 h-5/6 mt-1"
          />
        </div>
        <hr className="border-[1px]" />
        <div className="w-5/6  flex items-center">
          <div>
            <input
              placeholder={this.props.placeholder}
              className="pl-2 outline-none text-black w-full"
              value={this.props.value}
              onChange={(e) => this.props.OnChange(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Input);
