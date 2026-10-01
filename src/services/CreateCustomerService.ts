import prismaClient from '../prisma/index.js'

interface CreateCustomerProps {
    name: string;
    email: string;

}

class CreateCustomerService {

    async execute({name, email}: CreateCustomerProps){

        if(!name || !email){
            throw new Error("name e email vazio")
        }

        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status:true
            }
        })

        console.log("Rote called");

        return customer
    }
}

export { CreateCustomerService }