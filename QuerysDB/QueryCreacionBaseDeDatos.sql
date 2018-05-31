create database agencia;
use agencia;

-- 1
create table gerente_global (
	id_gerente_global int not null primary key auto_increment,
    nombre varchar(100),
    telefono varchar(20),
    email varchar(50),
    domicilio varchar(100),
    salario int
);


-- 2
CREATE table planta (
	id_planta int not null primary key auto_increment,
    direccion varchar(100),
    municipio varchar(100),
    estado varchar(100),
    codigo_postal int,
    region varchar(30),
    id_gerente_global int,
    FOREIGN KEY (id_gerente_global) REFERENCES gerente_global(id_gerente_global)
);


-- 3
create table sucursal (
	id_sucursal int not null primary key auto_increment,
	direccion varchar(100),
	municipio varchar(100),
    estado varchar(100),
    codigo_postal int,
    region varchar(30)
);


-- 3
create table gerente_agencia (
	id_gerente_agencia int not null primary key auto_increment,
	nombre varchar(100),
    telefono varchar(20),
    email varchar(50),
    domicilio varchar(100),
    salario int,
    id_gerente_global int,
    id_sucursal int,
	FOREIGN KEY (id_gerente_global) REFERENCES gerente_global(id_gerente_global),
	FOREIGN KEY (id_sucursal) REFERENCES sucursal(id_sucursal)
);


-- 4
create table vendedor (
	id_vendedor int not null primary key auto_increment,
    nombre varchar(50),
	telefono varchar(20),
    email varchar(50),
    domicilio varchar(100),
    salario int,
	id_gerente_agencia int,
    foreign key (id_gerente_agencia) references gerente_agencia(id_gerente_agencia)
);


-- 5
create table cliente (
	id_cliente int not null primary key auto_increment,
	nombre varchar(50),
	telefono varchar(20),
    email varchar(50),
    domicilio varchar(100),
    id_vendedor int,
    foreign key (id_vendedor) references vendedor(id_vendedor)
);


-- 6
create table compra (
	id_compra int not null primary key auto_increment,
    id_vendedor int,
    id_cliente int,
	foreign key (id_vendedor) references vendedor(id_vendedor),
	foreign key (id_cliente) references cliente(id_cliente)
);


-- 7 
create table carro (
	id_carro int not null primary key auto_increment,
	marca varchar(30),
    nombre varchar(30),
    modelo int,
    version varchar(10),
    transmision varchar(20),
    color varchar(20),
    numero_serie int,
    statuss varchar(20)
);


-- 8 
create table orden_compra (
	id_fecha datetime,
	id_compra int,
    id_carro int,
    foreign key (id_carro) references carro(id_carro),
    foreign key (id_compra) references compra(id_compra)
);


-- 10
create table stock (
	id_stock int not null primary key auto_increment,
    id_sucursal int,
	id_carro int,
	FOREIGN KEY (id_sucursal) REFERENCES sucursal(id_sucursal),
    FOREIGN KEY (id_carro) REFERENCES carro(id_carro)
);
