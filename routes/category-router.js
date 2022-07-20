const categoryRouter = require('express').Router();

// categoryRouter.get('/',(req,res)=>{
//         console.log('Liste de toutes les catégories');
//         res.sendStatus(501);
// })

// categoryRouter.get('/:id', (req,res) =>{
//     console.log(`Récupération de la catégorie dont l'id est : ${req.params.id}`);
//     res.sendStatus(501);
// })

// categoryRouter.post('/', (req,res) => {
//     console.log("Envoi d'une nouvelle catégorie");
//     res.sendStatus(501);
// })

// categoryRouter.put('/id',(req,res)=>{
//     console.log(`Modification de la catégorie dont l'id est : ${req.params.id}`);
//     res.sendStatus(501);
// })

// categoryRouter.delete('/id', (req,res) =>{
//     console.log(`Suppression de la catégorie dont l'id est : ${req.params.id}`);
//     res.sendStatus(501);
// })

categoryRouter.route('/')
    .get((req,res)=>{res.sendStatus(501);})
    .post((req,res)=>{res.sendStatus(501);})

categoryRouter.route('/:id')
    .get((req,res)=>{res.sendStatus(501);})
    .put((req,res)=>{res.sendStatus(501);})
    .delete((req,res)=>{res.sendStatus(501);})

module.exports = categoryRouter;