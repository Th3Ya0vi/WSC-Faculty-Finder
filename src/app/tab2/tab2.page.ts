import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private platform: Platform, private file: File, private fileOpener: FileOpener,private filetransfer : FileTransfer,private documentViewer : DocumentViewer){

  }

  openPdf(){
    let path = this.file.applicationDirectory + "www/assets";

    let fname = Date.now();

    if(this.platform.is('android')){
       this.file.copyFile(path,'Gardner.pdf',this.file.dataDirectory, `${fname}.pdf`).then(results=>{
         this.fileOpener.open(results.nativeURL,'application/pdf');
       }).catch(err=>{
         alert(err);
       })
    }else{
      const options : DocumentViewerOptions = {
        title : "MAP"
      }
      this.documentViewer.viewDocument(`${path}/test.pdf`,'application/pdf',options);
    }
  }
}
