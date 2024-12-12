# MongoDB $inc Operator with Nested Fields in findAndUpdate

This repository demonstrates a common error when using the `$inc` operator in MongoDB's `findOneAndUpdate` method to increment nested fields. The incorrect usage and its proper solution are showcased through JavaScript code examples.

## Problem
The `$inc` operator is commonly used to increment numeric fields.  However, when using it with nested fields within the `findOneAndUpdate` operation, it can lead to unexpected results or errors if not handled correctly.  The provided `bug.js` file shows an example of this error.

## Solution
The correct approach involves proper dot notation for accessing the nested fields.  The `bugSolution.js` file provides a corrected version that accurately updates the nested field.

## Usage
1.  Clone this repository.
2.  Ensure you have a MongoDB instance running.
3.  Connect to your MongoDB instance.
4.  Run the `bug.js` script to observe the incorrect behavior.
5.  Run the `bugSolution.js` script to see the correct behavior.
