import React, { Component } from 'react'

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({host: 'ipfs.infura.io', port: 5001, protocol: 'https'})


export class FileInput extends Component {

    constructor (props) {
        super(props);
        this.state = {
            buffer : null
        }
    }
    captureFile = (event)=> {
        event.preventDefault();
        const file = event.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file); 
        reader.onloadend = () => {
          this.setState({buffer: Buffer(reader.result)})
        }
      };

    render() {
          return (
            <>
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white-700">
                <div className="bg-white rounded-t mb-0 px-4 py-3 ">
                  <div className="bg-white flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1 bg-white">
                      <div>
                        <form>
                          <input type="file" onChange={this.captureFile} />
                          <input type="submit" className="bg-lightBlue-600 px-4 py-2 rounded-lg"/>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
    }
}

export default FileInput
