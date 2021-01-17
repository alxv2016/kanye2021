import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'kanye-container',
  template: `
    <ng-content select="kanye-card"></ng-content>
    <div class="kanye-footer">
      <svg class="kanye-brand" viewBox="0 0 888 109">
        <path
          d="M21.504 109V77.16l11.43-12.543L59.652 109h24.79L46.737 48.734 83.105.937h-25.53L31.3 37.23l-9.797 13.211V.937H.574V109h20.93zm196.758 0l6.383-22.563h32.433L263.387 109h21.968L250.621.937h-18.926L196.293 109h21.969zm33.918-40.3h-22.414l11.355-39.782 11.059 39.781zM427.562 109V39.309L457.623 109h20.78V.937h-20.93l-.074 69.395L427.562.938H406.56V109h21.003zm229.86 0l.074-37.406L691.488.938h-22.933l-21.301 49.8-21.3-49.8h-22.86l33.472 69.765.075 38.297h20.78zm230.156 0V92.152H835.7V61.648h44.383V45.172h-44.383V17.934h51.656V.937H814.77V109h72.808z"
        />
      </svg>
    </div>
    <ng-content select="progress-bar"></ng-content>
  `,
  styleUrls: ['./kanye-container.component.scss'],
})
export class KanyeContainerComponent {}
