import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MediaViewComponent } from "./dialogs/media-view/media-view.component";
import { FileChooserComponent } from "./file-chooser/file-chooser.component";
import { ImageDownloadComponent } from "./image-download/image-download.component";
import { MaterialModule } from "./material/material.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouterTab } from "./router-tab/router-tab.directive";
import { RouterTabs } from "./router-tab/router-tabs.directive";



@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [PageNotFoundComponent, RouterTabs, RouterTab, FileChooserComponent, ImageDownloadComponent, MediaViewComponent],
  exports: [
    CommonModule,
    PageNotFoundComponent,
    RouterTabs,
    RouterTab,
    FileChooserComponent,
    ImageDownloadComponent
  

  ]
})
export class SharedModule {}
