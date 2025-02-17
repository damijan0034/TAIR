import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrator } from '../../../entities/Administrator'; 
import { Repository } from 'typeorm';
Administrator
@Injectable()
export class AdministratorService {
    constructor(
        @InjectRepository(Administrator)
     private readonly administrator:Repository<Administrator>
    )
        {}

    getAll():Promise<Administrator[]> {
        return this.administrator.find();
    }   
    
    getById(id:any):Promise<Administrator>{
        return this.administrator.findOne(id);
    }
}
