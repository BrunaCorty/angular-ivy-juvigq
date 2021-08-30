import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
{
  "name": "client-room",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~9.0.0-rc.7",
    "@angular/common": "~9.0.0-rc.7",
    "@angular/compiler": "~9.0.0-rc.7",
    "@angular/core": "~9.0.0-rc.7",
    "@angular/forms": "~9.0.0-rc.7",
    "@angular/platform-browser": "~9.0.0-rc.7",
    "@angular/platform-browser-dynamic": "~9.0.0-rc.7",
    "@angular/router": "~9.0.0-rc.7",
    "bootstrap": "4.5.0",
    "jquery": "3.5.1",
    "rxjs": "~6.5.3",
    "tslib": "^1.10.0",
    "zone.js": "~0.10.2"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.900.0-rc.7",
    "@angular/cli": "~9.0.0-rc.7",
    "@angular/compiler-cli": "~9.0.0-rc.7",
    "@angular/language-service": "~9.0.0-rc.7",
    "@types/node": "^12.11.1",
    "@types/jasmine": "~3.5.0",
    "@types/jasminewd2": "~2.0.3",
    "codelyzer": "^5.1.2",
    "jasmine-core": "~3.5.0",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~4.3.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage-istanbul-reporter": "~2.1.0",
    "karma-jasmine": "~2.0.1",
    "karma-jasmine-html-reporter": "^1.4.2",
    "protractor": "~5.4.2",
    "ts-node": "~8.3.0",
    "tslint": "~5.18.0",
    "typescript": "~3.6.4"
  }
}