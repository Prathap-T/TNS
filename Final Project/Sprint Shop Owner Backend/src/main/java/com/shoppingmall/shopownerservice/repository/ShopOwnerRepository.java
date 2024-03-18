package com.shoppingmall.shopownerservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shoppingmall.shopownerservice.model.ShopOwner;

public interface ShopOwnerRepository extends JpaRepository<ShopOwner,Long>{
    
}
