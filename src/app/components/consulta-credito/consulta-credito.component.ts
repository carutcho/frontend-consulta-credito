import { Component } from '@angular/core';
import { CreditoService } from '../../services/credito.service';
import { Credito } from '../../models/credito.model';

@Component({
  selector: 'app-consulta-credito',
  templateUrl: './consulta-credito.component.html',
  styleUrls: ['./consulta-credito.component.css']
})
export class ConsultaCreditoComponent {
  nfse = '';
  numero = '';
  resultados: Credito[] = [];
  resultadoUnico: Credito | null = null;
  error = '';

  constructor(private service: CreditoService) {}

  onBuscarPorNfse() {
    this.error = '';
    this.resultados = [];
    this.resultadoUnico = null;

    this.service.listarPorNfse(this.nfse).subscribe({
      next: res => {
        if (res && res.length > 0) {
          this.resultados = res;
        } else {
          this.error = `Nenhum crédito encontrado para a NFS-e "${this.nfse}".`;
        }
      },
      error: err => {
        if (err.status === 404) {
          if (this.nfse != '') {
              this.error = `NFS-e "${this.nfse}" não encontrada.`;
          }
        } else {
          this.error = err.error?.message || err.message;
        }
      }
    });
  }

  onBuscarPorNumero() {
    this.error = '';
    this.resultados = [];
    this.resultadoUnico = null;

    if(this.numero){
        this.service.buscarPorNumero(this.numero).subscribe({
        next: res => {
            this.resultadoUnico = res;
        },
        error: err => {
            if (err.status === 404) {
            this.error = `Crédito "${this.numero}" não encontrado.`;
            } else {
            this.error = err.error?.message || err.message;
            }
        }
        });
    }else{
        this.error = `Informe um número de crédito`;
    }
  }
}
