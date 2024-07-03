<script type="module">
               
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
      
        import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
        
            
        const firebaseConfig = {
          apiKey: "AIzaSyAjG9XO9L0tV9UDKzN58Lez6e9MeiHHc68",
          authDomain: "formulariodeteste-9906f.firebaseapp.com",
          projectId: "formulariodeteste-9906f",
          storageBucket: "formulariodeteste-9906f.appspot.com",
          messagingSenderId: "351163312606",
          appId: "1:351163312606:web:285e3f9094925db385d54f"
        };
      
        
        const app = initializeApp(firebaseConfig);
      
        const db = getDatabase(app);
       
        document.getElementById("submit").addEventListener('click', function(e){
        
        e.preventDefault();
      
        set(ref(db, 'user/' + document.getElementById("nome").value),
        
      {
      
      nome: document.getElementById("nome").value,
          
      email: document.getElementById("email").value,
      
      telefone: document.getElementById("telefone").value,
      
      feminino: document.getElementById("feminino").value,
      
      masculino: document.getElementById("masculino").value,
      
      outro: document.getElementById("outro").value,
      
      datadenascimento: document.getElementById("data_nascimento").value,
      
      cidade: document.getElementById("cidade").value,
      
      estado: document.getElementById("estado").value,
      
      mensagem: document.getElementById("mensagem").value,
      
      });
      
      alert("mensagem enviada !");
      
      })
      
</script>
