const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragial: true },
  { nome: 'Impressora', qtde: 0, preco: 649.5, fragial: true },
  { nome: 'Caderno', qtde: 4, preco: 27.1, fragial: false },
  { nome: 'Lapis', qtde: 3, preco: 5.82, fragial: false },
  { nome: 'Tesoura', qtde: 1, preco: 19.2, fragial: true },
];

const getTotal = (item) => item.qtde * item.preco;
//const somar = (acc, el) => acc + el;
const somar = (acc, el) => {
  //console.log(acc, el);
  return acc + el;
};

const total = carrinho.map(getTotal);
//console.log(total);

const totalgeral = total.reduce(somar);
//console.log(totalgeral);


 ////////////////////////////

const media = carrinho
  .filter(item => item.fragial)
  .map(item => item.qtde * item.preco)
  .reduce((acc,el) => {
    const novaQted = acc.qtde + 1,
    const novoTotal = acc.total + el
    return {
      qtde: novaQted,
      total: novoTotal,
      media: novoTotal / novaQted
    }
},{qtde: 0, total: 0, media: 0})

//console.log(media)

////////////////////////////

Array.prototype.meuReduce = function(fn, inicial){
  let acc = inicial
  for(let i = 0; i <this.length; i++){
    if(!acc && i === 0){
      acc = this[1]
      continue
    }
    acc = fn(acc, this[i], i, this)
  }
  return acc
}

//////////////////////////// Promesse 2

function esperandoPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      //console.log('Executando um promise...');
      resolve();
    }, tempo);
  });
}

esperandoPor().then(esperandoPor).then(esperandoPor);
//////////////////////////// Promesse 3

function gerarNumerosentre(min,max){
  if(min > max) [max, min] = [min, max]

  return new Promise(resolve => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min
    resolve(aleatorio)
  })
}

gerarNumerosentre(1, 60).then(num => num * 10).then(numX10 => `O numero gerado foi ${numX10}`).then(console.log)

////////////////////////////

teste commit
