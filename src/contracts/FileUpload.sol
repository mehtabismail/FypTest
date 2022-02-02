pragma solidity 0.5.0;

contract FileUpload {
    string fileHash = "abc.png";

    // Write File Function
    function set(string memory _fileHash) public {
        fileHash = _fileHash;
    }

    //Read File Function
    function get() public view returns (string memory) {
        return fileHash;
    }
}

