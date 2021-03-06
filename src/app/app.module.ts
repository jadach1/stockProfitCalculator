import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpClientModule }         from '@angular/common/http';
import { AppRoutingModule }         from './app-routing/app-routing.module';
import { ToastrModule }             from 'ngx-toastr';
import { DemoMaterialModule }       from '../material-module';
import { MAT_DATE_LOCALE }          from '@angular/material';
//import {MatDialogModule}            from '@angular/material';
import {BrowserAnimationsModule}    from '@angular/platform-browser/animations';
import { AppComponent }             from './app.component';
import { CurrentAssetsComponent }   from './current-assets/current-assets.component';
import { AddTransactionComponent }  from './add-transaction/add-transaction.component';
import { AllTransactionComponent }  from './all-transaction/all-transaction.component';
import { AssetDetailsComponent }    from './asset-details/asset-details.component';
import { SidebarComponentComponent} from './components/sidebar-component/sidebar-component.component';
import { ContributionsComponent,
         ContributionForm,
         OwnerForm }                from './contributions/contributions.component';




@NgModule({
  declarations: [
    AppComponent,
    CurrentAssetsComponent,
    AddTransactionComponent,
    AllTransactionComponent,
    AssetDetailsComponent,
    ContributionForm,
    OwnerForm,
    SidebarComponentComponent,
    ContributionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
  //  MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [
    ContributionForm,
    OwnerForm
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
