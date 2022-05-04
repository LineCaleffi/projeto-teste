import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponente implements OnInit {

  filmes : any =[];
  constructor(private activatedRoute: ActivatedRoute, private filmesService : FilmesService) {
    // this.activatedRoute = new ActivatedRoute();
   }

   ngOnInit(): void {
    this.getAll();

    this.activatedRoute.params.subscribe((data)=>{
      console.log(data);
    });
  }

  private getAll(){
    this.filmesService.getAll().subscribe((data)=>{
      console.log(data);
      this.filmes = data;
    });
  }

  onDelete(id:number){
    this.filmesService.delete(id).subscribe(()=>{
      console.log(`deletou registro com id ${id}`);
      this.getAll();
    })
  }
}
