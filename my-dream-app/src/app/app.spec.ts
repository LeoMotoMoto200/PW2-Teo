// src/app/app.component.spec.ts

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// 1. Importa los componentes que AppComponent necesit
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 2. Añade AppComponent y todas sus dependencias al array de 'imports'
      imports: [
        AppComponent,
        RouterOutlet // RouterOutlet también es una dependencia usada en tu plantilla
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'PW2-Teo' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PW2-Teo');
  });

  // Esta prueba fallará porque no tienes un h1 con ese texto.
  // Puedes borrarla o adaptarla a tu contenido real.
  /*
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, PW2-Teo');
  });
  */
});