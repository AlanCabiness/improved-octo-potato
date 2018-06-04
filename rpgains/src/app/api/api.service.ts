import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  Steps: number;
}

@Injectable()
export class ConfigService {
  configUrl = 'googleapis.com/fitness/v1/users/me/dataSources';
  clientID = '395753503829-q2g5n5gdc8au3u7gm7a8q6ol32t09q16.apps.googleusercontent.com';
  private clientSecret = 'E8wGOThjYgR4RcqE9EmYEVT3'
  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
