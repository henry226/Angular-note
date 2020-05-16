import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object;
  public view: string;
  public enablePersistence: boolean;

  ngOnInit() {
    this.ajaxSettings = {
      url: this.hostUrl +  'api/FileManager/FileOperations',
      uploadUrl: this.hostUrl + 'api/FileManager/Upload',
      getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
      downloadUrl: this.hostUrl + 'api/FileManager/Download'
    };

    // Initial view of File Manager is set to details view
    //this.view = 'Details';

    this.enablePersistence = true;
  }

  // File Manager's created event function
  // OnCreat(args: any) {
  //   console.log('File Manager has been created successfully');
  // }

  // File Manager's file onSuccess function
  onAjaxSuccess(args: any) {
    console.log('Ajax request successful');
  }

  // File Manager's file onError function
  onAjaxFailure(args: any) {
    console.log('Ajax request has failed');
  }
}
