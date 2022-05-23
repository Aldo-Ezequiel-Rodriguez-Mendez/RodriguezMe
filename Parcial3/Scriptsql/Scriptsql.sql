create database `19100243`;
use `19100243`;

create table camiseta
(
    idCamiseta smallint auto_increment,
    nomProveedor varchar(30),
    nomMarca varchar(30),
    talla varchar(20),
    material varchar(20),
    stock int (10),
    descripcion varchar(50),
    precio decimal (10),
    primary key (idCamiseta)
);

insert into camiseta (nomProveedor,nomMarca,talla,material,stock,descripcion,precio)
values ('Proveedor 1','Hollister','Grande','Algodon',5,'camiseta color negra con franjas blancas',500);

insert into camiseta (nomProveedor,nomMarca,talla,material,stock,descripcion,precio)
values ('Proveedor 2','Vans','Chica','Sintetica',3,'camiseta color azul',500);

insert into camiseta (nomProveedor,nomMarca,talla,material,stock,descripcion,precio)
values ('Proveedor 3','Levis','Chica','Sintetica',10,'camiseta color blanco',250);

insert into camiseta (nomProveedor,nomMarca,talla,material,stock,descripcion,precio)
values ('Proveedor 4','adidas','Grande','Sintetica',10,'camiseta color blanco',250);

insert into camiseta (nomProveedor,nomMarca,talla,material,stock,descripcion,precio)
values ('Proveedor 4','nike','Grande','Algodon',5,'camiseta color negra',300);

insert into camiseta (nomProveedor,nomMarca,talla,material,stock,descripcion,precio)
values ('Proveedor 1','gucci','Mediana','Sintetica',3,'camiseta color negra',250);

insert into camiseta (nomProveedor,nomMarca,talla,material,stock,descripcion,precio)
values ('Proveedor 5','puma','Mediana','Algodon',10,'camiseta color azul',500);