import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.interface';
import { error } from 'console';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  getTracks(): Promise<Track[]> {
    return this.trackService.getTracks();
  }

  @Get(':id')
  async getTrackById(@Res() response,  @Param('id') id: number): Promise<Track> {
    const responseFormService = await this.trackService.getTrackById(id);

    if (responseFormService && Object.keys(responseFormService).length) {
      return response.status(HttpStatus.OK).json(responseFormService);
    } else {
      return response.status(HttpStatus.NOT_FOUND).json({error: 'No se encontró el recurso en la BD'})
    }
  }

  @Post()
  createTrack(@Body() body:Track): Promise<Track> {
    return this.trackService.createTrack(body);
    }

  @Delete(':id')
  deleteTrackById(@Param('id') id:number) : Promise<Track> {
    return this.trackService.deleteTrackById(id);
  }

  @Put(':id')
  @HttpCode(204)
  updateTrackById(@Param('id') id: number, @Body() body: Track) {
    return this.trackService.updateTrackById(id, body);
  }
    
}
