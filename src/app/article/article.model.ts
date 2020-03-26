import { Title } from '@angular/platform-browser';


export class Article{
    title: string;
    link: string;
    votes: number;


constructor(title: string, link: string, vote: number){
    this.title = title;
    this.link = link;
    this.votes = vote || 0;
    }

    voteUp(){
        this.votes  += 1;
    }

    voteDown(){
        this.votes  -= 1;
    }

    domain(): string{
        try{
            const domainAndPath = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        }catch(err){
            return null;
        }
    }



}