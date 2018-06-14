create database agencia2;
use agencia2;

-- truncate usuario;
-- select * from usuario;
CREATE TABLE usuario (
  id_usuario int(10) NOT NULL AUTO_INCREMENT,
  email varchar(40) NOT NULL,
  `password` varchar(200) NOT NULL,
  tipo varchar(20) NOT NULL,
  PRIMARY KEY (id_usuario),
  UNIQUE KEY id_usuario_UNIQUE (id_usuario),
  UNIQUE KEY email_UNIQUE (email)
)engine = ndbcluster;--  ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- describe usuario;

-- INSERT INTO usuario(email, contraseña, tipo_usuario) VALUES ('ocastrejon@ucol.mx', '12345', 'gerente_global');
-- INSERT INTO gerente_global(id_usuario, nombre, telefono, domicilio, salario) VALUES (1, 'Oscar', '312312313', 'vfevrvrfvsw', 30000);

-- select u.id_usuario, u.email, u.tipo_usuario, g.nombre, g.telefono, g.domicilio, g.salario from usuario as u 
-- INNER join gerente_global as g on u.id_usuario = g.id_usuario;

-- select u.id_usuario as id_u_d_u, u.email, u.tipo_usuario, g.id_usuario as id_u_d_gerente, g.nombre, g.telefono, g.domicilio, g.salario from usuario as u 
-- INNER join gerente_global as g on u.id_usuario = g.id_usuario;
-- 1
-- select * from gerente_global;
create table gerente_global (
    nombre varchar(100),
    telefono varchar(20),
    email varchar(50),
    domicilio varchar(100),
    salario int,
    id_usuario int,
    primary key (id_usuario),
    foreign key (id_usuario) references usuario (id_usuario)
)engine = ndbcluster;


-- 2
CREATE table planta (
	id_planta int not null auto_increment,
    direccion varchar(100),
    municipio varchar(100),
    estado varchar(100),
    codigo_postal int,
    region varchar(30),
    id_gerente_global int,
    primary key (id_gerente_global, id_planta),
    FOREIGN KEY (id_gerente_global) REFERENCES gerente_global(id_usuario)
)engine = ndbcluster;


-- 3
create table sucursal (
	id_sucursal int not null auto_increment,
	direccion varchar(100),
	municipio varchar(100),
    estado varchar(100),
    codigo_postal int,
    region varchar(30),
    primary key (id_sucursal)
)engine = ndbcluster;


-- 3
create table gerente_agencia (
	id_usuario int,
	nombre varchar(100),
    telefono varchar(20),
    email varchar(50),
    domicilio varchar(100),
    salario int,
    id_gerente_global int,
    id_sucursal int,

    primary key (id_usuario, id_gerente_global, id_sucursal),

    foreign key (id_usuario) references usuario (id_usuario),

    FOREIGN KEY (id_gerente_global) REFERENCES gerente_global(id_usuario),
	FOREIGN KEY (id_sucursal) REFERENCES sucursal(id_sucursal)
)engine = ndbcluster;


-- 4
create table vendedor (
	id_usuario int,
	nombre varchar(100),
    telefono varchar(20),
    email varchar(50),
    domicilio varchar(100),
    salario int,
    id_gerente_agencia int,

    primary key (id_usuario, id_gerente_agencia),

    foreign key (id_usuario) references usuario (id_usuario),

    FOREIGN KEY (id_gerente_agencia) REFERENCES gerente_agencia (id_usuario)
)engine = ndbcluster;


-- 5
create table cliente (
	id_cliente int not null auto_increment,
	nombre varchar(50),
	telefono varchar(20),
    email varchar(50),
    domicilio varchar(100),
    id_vendedor int,
    primary key (id_cliente, id_vendedor),
    foreign key (id_vendedor) references vendedor(id_usuario)
)engine = ndbcluster;


-- 6
create table compra (
	id_compra int not null auto_increment,
    id_vendedor int,
    id_cliente int,
    primary key (id_compra, id_vendedor, id_cliente),
	foreign key (id_vendedor) references vendedor(id_usuario),
	foreign key (id_cliente) references cliente(id_cliente)
)engine = ndbcluster;


-- 7 
drop table if exists carro;
create table carro (
	id_carro int not null auto_increment,
	marca varchar(30),
    nombre varchar(30),
    modelo int,
    version varchar(20),
    transmision varchar(20),
    color varchar(20),
    frenos varchar(20),
    `a/a` varchar(20),
    bolsas_de_aire varchar(20),
    cilindros int,
    precio int,
    numero_serie int unique,
    statuss varchar(20),
    primary key (id_carro)
)engine = ndbcluster;


-- 8 
create table orden_compra (
	id_fecha datetime,
	id_compra int,
    id_carro int,
    primary key (id_fecha, id_compra, id_carro),
    foreign key (id_carro) references carro(id_carro),
    foreign key (id_compra) references compra(id_compra)
)engine = ndbcluster;


-- 10
create table stock (
	id_stock int not null auto_increment,
    id_sucursal int,
	id_carro int,
    primary key (id_stock, id_sucursal, id_carro),
	FOREIGN KEY (id_sucursal) REFERENCES sucursal(id_sucursal),
    FOREIGN KEY (id_carro) REFERENCES carro(id_carro)
)engine = ndbcluster;
