

use kamichat


create table users (

    UserID int auto_increment,

    username varchar(50) not null,
    password varchar(255) not null,
    phonenumber varchar(15) not null,
    email varchar(255),
    country varchar(20),

    createdAt varchar(30) not null,
    updatedAt varchar(30) not null,

    unique (UserID),
    primary key (UserID)
);

alter table users
add profile_picture varchar(255);





