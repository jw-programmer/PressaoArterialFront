import { Risco } from "./risco-enun"

export interface PressaoArterial {
    id: number
    sistolica: number
    diastolica: number
    risco: Risco
    dataHoraMedicao: Date
  }