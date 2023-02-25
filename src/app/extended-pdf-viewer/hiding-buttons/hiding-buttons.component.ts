import { Component } from '@angular/core';
import { NgxExtendedPdfViewerService, ResponsiveVisibility } from 'ngx-extended-pdf-viewer';
import { isLocalhost } from '../common/utilities';

@Component({
  selector: 'app-hiding-buttons',
  templateUrl: './hiding-buttons.component.html',
  styleUrls: ['./hiding-buttons.component.css']
})
export class HidingButtonsComponent {
  public showToolbar = true;
  public showSidebarButton = false;
  public showFindButton = false;
  public showEditorDraw = false;
  public showEditorText = false;
  public showPagingButtons = false;
  public showZoomButtons = false;
  public showPresentationModeButton = false;
  public showOpenFileButton = false;
  public showPrintButton = false;
  public showDownloadButton = true;
  public showSecondaryToolbarButton = true;
  public showRotateButton = false;
  public showHandToolButton = false;
  public showScrollingButton = false;
  public showSpreadButton = false;
  public showPropertiesButton = false;
  public downloadFileName = 'user-defined-name.pdf';

  public isLocalhost = isLocalhost();

  private _fullscreen = false;

  public settingsWidth = "60%";

  public codeWidth = "38%";

  private _currentTab = 0;

  public get currentTab(): number {
    return this._currentTab;
  }

  public set currentTab(tab: number) {
    this._currentTab = tab;
    if (this.currentTab===1) {
      this.codeWidth = "0";
      this.settingsWidth = "100%";
      this.showToolbar = true;
      this.showSecondaryToolbarButton = true;
    } else {
      this.codeWidth = "38%";
      this.settingsWidth = "60%";
    }
  }

  public options: Array<ResponsiveVisibility> = [true, false, 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

  public get fullscreen(): boolean {
    return this._fullscreen;
  }

  public set fullscreen(full: boolean) {
    this._fullscreen = full;
    setTimeout(() =>
    this.pdfService.recalculateSize());
  }

  public get sourcecode() {
    return `<ngx-extended-pdf-viewer
  [src]="'/assets/pdfs/pdf-sample.pdf'"
  [showToolbar]="${this.showToolbar}"
  [showSidebarButton]="${this.showSidebarButton}"
  [showFindButton]="${this.showFindButton}"
  [showPagingButtons]="${this.showPagingButtons}"
  [showEditorDraw]="${this.showEditorDraw}"
  [showEditorText]="${this.showEditorText}"
  [showZoomButtons]="${this.showZoomButtons}"
  [showPresentationModeButton]="${this.showPresentationModeButton}"
  [showOpenFileButton]="${this.showOpenFileButton}"
  [showPrintButton]="${this.showPrintButton}"
  [showDownloadButton]="${this.showDownloadButton}"
  [showSecondaryToolbarButton]="${this.showSecondaryToolbarButton}"
  [showRotateButton]="${this.showRotateButton}"
  [showHandToolButton]="${this.showHandToolButton}"
  [showScrollingButton]="${this.showScrollingButton}"
  [showSpreadButton]="${this.showSpreadButton}"
  [showPropertiesButton]="${this.showPropertiesButton}"
  height="250px" zoom="25%">
</ngx-extended-pdf-viewer>
`;
  }

  constructor(private pdfService: NgxExtendedPdfViewerService) {}
}
