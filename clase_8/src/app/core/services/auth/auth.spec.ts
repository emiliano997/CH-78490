import { inject, TestBed } from '@angular/core/testing';
import { AuthService } from './auth';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { Router } from '@angular/router';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('Auth Service Tests', () => {
  let service: AuthService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, provideHttpClient(withFetch()), Router],
    });
    service = TestBed.inject(AuthService);
    http = TestBed.inject(HttpClient);
  });

  it('Debería crear el servicio', () => {
    expect(service).not.toBeNull();
  });

  it('Debería devolver un booleano si está logueado', () => {
    expect(service.isAuthenticated()).toBe(false);
  });

  // it('Debería llamar a login', () => {
  //   const httpSpy = spyOn(http, 'get');
  //   service.login('email', 'password');
  //   expect(httpSpy).toHaveBeenCalled();
  // });
});
