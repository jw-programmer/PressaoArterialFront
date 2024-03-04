import { Risco } from "./risco-enun";

export interface PressaoFilter {
    sistolicaInicial: string
    sistolicaFinal: string,
    diastolicaInicial: string,
    diastolicaFinal: string,
    dataMedicaoInicial: string,
    dataMedicaoFinal: string,
    risco: Risco
}