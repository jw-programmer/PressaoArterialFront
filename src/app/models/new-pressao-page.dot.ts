import { PressaoArterial } from "./pressao-arterial.dto"

export interface PressaoPageDto{
    content: PressaoArterial[]
    totalPages: number
    totalElements: number
    last: boolean
    number: number
    numberOfElements: number
    first: boolean
    size: number
    empty: boolean
}