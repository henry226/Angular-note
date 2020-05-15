import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
    url: this.hostUrl +  'api/FileManager/FileOperations',
    uploadUrl: this.hostUrl + 'api/FileManager/Upload',
    getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
    downloadUrl: this.hostUrl + 'api/FileManager/Download'
  };
}
