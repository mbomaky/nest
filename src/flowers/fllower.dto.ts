import {IsNumber, IsString} from "class-validator";

export class FlowerCreateDto {
  @IsString({message: "Should be string"})
  name: string;
  @IsString({message: "Should be string"})
  color: string;

  @IsNumber()
  price: number;
}

export type FlowerUpdateDto = Partial<FlowerCreateDto>;
