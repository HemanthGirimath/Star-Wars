import { Routes } from '@angular/router';
import { PlanetComponent } from './planet/planet.component';

export const routes: Routes = [
    // {path:'',redirectTo:'planet',pathMatch:'full'},
    {path:'planet',component:PlanetComponent},
];
