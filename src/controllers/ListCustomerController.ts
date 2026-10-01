import {ListCustomerService} from '../services/ListCustomerService.js'
import type { FastifyRequest, FastifyReply } from 'fastify';


class ListCustomerController{

    async handle(request: FastifyRequest, reply: FastifyReply){

        const listCustomerService = new ListCustomerService();

        const customer = await listCustomerService.execute();

        reply.send(customer)

    }
}

export {ListCustomerController  }