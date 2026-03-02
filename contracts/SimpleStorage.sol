// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title SimpleStorage
 * @dev Store and retrieve a single uint256 value
 */
contract SimpleStorage {
    uint256 private storedData;

    event ValueChanged(uint256 newValue);

    /**
     * @dev Store a new value
     * @param x The value to store
     */
    function set(uint256 x) public {
        storedData = x;
        emit ValueChanged(x);
    }

    /**
     * @dev Retrieve the stored value
     * @return The stored value
     */
    function get() public view returns (uint256) {
        return storedData;
    }
}
