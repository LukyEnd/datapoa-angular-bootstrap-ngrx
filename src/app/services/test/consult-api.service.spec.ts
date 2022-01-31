import { TestBed } from '@angular/core/testing';
import { ConsultApiService } from '../consult-api.service';

describe('ConsultApiService', () => {
  let service: ConsultApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
