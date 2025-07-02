import { Component } from '@angular/core';
import { PORTFOLIO } from '../../core/constants/portfolio.constant';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  portfolioData = PORTFOLIO;
  portfolioList = this.portfolioData.portfolioGrid;
  filterActiveIndex = 0;

  onFilterFn(item: any,index:number) {
    this.filterActiveIndex = index;
    this.portfolioList = this.portfolioData.portfolioGrid.filter(data =>
      data.categories.some(category => category === item.category)
    );
  }
}
