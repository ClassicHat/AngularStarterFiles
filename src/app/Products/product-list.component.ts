import { Component } from '@angular/core';
import { IProduct } from './product';
import { filter } from 'minimatch';
import { ProductService } from './product.service';

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html"
})


export class ProductListComponent{
    pageTitle:string = "DilCoInc Products";
    imageWidth:number = 50;
    imageMargin:number = 4;
    showImage:boolean = true;
    _listFilter:string = '';
    filterProduct:IProduct[];
    products:IProduct[] = [];

      constructor(private productService: ProductService){
        this.products = productService.getProduct();
        this.filterProduct = this.products;
      };

      toggleImage():void {
          this.showImage = !this.showImage;
      }

      get listFilter() : string {
          return this._listFilter;
      }

      set listFilter(value:string){
        this._listFilter = value;
        console.log('Value Entered: ' + this.listFilter);
                                      //The value of the filter box is sent to performFilter
        this.filterProduct = this.listFilter ? this.performFilter(this.listFilter) : this.products;

      }

      performFilter(filterBy: string) : IProduct[]{
        //Converts everything typed to lower case
        filterBy = filterBy.toLowerCase();
        console.log('Case Change Value: ' + filterBy);
        
        console.log(this.products.filter((product: IProduct) =>
        product.productName.toLowerCase().indexOf(filterBy) !== -1));

        //Returns objects in the product array as an array by filtering them using the text entered by the user.
        return this.products.filter((product: IProduct) =>
            product.productName.toLowerCase().indexOf(filterBy) !== -1);
      }

      onRatingClicked(message:string):void{
        this.pageTitle = message;
      }
}