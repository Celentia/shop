import { Component, Inject, InjectionToken, OnInit, inject } from '@angular/core';
import { ProductCategory } from '../products/models/product-category.enum';
import { ConstantService, ConstantInstance } from '../core/services/constant.service';
import { LocalStorageService } from '../core/services/local-storage.service';
import { ConfigOptionsService } from '../core/services/config-options.service';
import { Config } from '../core/models/config-model';
import { CommonModule } from '@angular/common';
import { GeneratedString, GeneratorFactory } from '../core/services/generator.factory';
import { GeneratorService } from '../core/services/generator.service';
import { Constant } from '../core/models/constant-model';

const constantData = new InjectionToken<string>('constantData', {
  providedIn: 'root',
  factory: () => 'First component'
});

@Component({
  selector: 'app-first',
  standalone: true,
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    { provide: ConstantService, useValue: ConstantInstance },
    { provide: LocalStorageService, useValue: new LocalStorageService() },
    ConfigOptionsService,
    GeneratorService,
    {
      provide: GeneratedString,
      useFactory: GeneratorFactory(10),
      deps: [GeneratorService]
    }
  ],
  imports: [CommonModule]
})
export class FirstComponent implements OnInit {
  name = 'Earl Grey';
  description = 'Super cool tea';
  price = 49;
  category = ProductCategory.Black;
  isAvailable = true;
  config!: Config;
  constant!: Constant;
  generatedLine = '';
  generatedID = 0;

  private localStorageService = inject(LocalStorageService, { optional: true });
  private configOptionsService = inject(ConfigOptionsService);
  private constantService = inject(ConstantService);
  private generatorService = inject(GeneratorService);

  constructor(
    @Inject(constantData) public constantData: ConstantService,
    @Inject(GeneratedString) private generatedString: string
  ) {}

  ngOnInit() {
    this.config = this.configOptionsService.getConfig();
    this.constant = this.constantService.getConstant();
    this.generatedLine = this.generatedString;
    this.generatedID = this.generatorService.getNewID();
  }

  updateConfig() {
    const newConfig: Partial<Config> = {
      id: 1,
      login: 'newLogin'
    };
    this.configOptionsService.setConfig(newConfig);
    this.config = this.configOptionsService.getConfig();
  }

  updateConfigProperty() {
    this.configOptionsService.setConfigProperty('email', 'newEmail@example.com');
    this.config = this.configOptionsService.getConfig();
  }

  saveKey() {
    if (!this.localStorageService) return;
    this.localStorageService.setItem('key', 'key example');
  }

  removeKey() {
    if (!this.localStorageService) return;
    this.localStorageService.removeItem('key');
  }
}
