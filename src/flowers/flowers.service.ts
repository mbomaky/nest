import {Injectable} from "@nestjs/common";
import {Flower} from "~/../generated/prisma/client";
import {PrismaService} from "./prisma.service";

@Injectable()
export class FlowersService {
  constructor(private readonly prisma: PrismaService) {}

  getAllFlowers(): Promise<Flower[]> {
    return this.prisma.flower.findMany();
  }
}
