var tabela = document.querySelector("#tabelaAluno")

    tabela.addEventListener("dblclick",function(event){

            event.target.parentNode.remove();  
            
    })
