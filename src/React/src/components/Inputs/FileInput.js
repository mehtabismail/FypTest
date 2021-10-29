import React, { Component } from 'react';

// import { create } from 'ipfs-http-client';
// const ipfs = new create({ host: 'ipfs.infura.io', port: '5001', protocol: 'https'})

const IPFS = require('ipfs-api')
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

export class FileInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buffer: null,
      ipfsHash: ''
    }
  }
  captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log(this.state.buffer)
    }
  };

  // Example URL: https://ipfs.infura.io/ipfs/QmcjMRMyhzzY91wjgTjwZa6asA2JqRDJQJq8eb7FjTeNHY
  onSubmit = async (event) => {
    // STEP 1: Submit the fie/Form to IPFS and get Hash key
    event.preventDefault();
    console.log("Submitting the File....")
    await ipfs.add(this.state.buffer, (error, result) => {
      if (error) {
        console.error(error);
      }

      // console.log(result)
      this.setState({ ipfsHash: result[0].hash })
      console.log('ipfsHash: ', this.state.ipfsHash)

      // STEP 2: Store a file on BlockChain
    })
  }

  render() {
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white-700">
          <div className="bg-white rounded-t mb-0 px-4 py-3 ">
            <div className="bg-white flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1 bg-white">
                <div>
                  <form onSubmit={this.onSubmit} >
                    <input type="file" onChange={this.captureFile} />
                    <input type="submit" className="bg-lightBlue-600 px-4 py-2 rounded-lg" />
                  </form>
                  {/* <iframe src={this.state.ipfsHash} /> */}
                </div>
                <dv>
                  <img src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} alt="" />
                </dv>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FileInput
