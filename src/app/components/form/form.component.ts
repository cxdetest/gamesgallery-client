import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from 'src/app/models/games';
import { GamesService } from 'src/app/services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  game: Game | any = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date(),
  };

  edit: Boolean = false;
  constructor(
    private games_service: GamesService,
    private actived_route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const { id } = this.actived_route.snapshot.params;

    if (id) {
      this.games_service.getGame(id).subscribe(
        (res) => {
          this.game = res;
          this.game.image = this.game[0].image;
          this.game.title = this.game[0].title;
          this.game.description = this.game[0].description;
          this.game.id = this.game[0].id;
          this.edit = true;
        },
        (err) => console.log(err)
      );
    }
  }

  saveGame() {
    this.games_service.createGame(this.game).subscribe(
      (res) => {
        this.router.navigateByUrl('games');
      },
      (err) => console.error(err)
    );
  }

  updateGame() {
    const { id, title, description, image } = this.game;
    this.games_service
      .editGame(this.game.id, { id, title, description, image })
      .subscribe(
        (res) => {
          this.game.id = 0;
          this.edit = false;
          this.router.navigateByUrl('games');
        },
        (err) => console.error(err)
      );
  }
}
