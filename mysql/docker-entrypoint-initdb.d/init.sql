create table if not exists people
(
    id int Not null auto_increment primary key,
    name varchar(100) not null
);

insert into people (name) values ("Daniel Farias"),
("Hiago Silva"),
("Thiago Marinho"),
("Luis Henrique");