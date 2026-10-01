import prismaClient from "../prisma/index.js";


interface DeleteCustomerProps{
    id:string;
}


class DeleteCustomerService{

    async execute({id}: DeleteCustomerProps){

        if(!id){
            throw new Error("")
    }
        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
    })
        if(!findCustomer){
            throw new Error("")
    }
        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })
        return {message: "deletado"}
    }
}
export {DeleteCustomerService}