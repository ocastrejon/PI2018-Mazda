use agencia;

select * from gerente_global;
INSERT INTO gerente_global VALUES (0,'Oscar Castrejon', 3121553413, 'ocastrejon@ucol.mx', 'Rey Juan Carlos #397', 30000);
INSERT INTO gerente_global VALUES (0,'Eduardo Mejía', 1613568, 'oscar.does.6@gmail.com', 'Tekuan #97-A', 50000);
INSERT INTO gerente_global VALUES (0,'Kirath Alejandra', 3123398879, 'kvazquez2@ucol.mx', 'De las Rosas #887', 25000);


select * from planta;
INSERT INTO planta VALUES (0, 'Rey Juan Carlos #397', 'Villa de alvarez', 'Colima', 28978, '005', 2);


select * from sucursal;
INSERT INTO sucursal VALUES (0, 'Carlos Mendez #12', 'Villa de alvarez', 'Colima', 28979, '006');
INSERT INTO sucursal VALUES (0, 'Miguel Hidalgo #612', 'Comala', 'Colima', 28979, '007');


select * from gerente_agencia;
INSERT INTO gerente_agencia VALUES (0,'Oscar Mejía', 3121553413, 'ocastrejon@ucol.mx', 'Rey Juan Carlos #397', 300000, 1, 2);
INSERT INTO gerente_agencia VALUES (0,'Kirath Alejandra', 3123398879, 'kvazquez2@ucol.mx', 'De las Rosas #887', 25000, 2, 1);


describe vendedor;
select * from vendedor;
INSERT INTO vendedor VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1000, 1);
INSERT INTO vendedor VALUES (0,'Oscar Hernandez', 3141553413, 'ohernandez@ucol.mx', 'Juan Carlos #37', 2000, 2);
INSERT INTO vendedor VALUES (0,'Edna Mejía', 3121653413, 'kcastrejon@ucol.mx', 'Luis palomares #337', 3000, 1);
INSERT INTO vendedor VALUES (0,'Karla Castrejon', 3121523413, 'emejia@ucol.mx', 'Rey David #197', 4000, 2);
INSERT INTO vendedor VALUES (0,'Alejandra Vazquez', 3121557413, 'avazquez@ucol.mx', 'Rey Arturo #327', 5000, 1);
INSERT INTO vendedor VALUES (0,'Kirath Muñoz', 3121553418, 'kmuñoz@ucol.mx', 'Reina Isabel #39', 6000, 2);
INSERT INTO vendedor VALUES (0,'Fernando Ontiveros', 3121153413, 'fontiveros@ucol.mx', 'Papa II #7', 7000, 1);
INSERT INTO vendedor VALUES (0,'Gustavo Fernando', 3121553713, 'gfernando@ucol.mx', 'Tekua #1', 8000, 2);
INSERT INTO vendedor VALUES (0,'Francisco Mendoza', 3121542413, 'fmendoza@ucol.mx', '16 de Septiembre #9', 3000, 1);
INSERT INTO vendedor VALUES (0,'Oscar Mejía', 3121553478, 'omejia@ucol.mx', '20 de Noviembre #3', 4000, 2);


-- falta agregar:
select * from cliente;
INSERT INTO cliente (nombre, telefono, email, domicilio, id_vendedor) VALUES ('Carlos', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);
INSERT INTO cliente VALUES (0,'Carlos gaspar', 3131553413, 'carlos@ucol.mx', 'Rey Juan Luis #398', 1);


-- quedan pendientes compra y orden de compra
select * from compra;
select * from orden_compra;


select * from carro;
describe carro;
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');
INSERT INTO carro VALUES (0,'Mazda', 'CX-3', 2018, 'SL', 'Automatico', 'Negro', 1234, 'Disponible');


select * from stock;