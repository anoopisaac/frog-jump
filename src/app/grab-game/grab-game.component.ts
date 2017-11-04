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
  startIsland: Island;
  currentIsland: Island;
  ngOnInit() {
  }

  populateArchi() {
    //create a new archi by pulling cells from a service.
  }

  /**
   * jump to islands
   */
  grab(direction: Direction) {
    var island=this.findNeighbor(this.currentIsland,direction)
    if(island){
      this.currentIsland=island
      this.currentIsland.status=Status.ONIT
      if(this.findRemainingIslands()==0){
        //show a message of success
      }
      else if(this.isNeighborPesent(this.currentIsland)){
        //show a warning message for refresh , you are busted
      }
    }
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
  findRemainingIslands():number{
    return this.archipelago.islands.filter(island=>island.status==Status.ON).length
  }
  isNeighborPesent(sourceIsland:Island):boolean{
    return this.archipelago.islands.filter(island=>(island.status==Status.ON)&&(island.col==sourceIsland.col||island.row==sourceIsland.row)).length>0
  }
  findNeighbor( sourceIsland:Island,direction: Direction): Island {
    var island: Island;
    switch (direction) {
      case Direction.DOWN: {
        island = this.archipelago.islands.find(island => island.status == Status.ON && island.col == sourceIsland.col && island.row > sourceIsland.row)
        break;
      }
      case Direction.UP: {
        island = this.archipelago.islands.find(island => island.status == Status.ON && island.col == sourceIsland.col && island.row <sourceIsland.row)
        break;
      }
      case Direction.LEFT: {
        island = this.archipelago.islands.find(island => island.status == Status.ON && island.row == sourceIsland.row && island.col < sourceIsland.col)
        break;
      }
      case Direction.RIGHT: {
        island = this.archipelago.islands.find(island => island.status == Status.ON && island.row == sourceIsland.row && island.col > sourceIsland.col)
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
    return island;
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
