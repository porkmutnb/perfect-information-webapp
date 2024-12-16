import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  [x: string]: any;
  title = 'perfect-information-webapp';
  isTab = true;
  isButtonVisible: boolean = false; // แสดง/ซ่อนปุ่ม

  onMenuTab(): void {
    this.isTab = !this.isTab;
  }

  // ฟังก์ชันเลื่อนกลับไปด้านบน
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // เพิ่มความลื่นไหล
    });
  }

  // ติดตามการเลื่อนของผู้ใช้
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isButtonVisible = scrollPosition > 300; // แสดงปุ่มเมื่อเลื่อนเกิน 300px
  }
}
