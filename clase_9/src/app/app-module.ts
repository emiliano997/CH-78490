import { isDevMode, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore, StoreModule } from '@ngrx/store';
import { rootReducer } from './core/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([]),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  bootstrap: [App],
})
export class AppModule {}
