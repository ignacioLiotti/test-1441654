const express = require('express')
const userRouter = express.Router()
const app = express()

const { Register } = require('../controllers/userControllers')

userRouter.post('/register', Register)

userRouter.get('/test', (req, res) => {
    res.send('Hello World!')
    })

module.exports = userRouter
 
// module.exports = router;

// router.post('/agregar', (req, res) => {
//     const testeo = new userModel({
//         name: 'test',
//         email: 'test@test.com'
//     });
//     testeo.save(function(err, testeo){
//         if(!err){
//             res.send('Usuario agregado');
//         }else{
//             res.send('Error al agregar usuario ',err);
//         }
//     });
//     res.send('ok');
// })