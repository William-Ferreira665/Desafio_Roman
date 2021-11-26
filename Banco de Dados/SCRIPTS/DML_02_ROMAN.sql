USE ROMAN;
GO

INSERT INTO tipoUsuario (tituloTipoUsuario)
VALUES ('Administrador'), ('Professor');
GO

INSERT INTO usuario (idTipoUsuario, email, senha, nomeUsuario)
VALUES (1, 'adm@adm', '123', 'Roberto'), (2, 'prof@prof', '404', 'Regina');
GO

INSERT INTO tema (tituloTema)
VALUES ('Banco de Dados'), ('C#'), ('React JS');
GO

INSERT INTO projeto (idTema, idUsuario, nomeProjeto, descricao)
VALUES (3, 2, 'Gufi', 'Gestão de Eventos');
GO