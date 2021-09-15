// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./ERC20Token.sol";


contract NFTMarket  {
  using Counters for Counters.Counter;
  Counters.Counter private _itemIds; //Id for each individual item
  Counters.Counter private _itemsSold; // No of items sold

  address payable owner; // Owner is the owner of the contract who makes commission on every transaction
  uint listingPrice= 0.5 ether; //listing price put by seller
  ERC20Token public tokenAddress;// ERC20 Token address for payment method

  constructor(address _tokenAddress) {
      owner = payable(msg.sender);
     tokenAddress = ERC20Token(_tokenAddress);

  }

  struct Items{
      uint itemId; 
      address NFTAddress;
      uint tokenId;
      address payable seller;
      address payable owner;
      uint price;
      bool sold;  
}

mapping(uint => Items) ItemId;

event ItemsCreated (
    uint indexed itemId,
    uint indexed tokenId,
    address NFTAddress,
    address payable seller,
    address payable owner,
    uint price,
    bool sold  
);
}