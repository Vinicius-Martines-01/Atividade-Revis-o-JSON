function load_user(){
    let dados = [ {id:1, nome:"snoopy", email: "snoopy@snoopmail.com", senha:"1950"}, 
                  {id:2, nome:"vegeta", email: "vegeta@saiyajin.com", senha:"1234"}, 
                  {id:3, nome:"goku", email:"goku@saiyajin.com", senha:"1234"} 
                ]       
    localStorage.setItem("users_goku", JSON.stringify(dados));   
    return dados    
}

function login() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const users = JSON.parse(localStorage.getItem("users_goku"));

    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email == email && users[i].senha == senha || users[i].nome == nome && users[i].senha == senha
      ) {
        console.log('here')
        alert(`${users[i].nome} logou`);
        window.location.href =  window.location.href.replace("login.html","") + "index.html"
        return;
      }
    }
}

function atualizar() {
    const id = document.getElementById("id").value;

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const users = JSON.parse(localStorage.getItem("users_goku"));

    for (let i = 0; i < users.length; i++) {
      if (users[i] == null) {
        continue;
      } else if (users[i].id == id) {
        users[i].nome = nome;
        users[i].email = email;
        users[i].senha = senha;
        localStorage.setItem("users_goku", JSON.stringify(users));
        alert("Atualizado");
        
        document.getElementById("nome").value = ""
        document.getElementById("email").value = ""
        document.getElementById("senha").value = "" 
      }
    }
}

function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const users = JSON.parse(localStorage.getItem("users_goku"));

    if (nome !== '' && senha !== ''){
        let user = { id: Date.now(), nome: nome, email: email, senha: senha }
        users.push(user)

        localStorage.setItem("users_goku", JSON.stringify(users))
        alert('Conta Registrada!')

        document.getElementById("nome").value = ""
        document.getElementById("email").value = ""
        document.getElementById("senha").value = "" 

    }
}
  