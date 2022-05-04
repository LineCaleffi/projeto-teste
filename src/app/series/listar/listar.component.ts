import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesModule } from '../series.module';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  series : any =[];
  constructor(private activatedRoute: ActivatedRoute, private seriesService : SeriesService) {
    // this.activatedRoute = new ActivatedRoute();
   }

   ngOnInit(): void {
    this.getAll();

    this.activatedRoute.params.subscribe((data)=>{
      console.log(data);
    });
  }

  private getAll(){
    this.seriesService.getAll().subscribe((data)=>{
      console.log(data);
      this.series = data;
    });
  }

  onDelete(id:number){
    this.seriesService.delete(id).subscribe(()=>{
      console.log(`deletou registro com id ${id}`);
      this.getAll();
    })
  }

}
