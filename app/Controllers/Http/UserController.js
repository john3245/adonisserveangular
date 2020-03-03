'use strict'
const User=use('App/Models/User');
class UserController {

async login({request,response,auth})
{

    const {email,password}=request.only(['email','password'])

    const token = await auth.attempt(email,password)

    return response.json(token)

}

async registro({request,response})
{
const {Nombre,Apellidos,email,password}=request.only(['Nombre','Apellidos','email','password'])

await User.create({
    Nombre,
    Apellidos,
    email,
    password
})

return response.send({message:'Se creo el usuario'})

}



async mostrar({params,response})

{

    const user=await User.find(params.id)
    const res ={
        Nombre :user.Nombre,
        Apellidos : user.Apellidos,
        Email : user.email
    }

    return response.json(res)
}


}

module.exports = UserController
