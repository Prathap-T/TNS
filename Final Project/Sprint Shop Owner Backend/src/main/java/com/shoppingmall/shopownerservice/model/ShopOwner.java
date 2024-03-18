package com.shoppingmall.shopownerservice.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="shop_owner")
public class ShopOwner {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @Column(name = "shop_name")
    private String shopName;
    @Column(name = "contact_number")
    private long contactNumber;
    private String email;
    public ShopOwner() {
    }
    public ShopOwner(String name, String shopName, long contactNumber, String email) {
        this.name = name;
        this.shopName = shopName;
        this.contactNumber = contactNumber;
        this.email = email;
    }
    public long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getShopName() {
        return shopName;
    }
    public void setShopName(String shopName) {
        this.shopName = shopName;
    }
    public long getContactNumber() {
        return contactNumber;
    }
    public void setContactNumber(long contactNumber) {
        this.contactNumber = contactNumber;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
  
    

}
