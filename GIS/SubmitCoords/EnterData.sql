INSERT INTO valmont.type_val (type)
VALUES
    ('Ponts et ponceaux'),
    ('Échantillon de sol');

INSERT INTO valmont.category_val (type_id, category, colour)
VALUES
    (2, 'Non-contaminé', '#79B943'),
    (2, 'Contamination BC', '#EEE824'),
    (2, 'Contamination AB', '#FD4343'),
    (2, 'En attente des résultats', '#5EB6E4');

INSERT INTO valmont.area_val(area)
VALUES
    ('alberta'),
    ('quebec'),
    ('manitoba'),
    ('ontario');

INSERT INTO valmont.file_val(name, url)
VALUES
    ('report', 'https://www.geoafrikana.com');

INSERT INTO valmont.user_val(first_name, last_name, role, email, password)
VALUES 
    ('nasiru', 'olagunju', 0, 'spatialnasir@gmail.com',
     crypt('1234', gen_salt('bf'))
     ),
    ('adebayo', 'olagunju', 1, 'spatialbayo@gmail.com',
     crypt('5678', gen_salt('bf'))
     ),
    ('gbolahan', 'olagunju', 2, 'spatialgbolahan@gmail.com',
     crypt('9012', gen_salt('bf'))
     );


