import { Injectable } from '@angular/core';
import { Constant } from '../models/constant-model';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  public constant: Constant = { App: 'TaskManager', Ver: '1.0', API_URL: 'http://...' };

  getConstant(): Constant {
    return this.constant;
  }
}

export const ConstantInstance = new ConstantService();
