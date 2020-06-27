import {
  Component,
  ChangeDetectorRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';

import { MatAccordion } from '@angular/material/expansion';

// Vendor
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnDestroy {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  private mediaMatcher: MediaQueryList = matchMedia('(max-width:720px)');

  constructor() {}

  ngOnDestroy(): void {}

  onSmallScreen(): boolean {
    return this.mediaMatcher.matches;
  }

  onSidenavClose() {}
}
