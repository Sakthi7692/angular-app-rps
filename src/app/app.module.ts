import { ApplicationRef, NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TrackbyComponent } from './binding/trackby.component';
import { DIModule } from './di/di.module';
import { InjectComponent } from './dynamic/inject.component';
import { IOModule } from './intercomp/io.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StockComponent } from './intercomp/stock.component';
import { ChildComponent, LifeCycleComponent } from './lifecycle/complifecycle';
import { WeatherComponent } from './http/weather.component';
import { HttpComponent } from './http/http.component';
import { MessageComponent } from './messaging/message.component';
import { Consumer1Component } from './messaging/consumer1.component';
import { Consumer2Component } from './consumer2.component';
import { ButtonComponent } from './ngcontentdemo/button.component';
import { ParentComponent } from './ngcontentdemo/parent.component';
import { CardComponent } from './ngcontentdemo/card.component';
import { NgMessageModule } from './realtime/ngmessage.module';
import { SPAModule } from 'src/spa/services/spa.module';
import { CalclibModule } from 'calclib';
import { TempPipe } from './pipes/temp.pipe';
import { SquarePipe } from './square.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
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
    CardComponent,
    TempPipe,
    SquarePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DIModule,
    IOModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMessageModule,
    SPAModule,
    CalclibModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private appRef: ApplicationRef) {
    /*const ogTick = appRef.tick;
    appRef.tick = function() {
      const winPerf = window.performance;
      const before = winPerf.now();
      const refValue = ogTick.apply(this);
      const after = winPerf.now();
      const runTime = after - before;
      console.log("Window time taken", runTime);
      return refValue;
    }*/
  }
}
