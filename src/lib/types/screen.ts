import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
    homePage: HomePageState;
}


/** HOMEPAGE **/
export interface HomePageState {
    popularProducts: Product[];
    newProducts: Product[];
    topUsers: Member[];
}

/** PRODUCTS **/

/** ORDERS PAGE **/