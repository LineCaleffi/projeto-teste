import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-form-series',
  templateUrl: './form-series.component.html',
  styleUrls: ['./form-series.component.scss']
})
export class FormSeriesComponent implements OnInit {
  meuForm : FormGroup = new FormGroup({});
  // para saber se é edição
  isEdicao : boolean = false;

  // id de quem estou alterando
  id : number = -1;
  constructor(private formBuilder : FormBuilder, private seriesService : SeriesService,
    private router : Router, private activatedRouter : ActivatedRoute ) { }

  ngOnInit(): void {
    this.meuForm=this.formBuilder.group({
      nome:[null, [Validators.required] ],
      principal:[null, [Validators.required] ]
    });
    this.activatedRouter.params.subscribe((parametros : any)=>{
      console.log(parametros);
      if(parametros.id){
        console.log(`ediçao id ${parametros.id}`);
        this.isEdicao=true;
        this.id=parametros.id;

        this.seriesService.getOne(parametros.id).subscribe(
          (dados)=>{
            console.log(dados);
            this.meuForm.patchValue(dados);
        })
      } else{
        console.log(`criação`);
        this.isEdicao=false;
      }
    });
  }

  onSubmit(){
    if(this.isEdicao == false){
      // é para salvar o registro
      this.seriesService.save(this.meuForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            // o navigate é para redirecionar para uma outra rota de interesse
            this.router.navigate(['/series']);
          }
        );
    }
    // é alteração de algum registro
    else{
      this.seriesService.update(this.id, this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          // o navigate é para redirecionar para uma outra rota de interesse
          this.router.navigate(['/series']);
        }
      );
    }
  }//fim onSubmit
}
