var fs = require( 'fs' );
var path = require( 'path' );
var extend = require('node.extend');
var glob = require( 'glob' );


/**
 * Get files of a given path
 */
function getPathFiles( basePath, pattern ) {
	pattern = pattern || '**/*';

	var files = {};

	try {
		var basePathStat = fs.lstatSync( basePath );

		if ( !basePathStat.isDirectory() ) {
			throw new Error( '"' + basePath + '" is not a directory.' );
		}

	} catch( e ) {
		throw new Error( '"' + basePath + '" does not exist.' );
	}

	var filesMatchingPattern = glob.sync( pattern, {
		cwd: basePath,
		nonull: false
	} );

	filesMatchingPattern.forEach( function( file ) {
		if( fs.lstatSync( path.join( basePath, file ) ).isFile() ) {
			files[ file ] = {
				absolutePath: path.join( basePath, file ),
				basePath: basePath,
				extension: path.extname( file ),
				dirname: path.dirname( file ),
				name: path.basename( file, path.extname( file ) )
			};
		}
	});

	return files;
}

function mergeCollectFiles( directories, pattern ) {
	var result = {};

	directories.forEach( function( directory ) {
		var foundFiles = getPathFiles( directory, pattern );
		//console.log( 'Files in "' + directory + '": \n', foundFiles, '\n' );

		result = extend( result, foundFiles );
	});

	//console.log( 'Merged Files: \n', result, '\n' );

	return result;
}

module.exports = mergeCollectFiles;