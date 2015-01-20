# node-merge-collect-files

## Description

Node module to merge two or more directories and collect the filenames.  
Files can be optionally filtered using a glob pattern.



## Usage

To install this module in your current working directory (which should already contain a package.json), run

```
npm install node-merge-collect-files
```

You can additionally just list the module in your [package.json](https://npmjs.org/doc/json.html) and run npm install.

Then, require this package where you need it:

```
var mergeCollectFiles = require('node-merge-collect-files');
```

The syntax for collecting merged files of two or more directories is as follows:

```
var files = mergeCollectFiles( [ 'directory-one', 'directory-two' ], '**/*.json' );
```

## Example

http://runnable.com/VL4rxq7sBR8spJf2/node-merge-collect-files-example-for-node-js
