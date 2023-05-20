let CuentaBancaria = {
    saldo: 3500,
    titular: 'Brayan',
    
    realizarTransaccion: async function(cantidad) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            resolve(this.saldo);
          } else {
            reject('Saldo insuficiente');
          }
        }, 4000); 
      });
    }
  };
  async function realizarTransaccionBancaria() {
    try {
      let cantidad = 500; 
      let saldoActualizado = await CuentaBancaria.realizarTransaccion(cantidad);
      console.log('Transacción exitosa. Saldo actualizado:', saldoActualizado);
    } catch (error) {
      console.error('Error en la transacción:', error);
    }
  }
  
  realizarTransaccionBancaria();