const img = document.querySelector('img');
const h1 = document.querySelector('h1');

// Api Cat
fetch('https://api.thecatapi.com/v1/images/search')
    // .then(res => console.log(res));
    .then(res => {
        if(res.ok){
            res.json().then(data => {
                img.src = data[0].url
            })
        }else{
            console.log("erreur")
            h1.innerHTML = 'Erreur'
        }
    })

// liste de livres
fetch('livres.json')
    // .then(res => console.log(res))
    .then(res => {
        if(res.ok){
            res.json().then(data => {
                console.log(data);
                for (let i = 0; i < data.length; i++){
                    // console.log(books[i])
                    let livre = document.createElement('article');
                    let titre = document.createElement('h2');
                    let annee = document.createElement('p');
                    let genre = document.createElement('p');
                    let auteur = document.createElement('section');
                    let nom = document.createElement('p')
                    let prenom = document.createElement('p')
                
                    titre.innerHTML = data[i].titre;
                    livre.appendChild(titre);
                
                    annee.innerHTML = data[i].annee;
                    livre.appendChild(annee);
                    
                    genre.innerHTML = data[i].genre;
                    livre.appendChild(genre);
                
                    prenom.innerHTML = data[i].auteur.prenom
                    nom.innerHTML = data[i].auteur.nom
                    auteur.appendChild(prenom);
                    auteur.appendChild(nom);
                    livre.appendChild(auteur);
                
                    document.body.appendChild(livre);
                }
            })
        }else{
            console.log("erreur")
            h1.innerHTML = 'Erreur'
        }
    })












