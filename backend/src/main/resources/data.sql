
INSERT INTO TB_USER(NAME, EMAIL, PASSWORD) VALUES ('Bob', 'bob@gmail.com', '$2a$10$cr/nPUMDKxWoEIxxbT3YVOEofOI0kEU09ErSfBZ78OzqzTVIyfxo.
');
INSERT INTO TB_USER(NAME, EMAIL, PASSWORD) VALUES ('Maria', 'alex@gmail.com', '$2a$10$cr/nPUMDKxWoEIxxbT3YVOEofOI0kEU09ErSfBZ78OzqzTVIyfxo.
');

INSERT INTO TB_ROLE(AUTHORITY) VALUES ('ROLE_VISITOR');
INSERT INTO TB_ROLE(AUTHORITY) VALUES ('ROLE_MEMBER');

INSERT INTO TB_USER_ROLE (USER_ID, ROLE_ID) VALUES (1,1);
INSERT INTO TB_USER_ROLE (USER_ID, ROLE_ID) VALUES (2,2);


INSERT INTO TB_GENRE (NAME) VALUES ('AÇÃO');
INSERT INTO TB_GENRE (NAME) VALUES ('AVENTURA');
INSERT INTO TB_GENRE (NAME) VALUES ('COMÉDIA');
INSERT INTO TB_GENRE (NAME) VALUES ('SUSPENSE');


INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Filme 1', 'Subtitulo filme 1', 2020, 'http://', 'synopsis of the movie', 1);
INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Filme 1', 'Subtitulo filme 1', 2020, 'http://', 'synopsis of the movie', 1);
INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Filme 1', 'Subtitulo filme 1', 2020, 'http://', 'synopsis of the movie', 1);
INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Filme 1', 'Subtitulo filme 1', 2020, 'http://', 'synopsis of the movie', 1);
INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Filme 1', 'Subtitulo filme 1', 2020, 'http://', 'synopsis of the movie', 1);


INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Filme muito bom', 1,1);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Filme muito bom', 1,1);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Filme muito bom', 1,1);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Filme muito bom', 1,1);
