import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService:PowerService){}
    getData(){
        console.log('asking for 15 watts of power');
        this.powerService.supplyPower(15);
        return 'data!';
        
    }
}
