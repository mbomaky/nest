import {Controller, Get, Query, UseGuards, UseInterceptors} from "@nestjs/common";
import {FlowersService} from "./flowers.service";
import {ParsePipe} from "../pipes/parse-pipe";
import {AccessGuard} from "../guards/access-guard";
import {TransformInterceptor} from "../interceptors/transform-interceptors";

@UseInterceptors(TransformInterceptor)
@Controller("flowers")
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @UseGuards(AccessGuard)
  @Get()
  getAllFlowers(@Query("page", ParsePipe) page: string) {
    console.log("==>", page);
    return this.flowersService.getAllFlowers();
  }
}
