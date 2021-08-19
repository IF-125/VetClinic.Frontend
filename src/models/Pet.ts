import { PetImage } from "./PetImage";

export interface Pet{
    id: number,
    name: string,
    information?: string,
    breed: string,
    age?: number,
    clientId?: string,
    animalType?: string
    petImages?:PetImage[]
}