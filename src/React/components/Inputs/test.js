import React, { Component } from "react";
import Web3 from "web3";
import { Table } from "reactstrap";
import FileIcon, { defaultStyles } from "react-file-icon";
import FileUpload from '../../../abis/FileUpload.json'

const IPFS = require("ipfs-api");
const ipfs = new IPFS({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});

export class TestReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipfsHash: "",
      storageValue: 0,
      web3: null,
      buffer: null,
      account: "",
      contract: null,
      fileHash: "",
    };
  }

  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  //Connects Front-end with Metamask
  async loadWeb3() {
    //Modern Dapp Browsers
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    //Legacy Dapp Browsers
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    //Non Dapp-Browsers
    else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    //load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    console.log(this.state.account);
    const networkId = await web3.eth.net.getId();
    const networkData = FileUpload.networks[networkId];
    if (networkData) {
      const contract = web3.eth.Contract(FileUpload.abi, networkData.address);
      console.log(contract);
      this.setState({ contract });
      console.log(this.state.contract);
      const fileHash = await contract.methods.get().call();
      console.log("file Hash : "+fileHash);
      this.setState({fileHash});
    } else {
      window.alert("Marketplace contract not deployed to detect network");
    }

    // const abi = Marketplace.abi
    // const address = Marketplace.networks[networkId].address
    // const marketplace = web3.eth.Contract(abi, address)
    // console.log(marketplace)
  }

  captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log(this.state.buffer);
    };
  };

  onSubmit = async (event) => {
    // STEP 1: Submit the fie/Form to IPFS and get Hash key
    event.preventDefault();
    console.log("Submitting the File....");
    await ipfs.add(this.state.buffer, (error, result) => {
      if (error) {
        console.error(error);
      }

      // console.log(result)
      this.setState({ ipfsHash: result[0].hash });
      console.log("ipfsHash: ", this.state.ipfsHash);

      // STEP 2: Store a file on BlockChain
      this.state.contract.methods
        .set(this.state.fileHash)
        .send({ from: this.state.account })
        .then((r) => console.log(r));
    });

    this.loadBlockchainData();
  };

  render() {
    return (
      <>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              padding: 30,
              borderRadius: 5,
              marginTop: "5%",
              borderColor: "gray",
              borderWidth: 1,
            }}
          >
            {/* <StyledDropZone onDrop={this.onSubmit}/> */}
            <form onSubmit={this.onSubmit}>
              <input type="file" onChange={this.captureFile} />
              <input
                type="submit"
                className="bg-lightBlue-600 px-4 py-2 rounded-lg"
              />
            </form>
          </div>
          <div
            style={{
              backgroundColor: "gray",
              display: "flex",
              marginTop: "5%",
              alignItems: "center",
              width: "80%",
              padding: 30,
            }}
          >
            <Table>
              <thead>
                <tr>
                  <th scope="row" className="p-5 text-lg font-bold text-white">
                    Type
                  </th>
                  <th className="text-left p-5 text-lg font-bold text-white">
                    File Name
                  </th>
                  <th className="text-right p-5 text-lg font-bold text-white">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="p-5">
                    <FileIcon
                      size={30}
                      extension="docx"
                      {...defaultStyles.docx}
                    />
                  </th>
                  <th className="text-left p-5">Reports.docx</th>
                  <th className="text-right p-5">{this.state.ipfsHash}</th>
                </tr>
                <tr>
                  <th className="p-5">
                    <FileIcon
                      size={30}
                      extension="pdf"
                      {...defaultStyles.docx}
                    />
                  </th>
                  <th className="text-left p-5">Medical Patient Report.pdf</th>
                  <th className="text-right p-5">{this.state.fileHash}</th>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </>
    );
  }
}

export default TestReport;
