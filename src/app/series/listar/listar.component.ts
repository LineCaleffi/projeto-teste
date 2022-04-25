import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  @Input()
  series = [
    { id : 1, nome: "SuperGirl", principal: "Kara Danvers, Alex Danvers, Jhon's Jhon's" },
    { id : 2, nome: "SuperMan", principal: "Clark Zor-El, Jimmy" },
    { id : 3, nome: "Arrow", principal: "Oliver Queen, Felicity Smoak" },
    { id : 4, nome: "Flash", principal: "Barry Allen, Nevasca, Vibro, Iris Allen" },
    { id : 5, nome: "Once Upon A Time", principal: "Emma Swan" },
    { id : 6, nome: "Criando Dion", principal: "Dion, Nicole, Pat, Tevin, Mark" },
    { id : 7, nome: "Sintonia", principal: "Doni, Nando e Rita" },
    { id : 8, nome: "O Gambito da Rainha", principal: "Beth Harmon" },
    { id : 9, nome: "Riverdale", principal: "Archie Andrews, Betty Cooper, Jughead Jones, Vronica Lodge, Cheryl Blossom" },
    { id : 10,nome: "Mako Mermaids", principal: "Sirena, Ondina, Mimmi, Rikki" },
    { id : 11,nome: "Shadowhunters", principal: "Clary Fray, Jace Wayland, Alec Lightwood, Isabelle Lightwood, Simon Lewis" },
    { id : 12,nome: "The Witcher", principal: "Geralt de Rivia, Ciri, Yennefer" },
    { id : 13,nome: "How I Met Your Mother", principal: "Barney, Ted, Marshall, Robin, Lily" },
    { id : 14,nome: "Legends of Tomorrow", principal: "Sara Lance, Ray Palmer, Dr. Martin Stein" }

  ];
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
