import React from 'react'

export default function Grid() {
    return (
        <div className="justify-center">
          <div classNameName="container">
            <div className="flex mb-4">
              <div className="w-1/3 bg-gray-300 h-12"></div>
              <div className="w-1/3 bg-gray-500 h-12"></div>
              <div className="w-1/3 bg-gray-400 h-12"></div>
            </div>
          </div>
          <div className="container mx-auto h-full flex justify-end items-center">
            <div className="w-1/3">
              <div className="mb-4 p-8 border bg-gray-500">
                <h1 className="font-hairline mb-6 text-center">Login to our Website</h1>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Email</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
            </div>
          </div>
          <div className="container mx-auto h-full flex justify-start items-center">
            <div className="w-1/3">
              <div className="mb-4 p-8 border bg-gray-500">
                <h1 className="font-hairline mb-6 text-center">Login to our Website</h1>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Email</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
            </div>
          </div>
          <div className="w-full max-w-xs mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2019 Acme Corp. All rights reserved.
            </p>
          </div>
        </div>
        
    )
}
