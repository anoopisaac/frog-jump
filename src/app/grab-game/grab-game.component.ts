import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grab-game',
  templateUrl: './grab-game.component.html',
  styleUrls: ['./grab-game.component.scss']
})
export class GrabGameComponent implements OnInit {

  constructor() { }

  archipelago: Archipelago
  stage: number
  startIsland:Island;
  currentIsland:Island;
  ngOnInit() {
  }

  populateArchi() {
    //create a new archi by pulling cells from a service.
  }

  /**
   * jump to islands
   */
  grab(direction: Direction) {
    //get current Island and get the closest neighbor one in asked direction
    //if nothing
    ///dont do anything
    //else
    ///set the current island as new one
    ///set the status as onit in current island
    ///if no more islands
    ////show a message and sound bingo
    ///elif no more neighbords
    ////say message you are stuck; ask you want to refresh or previous game

  }
  /**
   * go back and forth different stages
   * @param direction
   */
  navigateStage(direction: number) {
    this.populateArchi()
    //save the position in datastore
  }

}

class Archipelago {
  width: number;
  height: number;

  constructor(public islands: Island[]) {
  }
}

class Island {
  row: number;
  col: number;
  status: Status
}
// class Monkey {
//   position: Island
// }
enum Direction {
  LEFT, RIGHT, UP, DOWN
}
enum Status {
  ON, OFF, REMOVED, ONIT
}
