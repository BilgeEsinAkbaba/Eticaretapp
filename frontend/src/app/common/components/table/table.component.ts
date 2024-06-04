
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() heads: string[] = [];


}
