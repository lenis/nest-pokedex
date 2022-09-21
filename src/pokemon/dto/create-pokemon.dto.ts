import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";


export class CreatePokemonDto {

    //IsInt, Positive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;
    //IsString, MinLength 1
    @IsString()
    @MinLength(1)
    name:string;

}
function InsInt() {
    throw new Error("Function not implemented.");
}

