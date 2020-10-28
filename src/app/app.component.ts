import { Component } from '@angular/core';
import { AppApiService } from './app-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SpaceEx Launch programs';
  yearsFilter = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ];
  selectedYearValue;
  selectedLaunchValue: boolean;
  selectedLandingValue: boolean;
  launchPrograms: any[] = [];
  filterQueryParameters: any[] = [];
  constructor(private appApiService: AppApiService) {
    this.getLaunchPrograms();
  }
  applyYearFilter(year) {
    if (this.selectedYearValue === year) {
      this.selectedYearValue = undefined;
      this.filterQueryParameters = this.filterQueryParameters.filter(
        (x) => x.fieldName !== 'launch_year'
      );
    } else {
      this.selectedYearValue = year;
      if (
        this.filterQueryParameters.filter((x) => x.fieldName === 'launch_year')
          .length > 0
      ) {
        this.filterQueryParameters.forEach((element) => {
          if (element.fieldName === 'launch_year') {
            element.value = year;
          }
        });
      } else {
        this.filterQueryParameters.push({
          fieldName: 'launch_year',
          value: year,
        });
      }
    }
    this.getLaunchPrograms();
  }
  applyLaunchFilter(launchFlag: boolean) {
    if (this.selectedLaunchValue === launchFlag) {
      this.selectedLaunchValue = undefined;
      this.filterQueryParameters = this.filterQueryParameters.filter(
        (x) => x.fieldName !== 'launch_success'
      );
    } else {
      this.selectedLaunchValue = launchFlag;
      if (
        this.filterQueryParameters.filter(
          (x) => x.fieldName === 'launch_success'
        ).length > 0
      ) {
        this.filterQueryParameters.forEach((element) => {
          if (element.fieldName === 'launch_success') {
            element.value = launchFlag;
          }
        });
      } else {
        this.filterQueryParameters.push({
          fieldName: 'launch_success',
          value: launchFlag,
        });
      }
    }
    this.getLaunchPrograms();
  }
  applyLadingFilter(landingFlag: boolean) {
    if (this.selectedLandingValue === landingFlag) {
      this.selectedLandingValue = undefined;
      this.filterQueryParameters = this.filterQueryParameters.filter(
        (x) => x.fieldName !== 'land_success'
      );
    } else {
      this.selectedLandingValue = landingFlag;
      if (
        this.filterQueryParameters.filter((x) => x.fieldName === 'land_success')
          .length > 0
      ) {
        this.filterQueryParameters.forEach((element) => {
          if (element.fieldName === 'land_success') {
            element.value = landingFlag;
          }
        });
      } else {
        this.filterQueryParameters.push({
          fieldName: 'land_success',
          value: landingFlag,
        });
      }
    }
    this.getLaunchPrograms();
  }
  getLaunchPrograms() {
    this.appApiService
      .getSpaceLaunchProgram(this.filterQueryParameters)
      .subscribe(
        (response) => {
          this.launchPrograms = response;
        },
        (err) => {}
      );
  }
}
