import React, { Component } from "react";
import CreatePassword from "./components/CreatePassword";
import ViewPassword from "./components/ViewPassword";
import { url_app_logo, url_password_manager_lg } from "./constants";

class App extends Component {
  render() {
    return (
      <div className="flex flex-col bg-[#9ca8ea] p-2">
        <div className="pt-3">
          <img
            src={url_app_logo}
            alt="app_logo"
            className="float-left w-1/4 ml-6"
          />
        </div>
        <div className="md:flex md:bg-[#5762a4] md:m-4 md:rounded-lg">
          <div className="md:w-1/2 ">
            <CreatePassword />
          </div>

          <div className="md:w-1/2 md:flex md:justify-center ">
            <div className="md:flex hidden  md:w-1/2">
              <img
                src={url_password_manager_lg}
                alt="password manager"
                className="md:w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <ViewPassword />
        </div>
      </div>
    );
  }
}

export default App;
