import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
// import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { DealerRegistrationComponent } from './dealer-registration/dealer-registration.component';
import { LoginComponent } from './login/login.component';
// import { DealerListComponent } from './dealer-list/dealer-list.component';
import { LogoutComponent } from './logout/logout.component';
import { TransactionComponent } from './transactions/transactions.component';
import { AccountComponent } from './accounts/accounts.component';


export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    
    {path:'aboutus',component:AboutusComponent},
    {path:'register',component:DealerRegistrationComponent},
    {path:'login',component:LoginComponent},
   
    {path:'logout',component:LogoutComponent},
    {path:'transactions',component:TransactionComponent},
    {path:'accounts',component:AccountComponent},


];
