import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponente implements OnInit {

  @Input()
  filmes=[
    { id : 1, nome: "Harry Potter e a Pedra Filosofal", diretor:"J.K. Rowling"},
    { id : 2, nome: "Harry Potter e a Camara secreta", diretor:"J.K. Rowling"},
    { id : 3, nome: "Harry Potter e Prisionaiero de Askaban", diretor:"J.K. Rowling"},
    { id : 4, nome: "Harry Potter e o Cálice de Fogo", diretor:"J.K. Rowling"},
    { id : 5, nome: "Harry Potter e a Ordem da Fenix", diretor:"J.K. Rowling"},
    { id : 6, nome: "Harry Potter e o Enigma do Principe", diretor:"J.K. Rowling"},
    { id : 7, nome: "Harry Potter e as Reliquias da Morte Parte 1", diretor:"J.K. Rowling"},
    { id : 8, nome: "Harry Potter e as Reliquias da Morte Parte 2", diretor:"J.K. Rowling"},
    { id : 9, nome: "Velozes e Furiosos 1", diretor:"Gary Scott Thompson"},
    { id : 10, nome: "+ Velozes + Furiosos 2", diretor:"Gary Scott Thompson"},
    { id : 11, nome: "Velozes e Furiosos 3 - Desafio em Tóquio", diretor:"Gary Scott Thompson"},
    { id : 12, nome: "Velozes e Furiosos 4", diretor:"Gary Scott Thompson"},
    { id : 13, nome: "Velozes e Furiosos 5 - Operação Rio", diretor:"Gary Scott Thompson"},
    { id : 14, nome: "Velozes e Furiosos 6", diretor:"Gary Scott Thompson"},
    { id : 15, nome: "Velozes e Furiosos 7", diretor:"Gary Scott Thompson"},
    { id : 16, nome: "Velozes e Furiosos 8", diretor:"Gary Scott Thompson"},
    { id : 17, nome: "Velozes e Furiosos 9", diretor:"Gary Scott Thompson"}
  ]
  constructor(private activatedRoute: ActivatedRoute) {
    // this.activatedRoute = new ActivatedRoute();
   }
   ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (data) => {
        console.log(data);
        }
     );
 }

}
