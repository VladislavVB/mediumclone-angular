import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from 'src/app/app-routing.module'
import { AppComponent } from 'src/app/app.component'
import { AuthModule } from 'src/app/auth/auth.module'
import { TopBarModule } from './shared/modules/topBar/topBar.module'
import { GlobalFeedModule } from './globalFeed/globalFeed.module'
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store'
import { YourFeedModule } from './yourFeed/yourFeed.module'
import { TagFeedModule } from './tagFeed/tagFeed.module'
import { ArticleModule } from './article/article.module'
import { CreateArticleModule } from './create-article/create-article.module'
import { EditArticleModule } from './edit-article/edit-article.module'
import { SettingsModule } from './settings/settings.module'
import { UserProfileModule } from './user-profile/user-profile.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    EffectsModule.forFeature([]),
    StoreModule.forRoot({ router: routerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    UserProfileModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule,
    EditArticleModule,
    SettingsModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
