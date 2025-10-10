import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
    homePage: HomePageState;
    productsPage: ProductsPageState;
}


/** HOMEPAGE **/
export interface HomePageState {
    popularProducts: Product[];
    topUsers: Member[];
}

/** PRODUCTS **/
export interface ProductsPageState {
    shop: Member | null;
    chosenProduct: Product | null;
    products: Product[];
}

/** ORDERS PAGE **/