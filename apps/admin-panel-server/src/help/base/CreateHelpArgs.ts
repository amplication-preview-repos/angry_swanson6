/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HelpCreateInput } from "./HelpCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateHelpArgs {
  @ApiProperty({
    required: true,
    type: () => HelpCreateInput,
  })
  @ValidateNested()
  @Type(() => HelpCreateInput)
  @Field(() => HelpCreateInput, { nullable: false })
  data!: HelpCreateInput;
}

export { CreateHelpArgs as CreateHelpArgs };
