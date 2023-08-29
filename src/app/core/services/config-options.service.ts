import { Injectable } from '@angular/core';
import { Config } from '../models/config-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: Config = {
    id: 0,
    login: '',
    email: ''
  };

  setConfig(config: Partial<Config>) {
    this.config = { ...this.config, ...config };
  }

  getConfig(): Config {
    return this.config;
  }

  setConfigProperty<K extends keyof Config>(key: K, value: Config[K]) {
    this.config[key] = value;
  }
}
