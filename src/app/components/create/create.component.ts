import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article'
import { ArticleService } from '../../services/article.service'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Global } from '../../services/global'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ArticleService]
})
export class CreateComponent implements OnInit {
  public formText = 'Bienvenido al master en framework Angular'
  public titulo = 'Crear Artículo'
  public articulo : Article
  public status : string
  public afuConfig = {
      multiple: false,
      formatsAllowed: ".jpg,.png,.gif,.jpeg",
      maxSize: "1",
      uploadAPI:  {
        url:`${Global.url}/upload-image`,
      },
      theme: "attachPin",
      hideProgressBar: true,
      hideResetBtn: true,
      hideSelectBtn: false,
      fileNameIndex: true,
      replaceTexts: {
        selectFileBtn: 'Select Files',
        resetBtn: 'Reset',
        uploadBtn: 'Upload',
        dragNDropBox: 'Drag N Drop',
        attachPinBtn: 'Sube la imagen del articulo',
        afterUploadMsg_success: 'Successfully Uploaded !',
        afterUploadMsg_error: 'Upload Failed !',
        sizeLimit: 'Size Limit'
      }
  };
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute, //sacar parametros de la url
    private _router: Router //redirecciones a otras páginas
  ) {
    this.articulo = new Article ('','','', null, null)
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this._articleService.create(this.articulo).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success'
          this.articulo = response.article
          this._router.navigate(['/blog'])
        }else{
          this.status = "error"
        }
      },
      error => {
        console.error(error);
        this.status = error
      }
    )
  }
  imageUpload(data){
    this.articulo.image = data.body.image
  }
}
