import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map'

@Injectable()
export class PostsService {
    constructor(private http: Http) { }

    getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
    }

    getPost(id: number) {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id.toString()).map(res => res.json());
    }
}

export interface Post {
  id: number;
  title: string;
  body: string
}
