import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerModule } from 'src/power/power.module';
import { CpuModule } from 'src/cpu/cpu.module';

@Module({
  imports:[PowerModule],
  providers: [DiskService],
  exports:[DiskService]
})
export class DiskModule {}
