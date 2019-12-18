import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';

xdescribe('MasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterService = TestBed.get(MasterService);
    expect(service).toBeTruthy();
  });
});
