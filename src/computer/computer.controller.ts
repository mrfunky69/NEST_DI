import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {

    constructor(private diskService:DiskService, private cpuService:CpuService ){}
    @Get()
    run(){
        console.log('compute and get data');

        return [
            this.cpuService.compute(3,4),
            this.diskService.getData()
            ];
        
    }

}
