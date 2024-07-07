
# MyToken Project
## Overview
This project contains the Solidity smart contract MyToken, which implements a basic ERC-20-like token with minting and burning functionalities. The contract is designed to manage a simple token named FinCoin with the abbreviation FC.

## Contract Details
- Token Name: FinCoin
- Token Abbreviation: FC
- Total Supply: Dynamic, varies based on minting and burning operations

## Features

### Public Variables
- token_name: A string that stores the name of the token.
- token_Abb: A string that stores the abbreviation of the token.
- total_supply: An unsigned integer that stores the total supply of the token.
### Mapping
- balance: A mapping that stores the balance of each address, represented as mapping(address => uint).
### Mint Function
- mint(address _address, uint value): This function increases the total supply of the token by the specified value and increases the balance of the specified address by the same amount.
### Burn Function
- burn(address _address, uint value): This function decreases the total supply of the token by the specified value and decreases the balance of the specified address by the same amount, provided that the address has a balance greater than or equal to the value.

## Smart Contract Code
```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MyToken {

    // Public variables
    string public token_name = "FinCoin";
    string public token_Abb = "FC";
    uint public total_supply = 0;

    // Mapping of addresses to balances
    mapping(address => uint) public balance;

    // Mint function
    function mint(address _address, uint value) public {
        total_supply += value;
        balance[_address] += value;
    }

    // Burn function
    function burn(address _address, uint value) public {
        require(balance[_address] >= value, "Insufficient balance to burn");
        total_supply -= value;
        balance[_address] -= value;
    }
}

```
## Usage/Examples
### Minting Tokens
To mint new tokens, call the mint function with the recipient's address and the amount of tokens to mint. This will increase both the total supply and the balance of the specified address.

```solidity
mint(0xRecipientAddress, 100);

```
### Burning Tokens
To burn existing tokens, call the burn function with the token holder's address and the amount of tokens to burn. This will decrease both the total supply and the balance of the specified address, provided that the address has sufficient tokens.
```solidity
burn(0xHolderAddress, 50);
```





## Support

Feel free to contribute to this project by opening issues or submitting pull requests on GitHub. Your feedback and contributions are highly appreciated!
