var read = require('./node_modules/node-readability'),
    url = 'https://www.publico.pt/desporto/noticia/as-primeiras-imagens-da-confusao-depois-do-sporting-arouca-1751165';

read(url, {
  cleanRulers: [
    function(obj, tag) {

    }
  ]}, function(err, article, meta) {

    //console.log("# titulo: %s #\n\nconteudo: %s\n\nhtml: %s\n\nDOM: %s\n\nmeta: %s\n\n---", article.title, article.content, article.html, article.document, article.meta);
    console.log("# titulo: %s #\n\nconteudo: %s\n\n---", article.title, article.content);
    article.close(); 

  });