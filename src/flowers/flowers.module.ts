import {MiddlewareConsumer, Module, NestModule} from "@nestjs/common";
import {FlowersService} from "./flowers.service";
import {FlowersController} from "./flowers.controller";
import {CommonMiddleware} from "../midddlewares/common-middleware";
import {PrismaService} from "./prisma.service";

@Module({
  controllers: [FlowersController],
  providers: [FlowersService, PrismaService],
})
export class FlowersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CommonMiddleware).forRoutes("flowers");
  }
}
