import { TestBed } from '@angular/core/testing';

import { AutoInputService } from './auto-input.service';

describe('AutoInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoInputService = TestBed.get(AutoInputService);
    expect(service).toBeTruthy();
  });
});
