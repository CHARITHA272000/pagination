import React, { Component } from 'react'

export class Toolbox extends Component {
    render() {
        return (
            <div class="flex bg-green-300 justify-between border-green-700 mt-14 mx-10 py-4 rounded-lg border-2">
                <div class="text-blue-800 ml-5">
                 <span class="font-bold">n</span> Applications Selected
                </div> 
                <button>
                <div class="bg-blue-800 text-white mr-10 p-1 text-base  rounded-sm">
                <span class= "m-3">Action</span>
                </div>
                </button>
            </div>
        
        )
    }
}

export default Toolbox;