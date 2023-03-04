import { Component, HostBinding, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  games: any = [];
  constructor(private games_service: GamesService) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.games_service.games().subscribe(
      (res) => {
        this.games = res;
      },
      (err) => console.error(err)
    );
  }

  deleteGame(id: string) {
    this.games_service.deleteGame(id).subscribe((err) => console.error(err));
    this.getGames();
  }
}
