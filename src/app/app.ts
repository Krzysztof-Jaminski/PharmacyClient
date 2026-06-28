import { Component, OnInit, signal } from '@angular/core';
import { Medication, PharmacyService } from './pharmacy-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App implements OnInit {
  protected readonly title = signal('Pharmacy');

  medications: Medication[] = [];

  constructor(private pharmacyService: PharmacyService) { }

  ngOnInit(): void {
    this.pharmacyService.getMedications().subscribe((medications) => {
      this.medications = medications;
    });
  }
}
