//Importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { from } from 'rxjs'

//Importar componentes a los que se le va hacer una pagina exclusiva
import { ArticleComponent } from './components/article/article.component'
import { BlogComponent } from './components/blog/blog.component'
import { FormularioComponent } from './components/formulario/formulario.component'
import { PeliculasComponent } from './components/peliculas/peliculas.component'
import { PaginaComponent } from './components/pagina/pagina.component'
import { ErrorComponent } from './components/error/error.component'
import { HomeComponent } from './components/home/home.component'
import { ArticleDetalleComponent } from './components/article-detalle/article-detalle.component'
import { SearchComponent } from './components/search/search.component'
import { CreateComponent } from './components/create/create.component'

//Array de rutas
const appRoutes: Routes = [
    {
        path: '',
        component: ArticleComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'buscar/:search', //Va al final de las rutas, cuando la ruta ingresada no exista
        component: SearchComponent
    },
    {
        path: 'blog/crear',
        component: CreateComponent
    },
    {
        path: 'formulario',
        component: FormularioComponent
    },
    {
        path: 'peliculas',
        component: PeliculasComponent
    },
    {
        path: 'pagina-de-pruebas',
        component: PaginaComponent
    },
    {
        //parametro opcional
        path: 'pagina-de-pruebas/:nombre/:apellidos',
        component: PaginaComponent
    },
    {
        path: 'blog/articulo/:id',
        component: ArticleDetalleComponent
    },
    {
        path: '**', //Va al final de las rutas, cuando la ruta ingresada no exista
        component: ErrorComponent
    }
]

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = []
//Carga la configuracion de rutas
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
