import { Component ,OnInit} from '@angular/core';
import { Comment } from 'src/app/shared/models/club.model';
import { CommentService } from 'src/app/shared/services/club.service';

@Component({
  selector: 'app-tabledisplay',
  templateUrl: './tabledisplay.component.html',
  styleUrls: ['./tabledisplay.component.css']
})
export class TabledisplayComponent implements OnInit{
  comments: Comment[] = [];
  jsonData:any;
  constructor(private commentService: CommentService) {}
  
  ngOnInit(): void {
  this.commentService.getComments().subscribe((comments) => {
  this.comments = comments;
  });
  }
  displayDetail(comment:Comment){
    this.jsonData=comment;
  }
  
}
