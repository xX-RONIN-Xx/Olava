import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.interface';
import { error } from 'console';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) { }

  @Get()
  getTracks(): Promise<Track[]> {
    return this.trackService.getTracks();
  }

  @Get(':id')
  getTrackById(@Param('id') id: number): Promise<Track | undefined> {
    return this.trackService.getTrackById(id);
  }

  @Post()
  createTrack(@Body() body: Track): Promise<Track> {
    return this.trackService.createTrack(body);
  }

  @Delete(':id')
  deleteTrackById(@Param('id') id: number): Promise<Track> {
    return this.trackService.deleteTrackById(id);
  }

  @Put(':id')
  @HttpCode(204)
  updateTrackById(@Param('id') id: number, @Body() body: Track) {
    return this.trackService.updateTrackById(id, body);
  }

}
