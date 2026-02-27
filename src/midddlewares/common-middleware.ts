import {Injectable, NestMiddleware} from "@nestjs/common";
import {NextFunction} from "express";

@Injectable()
export class CommonMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Log here url " + req.url);
    console.log("Log here status " + typeof res.status);
    next();
  }
}
