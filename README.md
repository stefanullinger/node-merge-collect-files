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

The glob pattern can also be an array.

```
var files = mergeCollectFiles( [ 'directory-one', 'directory-two' ], ['**/*.json', '**/*.js'] );
```

If you would like to pass some glob options, use the third parameter.

```
var files = mergeCollectFiles( [ 'directory-one', 'directory-two' ], ['**/*.json', '**/*.js'], { dot: false } );
```

The default glob options are:

```
{
	cwd: basePath,
	nonull: false,
	dot: true
}
```

## Example

http://runnable.com/VL4rxq7sBR8spJf2/node-merge-collect-files-example-for-node-js


## Release History

__0.3.1__

  * Fixed patterns param in glob.sync to be local copy of patterns as glob.sync seems to mutate this param.

__0.3.0__

  * Added support for setting glob options.

__0.2.3__

  * Fixed version reference of glob-all.

__0.2.2__

  * Removed reference to multiglob.

__0.2.1__

  * Removed reference to multiglob.

__0.2.0__

  * Added support for multiple glob patterns.

__0.1.0__

  * Defined mergeCollectFiles method.