import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionDataService } from '../competition-data.service';


@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {

  competitions_categories: any[];
  current_competition_category: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: CompetitionDataService
  ) { }

  getCategories(){
    this.dataService.getCategories()
      .subscribe(
        data=> {
          this.competitions_categories = data['Competitions'];
        }
    );
  }  
  
  ngOnInit(){
    this.getCategories();
    this.route.params.subscribe(
      params => {
        this.current_competition_category = params.compiName
      }
    );
  }

}
