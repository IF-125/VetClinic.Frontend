import { PetImage } from "./PetImage";

export class PetClass{
    id?: number;
    name?: string;
    information?: string;
    breed: string;
    age?: number;
    clientId?: string;
    animalTypeId?:number;
    petImages?:PetImage[]
}