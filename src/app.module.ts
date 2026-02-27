import {MiddlewareConsumer, Module, NestModule} from "@nestjs/common";
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import {FlowersModule} from "./flowers/flowers.module";
import {ConfigModule} from "@nestjs/config";
import {CommonMiddleware} from "./midddlewares/common-middleware";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Делает модуль доступным во всем приложении без повторного импорта
    }),
    FlowersModule,
  ],
  controllers: [],
  providers: [],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CommonMiddleware).forRoutes("*path");
  }
}
