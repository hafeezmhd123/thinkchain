/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsInt,
  Min,
  Max,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { SessionUpdateManyWithoutStudentsInput } from "./SessionUpdateManyWithoutStudentsInput";
import { Type } from "class-transformer";

@InputType()
class StudentUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  grade?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => SessionUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => SessionUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => SessionUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  sessions?: SessionUpdateManyWithoutStudentsInput;
}

export { StudentUpdateInput as StudentUpdateInput };
