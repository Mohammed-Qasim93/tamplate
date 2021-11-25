import React from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

const Login = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 ">
      <form>
        <div className="w-96  h-screen mx-auto">
          <fieldset className="border-gray-400 rounded-md h-2/5 border-2 py-3 px-1">
            {/* <legend className="capitalize px-2">Login</legend> */}
            <div className="flex flex-col justify-between h-full px-4">
              <h2 className="text-center mt-4 -mb-4 text-3xl capitalize font-semibold">
                log in
              </h2>
              <div className="flex flex-col h-2/5 justify-evenly">
                <div className="flex justify-between items-center">
                  <Label text="email" elNme="email" />
                  <Input
                    className="border-2 w-3/4 p-1"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <Label text="password" elNme="password" />
                  <Input
                    className="border-2 w-3/4 p-1"
                    type="password"
                    name="password"
                  />
                </div>
              </div>
              <div className="flex justify-around items-center">
                <Button
                  text="Login"
                  className={`bg-gray-500 transition-all ease-in-out duration-200  hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded-md capitalize`}
                />
              </div>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Login;
