import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forumPost } from '../app';
import { ForumService } from '../forum-service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  constructor(private forumService: ForumService) {}

  forum: forumPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  forums: forumPost[] = [];

  ngOnInit(){
    this.forumService.getForums().subscribe(data => {
      this.forums = data;
      console.log('Forums loaded', data);
    });
  }

  onSubmit(forum: forumPost) {
    console.log('Form Submitted', forum);
    forum.userId = 1;
    forum.id = this.forums.length + 1;
    this.forumService.addForum(forum).subscribe(newForum =>{
      this.forums.unshift(newForum);
      console.log('New forum added:', newForum);
    })
  }

}
