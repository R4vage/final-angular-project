import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavData } from 'src/app/core/models/nav-data.models';
import { sideNavData } from './nav-data';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
  sections: NavData[] = sideNavData;
}
