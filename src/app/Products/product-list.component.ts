import { Component } from '@angular/core';
import { IProduct } from './product';
import { filter } from 'minimatch';

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
    products:IProduct[] = [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2019",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2019",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        },
        {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2019",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "assets/images/hammer.png"
        },
        {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2019",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "assets/images/saw.png"
        },
        {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2018",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "assets/images/xbox-controller.png"
        }
      ];

      constructor(){
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
}