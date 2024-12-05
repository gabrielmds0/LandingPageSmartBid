import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  scrollToFormSection() {
    const formElement = document.getElementById('formSection');
    if (formElement) {
      const elementPosition =
        formElement.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = elementPosition - startPosition;
      const duration = 1000;
      let startTime: number | null = null;

      const easeInOutQuad = (
        time: number,
        start: number,
        change: number,
        duration: number
      ) => {
        time /= duration / 2;
        if (time < 1) return (change / 2) * time * time + start;
        time--;
        return (-change / 2) * (time * (time - 2) - 1) + start;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  }
  scrollToBody2Section() {
    const body2Element = document.getElementById('body2Section');
    if (body2Element) {
      const elementPosition =
      body2Element.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = elementPosition - startPosition;
      const duration = 1000;
      let startTime: number | null = null;

      const easeInOutQuad = (
        time: number,
        start: number,
        change: number,
        duration: number
      ) => {
        time /= duration / 2;
        if (time < 1) return (change / 2) * time * time + start;
        time--;
        return (-change / 2) * (time * (time - 2) - 1) + start;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  }
}
