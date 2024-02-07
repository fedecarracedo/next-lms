CREATE TABLE usuario (
	usuario_id INT PRIMARY KEY AUTO_INCREMENT,
	usuario_nombre VARCHAR(100),
	usuario_email VARCHAR(100),
	usuario_apellido VARCHAR(100),
	usuario_clave VARCHAR(150),
	usuario_tipo INT
);

CREATE TABLE curso (
	curso_id INT PRIMARY KEY AUTO_INCREMENT,
	curso_nombre VARCHAR(100),
	curso_descripcion text
);

CREATE TABLE unidad (
	unidad_id INT PRIMARY KEY AUTO_INCREMENT,
	unidad_curso INT,
	unidad_nombre VARCHAR(100),
	unidad_orden SMALLINT
);

ALTER TABLE unidad ADD CONSTRAINT FK_unidad_curso FOREIGN KEY (unidad_curso) REFERENCES curso (curso_id);

CREATE TABLE leccion (
	leccion_id INT PRIMARY KEY AUTO_INCREMENT,
	leccion_unidad INT, 
	leccion_nombre VARCHAR(100),
	leccion_orden INT,
	leccion_contenido LONGTEXT
);

ALTER TABLE leccion ADD CONSTRAINT FK_leccion_unidad FOREIGN KEY (leccion_unidad) REFERENCES unidad (unidad_id);

CREATE TABLE usuario_curso (
	usuario_curso_usuario INT,
	usuario_curso_curso INT
);

ALTER TABLE usuario_curso ADD CONSTRAINT pk_usuario_curso PRIMARY KEY (usuario_curso_usuario, usuario_curso_curso);
ALTER TABLE usuario_curso ADD CONSTRAINT FK_usuario_curso_usuario FOREIGN KEY (usuario_curso_usuario) REFERENCES usuario (usuario_id);
ALTER TABLE usuario_curso ADD CONSTRAINT FK_usuario_curso_curso FOREIGN KEY (usuario_curso_curso) REFERENCES curso (curso_id);


CREATE TABLE usuario_curso_leccion (
	usuario_id INT,
	usuario_curso INT,
	usuario_leccion INT
);

ALTER TABLE usuario_curso_leccion ADD CONSTRAINT pk_usuario_curso_leccion PRIMARY KEY (usuario_id, usuario_curso, usuario_leccion);
ALTER TABLE usuario_curso ADD CONSTRAINT FK_curso_leccion_usuario FOREIGN KEY (usuario_id) REFERENCES usuario (usuario_id);
ALTER TABLE usuario_curso ADD CONSTRAINT FK_curso_leccion_curso FOREIGN KEY (usuario_curso) REFERENCES curso (curso_id);
ALTER TABLE usuario_curso ADD CONSTRAINT FK_curso_leccion_leccion FOREIGN KEY (usuario_leccion) REFERENCES leccion (leccion_id);