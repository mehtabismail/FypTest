pragma solidity ^0.5.0;

contract Marketplace{
    string public name;
    uint public productCount = 0;

    mapping(uint => Product) public products;

    struct Product {
        uint id;
        string name;
        uint price;
        address payable owner;
        bool purchased;
    }

    event ProductCreated(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );

    constructor () public {
        name = "Mehtab Ismail";
    }


    function createProduct(string memory _name, uint _price) public {
        //Require a valid name
        require(bytes(_name).length > 0);
        //Require a valid Price 
        require(_price > 0);
        //increment product count
        productCount++;
        //create the products
        products[productCount] = Product(productCount, _name, _price, msg.sender, false);
        //trigger an event
        emit ProductCreated(productCount, _name, _price, msg.sender, false);
    }

    function purchaseProduct(uint _id) public payable {
            //fetch product
        Product memory _product  = products[_id];
            //fetch the owner
        address payable _seller = _product.owner;
            //make sure the product has the valid ID 
        require(_product.id > 0 && _product.id <= productCount);
            //Require their is enough Ether for the transaction
        require(msg.value >= _product.price);
            //Require Product has not been purchased already
        require(!_product.purchased);
            //Require that buyer is not the seller 
        require(_seller != msg.sender);
            //owner ship transfer
        _product.owner = msg.sender;
            //mark as purchased
        _product.purchased = true;
            //Update the id
        products[_id] = _product;
            //pay the seller by sending them Ether
        address(_seller).transfer(msg.value);
            //trigger an event
        emit ProductPurchased(productCount, _product.name, _product.price, msg.sender, true);
    }

}