angular.module('starter.services', ['ngResource'])
//68a21e54e510b64fd58de7f7b5e69368bf71629d876f2f80c0618b5b92fd6d73
//
.factory('Beers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var beers = [{
    id: 0,
    name: 'Delirium Nocturnum',
    brewer: 'Huyghe',
    brewerLogo: 'http://www.delirium.be/image/icon_3d_history.png',
    type: 'Belgian Dark Strong Ale',
    description: 'A Delirium Nocturnum é uma cerveja escura, encorpada, triplamente fermentada sendo que a última fermentação ocorre na própria garrafa.Em sua fabricação são utilizados cinco maltes e três tipos de leveduras. Seu aroma é adocicado e o sabor é complexo, com nuances de passas, chocolate e semente de erva-doce. Acompanha muito bem carnes vermelhas.',
    image: 'http://www.brejas.com.br/media/reviews/photos/original/c1/a6/03/402_1221626153_1236966298.jpg'
  }, {
    id: 1,
    name: 'Delirium Tremmens',
    brewer: 'Huyghe',
    brewerLogo: 'http://www.delirium.be/image/icon_3d_history.png',
    type: 'Belgian Golden Strong Ale',
    description: "L'allusion à l'éléphant rose conséquence d'un delirium tremens de la veille, n'est pas un hasard. Les raisons sont multiples, tout d'abord en raison d'une bière possédant un degré d'alcool élevé, et d'autre part afin de responsabiliser le consommateur aux effets parfois dévastateur d'une consommation trop élevée d'alcool. Quoiqu'il en soit cette bière est devenue le classique de la brasserie, appréciée surtout pour ses qualités dégustatives, ainsi que le mystère qui se cache derrière les parois grise de sa bouteille caractéristique. Cette blonde parfaite accentue les qualités d'un houblon exceptionnel ainsi que de différents malts clair. Elle s'offre des pointes aiguës d'amertume, et dévoile au nez un manteau malté étonnant. Sa conclusion se conjugue sur un ton amer et poivré sans aucune touche d'agressivité. Elle représente la bière blonde forte sous sa meilleure apparence. Elle fut sacré championne du monde de bières en 1998.",
    image: 'http://www.brejas.com.br/media/reviews/photos/original/2e/4b/f8/401-delirium-tremens-30-1387370612.jpg'
  }, {
    id: 2,
    name: 'Colorado Demoiselle',
    brewer: 'Cervejaria Colorado',
    brewerLogo: 'http://www.brejas.com.br/media/reviews/photos/thumbnail/300x300s/5e/64/44/_cervejas-colorado-1323574524.gif',
    type: 'Porter',
    description: 'A Cervejaria Colorado apresenta seu novo lançamento, Demoiselle, uma cerveja escura como a noite e que leva café na sua formulação. Esta cerveja Porter é feita com maltes importados da mais alta qualidade e o melhor café da região da Alta Mogiana. Este café é comprado direto do produtor, moído e torrado segundo nossas especificações e macerado em água fria para só então ser adicionado ao mosto cervejeiro. Usando este método evitamos que o café perca seus melhores aromas devido às altas temperaturas presentes no processo de brassagem. Nossa nova cerveja orgulhosamente completa o time da Colorado que ainda não contava com uma cerveja escura, ela faz lembrar também um tempo no qual este robusto estilo de cerveja era muito popular no Brasil. O nome Demoiselle é uma singela homenagem ao grande brasileiro Alberto Santos Dumont, cuja família era proprietária de fazendas de café na região de Ribeirão Preto. O aeroplano Demoiselle criado por Santos Dumont em 1907 é até hoje um ícone de estilo e simplicidade. Nossa cerveja Demoiselle é da mesma forma uma cerveja elegante e simples para ser degustada com pratos defumados ou mesmo uma sobremesa de chocolate. A receita da nossa Porter foi desenvolvida com a colaboração do premiadíssimo cervejeiro caseiro Ricardo Rosa, agradecemos a ele pelo delicioso resultado. Agradecemos também ao historiador cervejeiro americano Randy Mosher pelos preciosos insights sobre o uso do café na fabricação de cerveja. A Cervejaria Colorado tem como filosofia produzir estilos clássicos de cerveja agregando a eles produtos frescos regionais para adicionar um toque de brasilidade.',
    image: 'http://www.brejas.com.br/media/reviews/photos/original/64/e2/7c/156_ColoradoDemoiselle_1277311604.jpg'
  }];

  return {
    all: function() {
      return beers;
    },
    remove: function(beer) {
      beers.splice(beers.indexOf(beer), 1);
    },
    get: function(beerId) {
      for (var i = 0; i < beers.length; i++) {
        if (beers[i].id === parseInt(beerId)) {
          return beers[i];
        }
      }
      return null;
    }
  };
});
