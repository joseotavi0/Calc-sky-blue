function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    
    inicia() {
      this.cliqueButoes();
      this.presionaEnter();
    },

    presionaEnter(){
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {

        }
      });
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value;

      try{
          conta = eval(conta); // pode gerar falhas de segurança

          if (!conta) {
            alert ('Conta invalida');
            return;
          }

          this.display.value = String(conta);
      } catch (e){
        alert ('Conta invalida');
        return;
      }
    },


    cliqueButoes() {
      //this -> calculadora
      document.addEventListener('click', e => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.apagaUm();
        }
        if (el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      })
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();