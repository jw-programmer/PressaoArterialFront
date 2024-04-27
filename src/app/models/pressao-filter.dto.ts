import { Risco } from "./risco-enun";

export interface PressaoFilter {
    sistolicaInicial: string
    sistolicaFinal: string,
    diastolicaInicial: string,
    diastolicaFinal: string,
    dataHoraMedicaoInicial: string,
    dataHoraMedicaoFinal: string,
    risco: Risco
}