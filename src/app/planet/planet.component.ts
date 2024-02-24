import { CommonModule, NgFor } from '@angular/common';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
interface Planet {
  name: string;
  climate: string;
  population: string;
  terrain: string;
  residents: string[];
  residentsData?: Resident[];
}

interface Resident {
  name: string;
  height: string;
  mass: string;
  gender: string;
}


@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [NgFor,CommonModule,MatButtonModule],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.css'
})
export class PlanetComponent implements OnInit {
  planets: Planet[] = [];
  errorMessage: string | null = null;
  nextPage: string | null = null;
  loading: boolean = false;

  currentPage = 1; 
  pageSize = 10;



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPlanets('https://swapi.dev/api/planets/?format=json');
  }

  fetchPlanets(url: string) {
    this.loading = true;
    this.http.get<any>(url).subscribe({
      next: (data) => {
        this.nextPage = data.next;
        this.planets = data.results.map((planet: any) => ({
          name: planet.name,
          climate: planet.climate,
          population: planet.population,
          terrain: planet.terrain,
          residents: planet.residents,
          residentsData: [] // Initialize with empty array to avoid errors during rendering
        }));
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.message;
        this.loading = false;
        console.error('Error fetching planets:', error);
      }
    });
  }
  

  fetchResidents(planet: Planet) {
    if (!planet.residentsData || planet.residentsData.length === 0) {
      planet.residentsData = []; // Initialize with empty array if not already present
      planet.residents.forEach((residentUrl: string) => {
        this.http.get<Resident>(residentUrl).subscribe({
          next: (resident) => {
            planet.residentsData?.push(resident); // Use optional chaining here
          },
          error: (error: HttpErrorResponse) => {
            console.error('Error fetching resident:', error);
          }
        });
      });
    }
  }
  
  
  onPageChange(page: number) {
    this.currentPage = page;
    const nextPageUrl = `${this.nextPage}&page=${this.currentPage}`;
    this.fetchPlanets(nextPageUrl);
  }

  onNextPage() {
    this.currentPage++;
    const nextPageUrl = `${this.nextPage}&page=${this.currentPage}`;
    this.fetchPlanets(nextPageUrl);
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      const previousPageUrl = `${this.nextPage}&page=${this.currentPage}`;
      this.fetchPlanets(previousPageUrl);
    }
  }

}
