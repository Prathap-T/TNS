import { Component } from '@angular/core';
import { ShopownerService } from './shopowner.service';
import { Shopowner } from './shopowner.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopowner',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './shopowner.component.html',
  styleUrl: './shopowner.component.css'
})
export class ShopownerComponent {
  ngOnInit(): void {
    this.getShopOwners()
}

constructor(private shopOwnerService:ShopownerService){}

newShopOwner:Shopowner= {name:"",shopName:"",contactNumber:0,email:""};
shopOwnerList:Shopowner[]=[];
deleteId:number | null=null;
editId:number | null=null;
editRecord:Shopowner = {name:"",shopName:"",contactNumber:0,email:""};

addNewShopOwner(){
  console.log(this.newShopOwner)
  this.shopOwnerService.addShopowner(this.newShopOwner).subscribe(result=>{
    this.shopOwnerList.push(result);
  });
  this.newShopOwner= {name:"",shopName:"",contactNumber:0,email:""};
}
getShopOwners(){
  this.shopOwnerService.getShopowner().subscribe(result=>{
    this.shopOwnerList = result;
  })
}
setDeleteId(id: number | undefined){
  if (id !== undefined) {
    // If id is defined, assign it to the recordId property
    this.deleteId = id;
  } else {
    // If id is undefined, log an error or handle the case appropriately
    console.error("Failed to store record ID - Placement ID is undefined");
  }
}

setEditId(id: number | undefined){
  if (id !== undefined) {
    // If id is defined, assign it to the recordId property
    this.editId = id;
    this.shopOwnerService.getShopownerById(this.editId).subscribe(result=>{
      this.editRecord=result;
    });
  } else {
    // If id is undefined, log an error or handle the case appropriately
    console.error("Failed to store record ID - Placement ID is undefined");
  }
}

deleteShopOwner(){
  if (this.deleteId !== null) {
    // Call your service method to delete the record with this.deleteId
    this.shopOwnerService.removeShopowner(this.deleteId).subscribe(() => {
      // Update UI by removing the deleted record from shopList array
    this.getShopOwners();
    });
    // Reset deleteId after deletion
    this.deleteId = null;
  }
}

editShopOwner(){
  if (this.editId !== null) {
    // Call your service method to delete the record with this.deleteId
    this.shopOwnerService.updateShopowner(this.editId,this.editRecord).subscribe(result=>{
      this.getShopOwners();
    });
    this.editRecord= {name:"",shopName:"",contactNumber:0,email:""};
    // Reset deleteId after deletion
    this.editId = null;
  }
}
}
