export class Envio {
    constructor(
      public idEnvio: number = 0,
      public direccion: string = '',
      public chofer: number | null = null,
      public vehiculo: number | null = null
    ) {}
  }
  