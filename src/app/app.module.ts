import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { About } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    About
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    About
  ],
  providers: []
})
export class AppModule {}
