import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { NgFor } from '@angular/common';
import { TaskItem } from "../task-item/task-item";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  imports: [NgFor, TaskItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  tasks: Task[] = TASKS;
  faTimes = faTimes;
}
