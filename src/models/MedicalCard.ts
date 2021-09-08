import { PetImage } from "./PetImage";

export interface MedicalCard{
    id: number,
    name: string,
    information: string,
    breed: string,
    age: number,
    animalType: string,
    owner: string,
    orderProcedures: any[]
    petImages?:PetImage[]

}