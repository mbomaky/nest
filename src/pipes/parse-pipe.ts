import {PipeTransform, Injectable, ArgumentMetadata} from "@nestjs/common";

@Injectable()
export class ParsePipe implements PipeTransform {
  transform(value: unknown, metadata: ArgumentMetadata) {
    if (typeof value === "string") {
      return value.toUpperCase();
    }
    return value;
  }
}
