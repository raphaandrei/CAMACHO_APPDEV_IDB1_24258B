import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-parent',
  standalone: true, // ✅ Declare as standalone
  imports: [RouterModule], // ✅ Import RouterModule
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent { }
