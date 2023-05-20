let Usuario = {
    nombre: 'Brayan',
    email: 'ingbrayan@mail.com',
    
    obtenerPosts: async function() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let posts = [
            { id: 1, titulo: 'Este es mi primer post' },
            { id: 2, titulo: 'Este es mi segundo post' },
            { id: 3, titulo: 'Este es mi tercer post' }
          ];
          resolve(posts);
        }, 4000); 
      });
    }
  };
  async function obtenerYMostrarPosts() {
    try {
      let posts = await Usuario.obtenerPosts(); 
      posts.forEach(post => {
        console.log(post.titulo); 
      });
    } catch (error) {
      console.error(error); 
    }
  }
  
    obtenerYMostrarPosts(); 
    