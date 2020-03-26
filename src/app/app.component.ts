import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  articles: Article[];

    constructor(){
      this.articles = [
        new Article('Learn Angular', 'http://angular.io', 3),
        new Article('My Github Repository ', 'https://github.com/mdmizanurr', 5),
        new Article('Angular Homepage', 'http://angular.io', 4),
      ];

    }
 
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
      console.log(`Adding article title ${title.value} and link ${link.value}`);
      this.articles.push(new Article(title.value, link.value, 0));
      title.value = '';
      link.value = '';
      return   false;
    }


    sortedArticles(): Article[]{
      return this.articles.sort((a: Article, b: Article ) => b.votes - a.votes);
    }







  }



