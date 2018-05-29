import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from './api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers: [ConfigService],
})
export class ApiComponent implements OnInit {
  error: any;
  headers: string[];
  config: Config;

  constructor(private configService: ConfigService) {}

  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
        Steps: data['Steps']
      });
  }

  ngOnInit() {
  }

}
