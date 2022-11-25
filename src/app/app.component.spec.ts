

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SPAComponent } from 'src/spa/services/spa.component';
import { SPAModule } from 'src/spa/services/spa.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TrackbyComponent } from './binding/trackby.component';
import { Consumer2Component } from './consumer2.component';
import { InjectComponent } from './dynamic/inject.component';
import { HttpComponent } from './http/http.component';
import { WeatherComponent } from './http/weather.component';
import { ChildComponent, LifeCycleComponent } from './lifecycle/complifecycle';
import { Consumer1Component } from './messaging/consumer1.component';
import { MessageComponent } from './messaging/message.component';
import { ButtonComponent } from './ngcontentdemo/button.component';
import { CardComponent } from './ngcontentdemo/card.component';
import { ParentComponent } from './ngcontentdemo/parent.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SPAModule
      ],
      declarations: [
        SPAComponent,
        AppComponent,
        BindingComponent,
        TrackbyComponent,
        ChildComponent, 
        LifeCycleComponent,
        InjectComponent,
        WeatherComponent,
        HttpComponent,
        MessageComponent,
        Consumer1Component,
        Consumer2Component,
        ButtonComponent,
        ParentComponent,
        CardComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularapp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Angular SPA Project');
  });
});
