import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from 'src/app/models/games';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private API_URI: string = 'http://localhost:3200/games';
  constructor(private http: HttpClient) {}

  createGame(game: Game) {
    return this.http.post(this.API_URI, game);
  }
  games() {
    return this.http.get(this.API_URI);
  }
  getGame(id: string | number) {
    return this.http.get(`${this.API_URI}/${id}`);
  }
  editGame(id: string | number, game: Game) {
    return this.http.put(`${this.API_URI}/${id}`, game);
  }
  deleteGame(id: string | number) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
