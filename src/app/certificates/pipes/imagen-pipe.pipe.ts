import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenPipe'
})
export class ImagenPipePipe implements PipeTransform {

  transform( idCertificado: string ): string {
    return `../../../../assets/imgs/certificates/${ idCertificado }.jpg`;
  }

}
