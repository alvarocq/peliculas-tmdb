import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService{
	http:any;
	baseUrl: String;

	constructor(http:Http){
		this.http = http;
		
		this.baseUrl ="https://api.themoviedb.org/3/search/movie?api_key=828a349ac4600136294a5cee0e29b51a";
	}

	getPosts(nombrepeli, idioma ){
		return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=828a349ac4600136294a5cee0e29b51a'+'&language='+idioma+'&query='+nombrepeli)
		.map(res => res.json());
	}
}
