import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-list',
  templateUrl: './drag-list.component.html',
  styleUrls: ['./drag-list.component.scss']
})
export class DragListComponent  {

  isDragging: number | null = null;

  date: Date = new Date();
  appointments = [
    { id: 1, time: '9:00 AM', title: 'Meeting with team' },
    { id: 2, time: '11:00 AM', title: 'Project update' },
    { id: 3, time: '2:00 PM', title: 'Call with client' },
  ];

  getAppointmentsOnDate(date: Date) {
    return this.appointments;
  }

  getConnectedDropLists(date: Date) {
    return ['calendar-list'];
  }

  editAppointment(appointment: any) {
    console.log('Edit appointment:', appointment);
  }

  deleteAppointment(id: number, event: Event) {
    event.stopPropagation();
    this.appointments = this.appointments.filter(
      (appointment) => appointment.id !== id
    );
  }

  onDragStarted(appointment: any, index: number) {
    console.log('Drag started:', appointment);
    this.isDragging = index;
  }

  onDragEnded() {
    this.isDragging = null;
  }

  onDrop(event: CdkDragDrop<any[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    console.log('New order:', event.container.data);
  }
}
