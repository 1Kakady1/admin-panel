interface IString{
    [key:string]: string
}
export const formError:IString ={
    'req': 'Required',
    'email':'Invalid email address',
    'lenMin': 'Password length must be greater than 4',
}