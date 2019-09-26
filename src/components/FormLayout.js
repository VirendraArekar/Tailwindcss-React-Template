import React from 'react'

export default function FormLayout() {
	return (
		<div>
		   <div className="flex justify-center">
			<div className="w-full max-w-xs">
			<h1 className="text-center text-teal-700">Vertical Form</h1>
			  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
			    <div className="mb-4">

			      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
			        Username
			      </label>
			      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
			    </div>
			    <div className="mb-6">
			      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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

		<div>
		   <form className="w-full max-w-sm">
			  <div className="md:flex md:items-center mb-6">
			    <div className="md:w-1/3">
			      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
			        Full Name
			      </label>
			    </div>
			    <div className="md:w-2/3">
			      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe" />
			    </div>
			  </div>
			  <div className="md:flex md:items-center mb-6">
			    <div className="md:w-1/3">
			      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-username">
			        Password
			      </label>
			    </div>
			    <div className="md:w-2/3">
			      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-username" type="password" placeholder="******************" />
			    </div>
			  </div>
			  <div className="md:flex md:items-center mb-6">
			    <div className="md:w-1/3"></div>
			    <label className="md:w-2/3 block text-gray-500 font-bold">
			      <input className="mr-2 leading-tight" type="checkbox" />
			      <span className="text-sm">
			        Send me your newsletter!
			      </span>
			    </label>
			  </div>
			  <div className="md:flex md:items-center">
			    <div className="md:w-1/3"></div>
			    <div className="md:w-2/3">
			      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
			        Sign Up
			      </button>
			    </div>
			  </div>
			</form>
		</div>
		</div>
	)
}