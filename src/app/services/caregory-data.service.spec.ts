import { TestBed } from '@angular/core/testing';

import { CaregoryDataService } from './caregory-data.service';

describe('CaregoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaregoryDataService = TestBed.get(CaregoryDataService);
    expect(service).toBeTruthy();
  });
});
