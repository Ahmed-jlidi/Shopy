export class User {
    email:any | undefined
    name:any | undefined
    password:any | undefined
    repassword:any | undefined

    constructor(email:any,name:any,password:any,repassword:any){
        this.email=email
        this.name=name
        this.password=password
        this.repassword=repassword
    }
}
