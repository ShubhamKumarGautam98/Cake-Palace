import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { closingguardGuard } from './closingguard.guard';

describe('closingguardGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => closingguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
