import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true

    },
    {
        name: 'Adam joni',
        email: 'adam@example.com',
        password: bcrypt.hashSync('123456', 10)


    },
    {
        name: 'tamuna',
        email: 'tamuna@example.com',
        password: bcrypt.hashSync('123456', 10)



    }
]


export default users