'use strict';

/* 
CREATE TABLE USER_ (
    
    user_id INT NOT NULL AUTO_INCREMENT,
    auth_jwt_token VARCHAR(255),
    fcm_token VARCHAR(255),
        
    user_name VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    avatar_url VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),

    device_id VARCHAR(255) NOT NULL,
    third_party_id  VARCHAR(255),
        
    date_created DATETIME ,
    date_late DATETIME ,
        
    PRIMARY KEY (user_id)
);

*/
class User{
    constructor(
        user_id, auth_jwt_token, fcm_token,
        
        user_name, full_name, avatar_url,
        email, phone,

        device_id, third_party_id,
        date_created, date_late
        ){
        this.user_id = user_id; // not null
        this.auth_jwt_token = auth_jwt_token; 
        this.fcm_token = fcm_token;
        
        this.user_name = user_name; // not null
        this.full_name = full_name;
        this.avatar_url = avatar_url;
        this.email = email;
        this.phone = phone;

        this.device_id = device_id; // GAID với android, UDID với iOS  // not null
        this.third_party_id = third_party_id; // facebook user id

        this.date_created = date_created;
        this.date_late = date_late;
    }

}
