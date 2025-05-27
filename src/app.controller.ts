import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("proveedores")//trabaja sobre la ruta base
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("nuevos")
  getTracks(): string {
    return this.appService.getTracks();
  }
/*
  @Get("viejos")
  getProveedoresViejos(): iTrack[] {
    return this.appService.getProveedoresViejos();
  }
  
  @Get("buenos")
  getTracfsdf(): iTrack[] {
    return this.appService.getTracks();
  }*/

}
