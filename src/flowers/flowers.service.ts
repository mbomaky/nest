import {Injectable} from "@nestjs/common";

@Injectable()
export class FlowersService {
  getAllFlowers(): string[] {
    return ["Flowers1", "Flowers2", "Flowers3"];
  }
}
