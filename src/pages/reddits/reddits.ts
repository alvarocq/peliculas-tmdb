import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
	items:any;
	nombrepeli:any;
	idioma:any;
  	constructor(public navCtrl: NavController, private redditService:RedditService) {
  		this.getDefaults();
  }

  ngOnInit(){
  	console.log('onInit funciona...');

  	this.getPosts(this.nombrepeli, this.idioma);
    


  }

  getDefaults(){
  	this.nombrepeli = 'Indiana';
  	this.idioma = 'es';
  }

  getPosts(nombrepeli, idioma){
  	this.redditService.getPosts(nombrepeli, idioma).subscribe(response => {
  		console.log(response);
  		this.items = response.results;
      console.log(this.items);
  		});
  	}

  	viewItem(item){
  		this.navCtrl.push(DetailsPage, {
  			item:item
  			});
  	}

  	changenombrepeli(){
  		this.getPosts(this.nombrepeli, this.idioma);

  	}

  }


