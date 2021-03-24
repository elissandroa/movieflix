
INSERT INTO TB_USER(NAME, EMAIL, PASSWORD) VALUES ('Bob Brown', 'bob@gmail.com','$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO TB_USER(NAME, EMAIL, PASSWORD) VALUES ('Ana Maria', 'ana@gmail.com','$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO TB_ROLE(AUTHORITY) VALUES ('ROLE_VISITOR');
INSERT INTO TB_ROLE(AUTHORITY) VALUES ('ROLE_MEMBER');

INSERT INTO TB_USER_ROLE (USER_ID, ROLE_ID) VALUES (1,1);
INSERT INTO TB_USER_ROLE (USER_ID, ROLE_ID) VALUES (2,2);


INSERT INTO TB_GENRE (NAME) VALUES ('AÇÃO');
INSERT INTO TB_GENRE (NAME) VALUES ('AVENTURA');
INSERT INTO TB_GENRE (NAME) VALUES ('COMÉDIA');
INSERT INTO TB_GENRE (NAME) VALUES ('DRAMA');


INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Mulher-Maravilha 1984', 'Uma nova era de maravilhas começa', 2020, 'https://www.themoviedb.org/t/p/original/h2kcFAIdzxdDGe3BOuG4i1ikjp0.jpg', 'Em 1984, Diana Prince entra em conflito com dois inimigos formidáveis, Maxwell Lord e a Mulher-Leopardo, enquanto reencontra misteriosamente com seu antigo interesse amoroso Steve Trevor.', 2);
INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Liga da Justiça de Zack Snyder', 'Caído. Ressuscitado. Unidos.', 2021, 'https://www.themoviedb.org/t/p/original/4iTd1FoDuNZmXA16vpwfaPc2dl7.jpg', 'Determinado a garantir que o sacrifício final do Superman não foi em vão, Bruce Wayne alinha forças com Diana Prince com planos de recrutar uma equipe de metahumanos para proteger o mundo de uma ameaça de proporções catastróficas que se aproxima.', 1);
INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Raya e o Último Dragão', 'A quest to save her world.', 2021, 'https://www.themoviedb.org/t/p/original/rcUcYzGGicDvhDs58uM44tJKB9F.jpg', 'O reino encantado Kumandra é dividido em cinco regiões e sua população venerava os dragões mágicos que eram presentes no reino, porém quando uma força maligna ameaçou a Terra, os dragões se sacrificaram para salvar a humanidade. Agora, 500 anos depois, o mesmo mal voltou e cabe a uma guerreira solitária, Raya, rastrear o lendário último dragão para restaurar a terra fraturada e seu povo dividido.

Don Hall', 2);
INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Ponto Vermelho', 'Ponto Vermelho', 2021, 'https://www.themoviedb.org/t/p/original/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg', 'Com o relacionamento em crise e um bebê a caminho, um casal decide passar uns dias nas montanhas para reacender a paixão, mas acaba na mira de assassinos impiedosos.', 4);
INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Um Príncipe em Nova York 2', 'Ele voltou como rei.', 2021, 'https://www.themoviedb.org/t/p/original/vKzbIoHhk1z9DWYi8kyFe9Gg0HF.jpg', 'Situado no luxuoso país da realeza Zamunda, o recém coroado Rei Akeem e seu confidente Semmi embarcam em uma nova aventura que os levará ao redor do mundo: de sua grande nação Africana ao Queens, bairro de Nova York – onde tudo começou!', 3);
INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Ameaça no Espaço', 'Nas profundezas do espaço, eles não estão sozinhos.', 2020, 'https://www.themoviedb.org/t/p/original/wrWMwLyPOM7t7NCu1rlWv8MSIAu.jpg', 'Um jovem clandestino está a bordo de uma arca interestelar para a Nova Terra. Com a ajuda de um experiente companheiro de tripulação, ele deve superar um terror cósmico malévolo com a intenção de usar a nave espacial como arma.', 1);
INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Legado Explosivo ', 'Nunca impeça um homem de fazer a coisa certa.', 2020, 'https://www.themoviedb.org/t/p/original/2M2JxEv3HSpjnZWjY9NOdGgfUd.jpg', 'Um ladrão de banco resolve mudar de vida e se tornar uma pessoa honesta quando se apaixona por uma mulher que trabalha em uma instalação de armazenamento, um lugar onde ele esconde todo o dinheiro que rouba. Mas fica cada vez mais difícil limpar seu nome quando ele passa a ser investigado por um agente corrupto do FBI.', 1);
INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Um Homem Comum', 'Um Homem Comum', 2018, 'https://www.themoviedb.org/t/p/original/pbhhpGswG3XmjZSmI0V3Ze9sER1.jpg', 'A história segue um criminoso de guerra na clandestinidade (Kingsley), que inicia um relacionamento com sua empregada, uma atriz islandesa em ascensão. Quando as buscas para o encontrarem ficam mais intensas, ele percebe que ela é única pessoa em que pode confiar.', 1);
INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('Carga Explosiva 3', 'This time, the rules are the same. Except one.', 2008, 'https://www.themoviedb.org/t/p/original/v7hHxGSbL5gE0y8MuJvkgI44KsC.jpg', 'Frank Martin (Jason Statham) é obrigado a conduzir Valentina (Natalya Rudakova), a filha de Leonid Vasilev (Jeroen Krabbé), o chefe da Agência de Proteção Ambiental da Ucrânia. Ela foi sequestrada por Jonas Johnson (Robert Knepper), contratado por uma empresa de gerenciamento internacional de resíduos que deseja operar na Ucrânia. Para ter Frank e Valentina sob controle, Jonas prende em seus pulsos um dispositivo que determina que não possam se afastar muito do carro que os conduz, caso contrário o bracelete explode. Contando com a ajuda do inspetor Tarconi (François Berléand), Frank busca um meio de deixar a armadilha.', 1);
INSERT INTO TB_MOVIE (TITLE, SUB_TITLE, YEAR, IMG_URL, SYNOPSIS, GENRE_ID) VALUES ('A Outra Face', 'Para capturá-lo, terá que se transformar em seu próprio inimigo.', 1997, 'https://www.themoviedb.org/t/p/original/mtaqzndq6KJpWBdgLmnYR3Ap2rk.jpg', 'Sean Archer (John Travolta), um agente especial do FBI, vê seu filho ser morto por balas destinadas a ele, disparadas por Castor Troy (Nicolas Cage), um terrorista psicopata. Por seis anos o agente tentou capturá-lo e, quando consegue, descobre que uma grande explosão está para acontecer em Los Angeles por obra do criminoso, que, logo depois, devido a um acidente, entra em coma profundo. Assim, Sean Archer, utilizando uma técnica revolucionária, troca de rosto com Castor Troy, para conseguir com o irmão (Alessandro Nivola) deste a localização da bomba. Mas o criminoso sai do coma, e agora ele tem o rosto do agente do FBI Sean Archer.', 1);


INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Adorei o filme, a única coisa ruim é que acaba', 1,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Gal é de mais, filmaço', 1,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Gostaria de ter visto no cinema, mas valeu a experiência', 1,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Não gostei poderia ser melhor', 1,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Será que teremos um terceiro filme?', 1,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Meu Deus quatro horas de filme !', 2,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Esse filme é uma viagem, muito top!', 2,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Ansioso por uma continuação', 2,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Não tem como assisitri, muito grande', 2,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Filme muito bom', 3,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Ansioso por uma continuação', 3,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Adorei o filme, a única coisa ruim é que acaba', 3,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Esse filme é uma viagem, muito top!', 3,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Filme muito bom', 4,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Ansioso por uma continuação', 4,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Adorei o filme, a única coisa ruim é que acaba', 4,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Esse filme é uma viagem, muito top!', 4,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Adorei o filme, a única coisa ruim é que acaba', 5,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Ansioso por uma continuação', 5,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Filme muito bom', 5,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Adorei o filme, a única coisa ruim é que acaba', 5,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Esse filme é uma viagem, muito top!', 6,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Filme muito bom', 6,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Ansioso por uma continuação', 6,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Adorei o filme, a única coisa ruim é que acaba', 6,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Filme muito bom', 7,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Ansioso por uma continuação', 7,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Esse filme é uma viagem, muito top!', 7,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Adorei o filme, a única coisa ruim é que acaba', 7,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Adorei o filme, a única coisa ruim é que acaba', 8,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Filme muito bom', 8,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Ansioso por uma continuação', 8,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Filme muito bom', 8,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Esse filme é uma viagem, muito top!', 9,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Adorei o filme, a única coisa ruim é que acaba', 9,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Filme muito bom', 9,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Ansioso por uma continuação', 9,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Adorei o filme, a única coisa ruim é que acaba', 10,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Filme muito bom', 10,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Esse filme é uma viagem, muito top!', 10,2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Ansioso por uma continuação', 10,2);


