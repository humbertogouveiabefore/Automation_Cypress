/// <reference types="cypress" />    
//completa automaticamente comandos 


describe('Cadastro e exclusão de contato', function (){
    
        
        const user = "julio0001";
        const password = "123456";
        
        //Insira o e-mail desejado para cadastro no campo entre ""
        const contatoEmail = ""; 
    
         before('Realizando Login', () => {

            //Entrando no website
            cy.visit('http://www.juliodelima.com.br/taskit/')
            //clicando em sign-in
            cy.contains('Sign in').click()
            //Inserindo Usuário
            cy.get('#signinbox > div.modal-content > form > div:nth-child(3) > div:nth-child(1) > input').type(user)
            //Inserindo Senha
            cy.get('#signinbox > div.modal-content > form > div:nth-child(3) > div:nth-child(2) > input').type(password)
            //Clicar em Sign-in
            cy.get('#signinbox > div.modal-footer > a').click()
            
            //login validation
            cy.get('body > nav > div > div > ul.right.hide-on-med-and-down > li:nth-child(1) > a').should("contain",'Hi, Julio');
             //clicar e Hi,julio
            cy.get("body > nav > div > div > ul.right.hide-on-med-and-down > li:nth-child(1) > a").click();
            //Clicar no linktext More data about
            cy.get("body > div.container > div > div > div > div:nth-child(1) > ul > li:nth-child(3) > a").click();

      });     
    
              it('cadastrando um contato', () => {

                //Clicar no Botão "add more data"
                cy.get("#moredata > div.row.center > button").click()
                //Selecionar e-mail
                cy.get("#addmoredata > div.modal-content > div:nth-child(3) > select").select("email")
                //inserir e-mail no campo de texto
                cy.get("#addmoredata > div.modal-content > div:nth-child(4) > div > input").type(contatoEmail);
                //clicar no botao SAVE
                cy.get("#addmoredata > div.modal-footer > a").click();
                //confirmar que esse e-mail foi gravado
                cy.get("#toast-container > div").should("contain","Your contact has been added!");
      });

            it('Deletando contato adicionado',() => {

            //Validar existência de e-mail e deletar cadastro. 
            //Ao inspecionar que será apagado, insira a linha do seu cadastro li:nth-child("linha_do_cadastro")
            cy.contains(contatoEmail).get('#moredata > div.row.somepadding > ul > li:nth-child("") > a > i').click();
            
            //Validar e-mail deletado         
            cy.get("#toast-container > div").should('contain', "Rest in peace, dear email!");
                
      });

});
    