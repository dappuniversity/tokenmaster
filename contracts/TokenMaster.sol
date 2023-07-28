// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TokenMaster is ERC721 { // is關鍵字用來只指定TokenMaster合約繼承ERC721合約的函式等
    
    constructor(
        string memory _name, 
        string memory _symbol
    ) ERC721(_name, _symbol){ // TokenMaster合約的建構函式的兩個參數會分別傳遞至ERC721合約的建構函式中(ERC721(_name, _symbol))

    }
    
}
