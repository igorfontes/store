function HideIt(IdHide) {
  var x = document.getElementById(IdHide);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function mostraDados() {
    var id = document.getElementById("cId").value;
    var nome = document.getElementById("cNome").value;
    var precounit = document.getElementById("cPreco").value;
    var estoque = document.getElementById("cEstoque").value;
  
    var produto = new Object();
    produto.id = id;
    produto.nome = nome;
    produto.precounit = precounit;
    produto.estoque = estoque;
  
    if (typeof Storage !== "undefined") {
      window.localStorage.setItem(id, JSON.stringify(produto));
    } else {
      alert("No support for local storage!");
    }
  
    alert(
      " O produto " +
        nome +
        " com preco unitário de R$ " +
        precounit +
        " tem " +
        estoque +
        " unidades disponíveis! Lista com " +
        localStorage.length
    );
  }
  
  function selectInfo(c, r) {
    switch (c) {
      case 0:
        return JSON.parse(window.localStorage.getItem(window.localStorage.key(r)))
          .id;
      case 1:
        return JSON.parse(window.localStorage.getItem(window.localStorage.key(r)))
          .nome;
      case 2:
        return JSON.parse(window.localStorage.getItem(window.localStorage.key(r)))
          .precounit;
      case 3:
        return JSON.parse(window.localStorage.getItem(window.localStorage.key(r)))
          .estoque;
  
      default:
        break;
    }
  }
  
  function listaProdutos() {
    var tbl = document.getElementById("tableProd");
    tbl.innerHTML = "";
    var header = tbl.createTHead();
    var rowhead = header.insertRow(0);
    var cellhead = rowhead.insertCell(0);
    cellhead.innerHTML = "<b>ID</b>";
    cellhead = rowhead.insertCell(1);
    cellhead.innerHTML = "<b>Nome</b>";
    cellhead = rowhead.insertCell(2);
    cellhead.innerHTML = "<b>Preço Unitário</b>";
    cellhead = rowhead.insertCell(3);
    cellhead.innerHTML = "<b>Estoque</b>";
    var numrows = localStorage.length;
    var numcols = 4;
    for (let r = 0; r < numrows; r++) {
      var row = tbl.insertRow();
      for (let c = 0; c < numcols; c++) {
        var cell = row.insertCell();
        cell.innerHTML = selectInfo(c, r);
      }
    }
    if (tbl.style.display === "none") {
      tbl.style.display = "block";
    } else {
      tbl.style.display = "none";
    }
  }
  
  function removeProd() {
    var idout = document.getElementById("cIdOut").value;
    window.localStorage.removeItem(idout);
    alert(
      " O produto com id " +
        idout +
        " foi removido com sucesso! Lista de produtos com " +
        localStorage.length +
        " produtos!"
    );
  }
  
  function editProd() {
    var idEdit = document.getElementById("cIdEdit").value;
    var nomeEdit = document.getElementById("cNomeEdit").value;
    var precounitEdit = document.getElementById("cPrecoEdit").value;
    var estoqueEdit = document.getElementById("cEstoqueEdit").value;
  
    var produto = new Object();
    produto.id = idEdit;
    produto.nome = nomeEdit;
    produto.precounit = precounitEdit;
    produto.estoque = estoqueEdit;
  
    if (typeof Storage !== "undefined") {
      window.localStorage.removeItem(idEdit);
      window.localStorage.setItem(idEdit, JSON.stringify(produto));
    } else {
      alert("No support for local storage!");
    }
  
    alert(
      " O produto com id " +
        idEdit +
        " foi editado com sucesso! Lista de produtos com " +
        localStorage.length +
        " produtos!"
    );
  }
  
  function efetuaCompra() {
    var idComp = document.getElementById("cIdComp").value;
    var qtde = document.getElementById("cQtde").value;
    var produto = new Object();
    produto = JSON.parse(window.localStorage.getItem(idComp));
    var aux = JSON.parse(window.localStorage.getItem(idComp)).estoque;
    if (aux < qtde) {
      alert("Desculpe! Estoque insuficiente! Temos apenas " + aux + " unidades disponíveis!");
    } else {
      produto.estoque = aux - qtde;
      alert("Compra finalizada com sucesso! Obrigado pela preferência!");
      if (typeof Storage !== "undefined") {
        window.localStorage.setItem(idComp, JSON.stringify(produto));
      } else {
        alert("No support for local storage!");
      }
    }
  }

  function calc_preco(){
    var idComp = document.getElementById("cIdComp").value;
    var qtde = document.getElementById("cQtde").value;
    var aux = JSON.parse(window.localStorage.getItem(idComp)).precounit;
    tot = qtde * aux;
    document.getElementById("cTot").value = 
    tot.toFixed(2);
  }
  
  // function hideCadastro() {
  //   var x = document.getElementById("formProd");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }
  
  // function hideRemove() {
  //   var x = document.getElementById("remove");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }
  
  // function hideEdicao() {
  //   var x = document.getElementById("edicao");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }
  
  // function hideCompras() {
  //   var x = document.getElementById("compra");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }