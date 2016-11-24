var Curl = require( './node_modules/node-libcurl' ).Curl,
	extractor = require('./node_modules/unfluff'),
	curl = new Curl(),
	url = 'http://www.maisfutebol.iol.pt/champions/liga-campeoes/recorde-negativo-do-benfica-na-noite-dos-100-golos-de-messi';

curl.setOpt( 'URL', url );
curl.setOpt( 'FOLLOWLOCATION', true );

curl.on( 'end', function( statusCode, body, headers ) {

    var data = extractor(body);

    console.info(data);

    this.close();
});

curl.on( 'error', function ( err, errCode ) {

    console.info('ERROR - '+errCode);

    this.close();
});

curl.perform();