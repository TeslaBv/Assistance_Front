import { Injectable } from '@angular/core';
import {CapacitorBarcodeScanner} from '@capacitor/barcode-scanner';

@Injectable({
  providedIn: 'root'
})
export class ScanService {

  constructor() { }

  async startScan(){
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: 0,
        cameraDirection: 1
      });
      console.log(result);
      return result.ScanResult;
    }catch(e){
      return e;
    }
  }
}
