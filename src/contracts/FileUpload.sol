pragma solidity 0.5.0;

contract FileUpload {
    string fileHash;

    // Write File Function
    function set(string memory _fileHash) public {
        fileHash = _fileHash;
    }

    //Read File Function
    function get() public view returns (string memory) {
        return fileHash;
    }
}

