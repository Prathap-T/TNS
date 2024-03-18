package com.shoppingmall.shopownerservice.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shoppingmall.shopownerservice.model.ShopOwner;
import com.shoppingmall.shopownerservice.repository.ShopOwnerRepository;

@RestController
@RequestMapping("/shopowner")
@CrossOrigin(origins = "http://localhost:4200")
public class ShopOwnerController {
    
    @Autowired
    ShopOwnerRepository db;
    
    @GetMapping("")
    public List<ShopOwner> getUsers(){
        return db.findAll();
    }
    @GetMapping("/{id}")
    public ShopOwner getUserById(@PathVariable("id") long id){
        return db.findById(id).get();
    }
    @PostMapping("")
    public ShopOwner addUser(@RequestBody Map<String, String> body){
        String name = body.get("name");
        String shopName = body.get("shopName");
        Long contactNumber = Long.parseLong(body.get("contactNumber"));
        String email = body.get("email");
        ShopOwner newUser = new ShopOwner(name,shopName,contactNumber,email);
        db.save(newUser);
        return newUser;
    }
    @PutMapping("/{id}")
    public ShopOwner updateUser(@PathVariable("id") long id, @RequestBody Map<String, String> body){
        ShopOwner existingUser = db.findById(id).get();
        existingUser.setName(body.get("name"));
        existingUser.setShopName(body.get("shopName"));
        existingUser.setContactNumber(Long.parseLong(body.get("contactNumber")));
        existingUser.setEmail(body.get("email"));
        db.save(existingUser);
        return existingUser;
    }
    @DeleteMapping("/{id}")
    public ShopOwner removePlacement(@PathVariable("id") long id){
        ShopOwner placement = db.findById(id).get();
        db.deleteById(id);
        return placement;
    }
}
