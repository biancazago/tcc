import { AbstractControl } from "@angular/forms";

export class MensagemValidacao{
  constructor(
    public aviso: string,
    public ehCampoInvalido: (controle: AbstractControl) => boolean
  ) {}
}
