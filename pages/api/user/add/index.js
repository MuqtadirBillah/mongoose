import dbConnection from "../../mongodb-connection";
import User from "../../mongoose/models/user";

export default async function handler(req, res) {
    if(req.method=='GET'){
        const user = new User({
          email: 'abbasimusab@gmail.com',
          password: 'Hello',
          role: 'user',
          creation_date: 'none'
        })
        try {
            const newUser = await user.save()
            res.status(201).json('User Added!')
            console.log('Added!')
        } catch (err) {
            console.log(err);
            res.status(400).json('Something went wrong!')
        }
    }
    else if(req.method=='POST'){
        res.status(404).json('Page not found!')
    }
}
  