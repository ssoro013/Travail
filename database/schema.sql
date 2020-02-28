CREATE DATABASE travail;

CREATE TABLE companies (
    id bigserial primary key,
    company varchar not null,
    employees integer,
    funding bigint,
    round varchar not null,
    created timestamp with time zone not null default now()
);
-- Companies Mock Data
insert into companies(company, employees, funding, round) values
    ('Restless Bandit, Inc', 10, 3000000, 'B'),
    ('ACME Corporation', 50, 100000000, 'C'),
    ('Stark Industries', 10, 200000000, 'A'),
    ('Restless Bandage, Inc', 200, 500000, 'A'),
    ('Walton Martin', 500, 50000000, 'D'),
    ('Dunder Mifflin, Inc', 1500, 1000000, 'A'),
    ('Mord Fotors', 2500, 2500000, 'A');

CREATE TABLE employees(
    id bigserial primary key,
    "2010" bigint,
    "2011" bigint, 
    "2012" bigint, 
    "2013" bigint, 
    "2014" bigint, 
    "2015" bigint, 
    "2016" bigint, 
    "2017" bigint, 
    "2018" bigint, 
    "2019" bigint, 
    "2020" bigint,
    company_id bigint references companies(id)
);

insert into employees("2014", "2015", "2016", "2017", "2018", "2019", "2020", company_id) values
    (2, 5, 10, 8, 14, 16, 10, 1);
insert into employees("2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", company_id) values
    (20, 25, 23, 25, 30, 38, 40, 45, 50, 2);
insert into employees("2016", "2017", "2018", "2019", "2020", company_id) values
    (5, 20, 15, 30, 10, 3);
insert into employees("2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", company_id) values
    (100, 80, 90, 120, 150, 200, 250, 260, 250, 240, 200, 4);
insert into employees("2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", company_id) values
    (500, 580, 590, 520, 550, 520, 450, 500, 550, 540, 500, 5);
insert into employees("2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", company_id) values
    (1000, 1580, 1590, 1520, 1550, 1520, 1450, 1500, 1550, 1540, 1500, 6);
insert into employees("2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", company_id) values
    (2000, 2580, 2590, 2520, 2550, 2520, 2450, 2500, 2550, 2540, 2500, 7);

CREATE TABLE jobs (
    id bigserial primary key,
    title varchar not null,
    city varchar not null,
    state varchar not null,
    salary bigint not null,
    type varchar not null,
    description text not null,
    status varchar,
    company_id bigint references companies(id),
    created timestamp with time zone not null default now()
);



-- Jobs Mock Data
INSERT INTO jobs
    (title, city, state, salary, type, description, status, company_id)
VALUES
    ('Principal Software Engineering Intern', 'San Francisco', 'CA', 50000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Applied', (SELECT id FROM companies WHERE company = 'Restless Bandit, Inc')),
    ('Computer Support Specialist', 'New York', 'NY', 120000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'ACME Corporation')),
    ('Crash Test Engineer', 'San Francisco', 'CA', 140000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Stark Industries')),
    ('Medical Examiner', 'Los Angeles', 'CA', 50000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Restless Bandage, Inc')),
    ('Shopping Cart Reallocation Technician', 'San Francisco', 'CA', 150000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Walton Martin')),
    ('Assistant to the Regional Manager', 'Seattle', 'WA', 160000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Applied', (SELECT id FROM companies WHERE company = 'Dunder Mifflin, Inc')),
    ('10x Engineer', 'San Francisco', 'CA', 100, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Mord Fotors')),
    ('Software Engineer', 'San Francisco', 'CA', 120000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Applied', (SELECT id FROM companies WHERE company = 'Restless Bandit, Inc')),
    ('Full-Stack Software Engineer', 'New York', 'NY', 110000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Restless Bandit, Inc')),
    ('Senior Software Engineer', 'New York', 'NY', 160000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Restless Bandit, Inc')),
    ('Staff Software Engineer', 'New York', 'NY', 200000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Restless Bandit, Inc')),
    ('Lead Software Engineer', 'San Francisco', 'CA', 150000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Restless Bandit, Inc')),
    ('Principal Software Engineering Intern II', 'San Francisco', 'CA', 50000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Restless Bandit, Inc')),
    ('Computer Support Specialist II', 'San Francisco', 'CA', 12000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'ACME Corporation')),
    ('Crash Test Engineer II', 'San Francisco', 'CA', 115000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Stark Industries')),
    ('Medical Examiner II', 'San Francisco', 'CA', 50000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Restless Bandage, Inc')),
    ('Shopping Cart Reallocation Technician II', 'Seattle', 'wA', 150000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Walton Martin')),
    ('Assistant to the Regional Manager II', 'Seattle', 'wA', 150000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Dunder Mifflin, Inc')),
    ('10x Engineer II', 'Seattle', 'wA', 100, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Mord Fotors')),
    ('Software Engineer II', 'San Francisco', 'CA', 120000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Restless Bandit, Inc')),
    ('Full-Stack Software Engineer II', 'San Francisco', 'CA', 100000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Restless Bandit, Inc')),
    ('Senior Software Engineer II', 'Los Angeles', 'CA', 160000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Restless Bandit, Inc')),
    ('Staff Software Engineer II', 'Los Angeles', 'CA', 200000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Restless Bandit, Inc')),
    ('Lead Software Engineer II', 'Los Angeles', 'CA', 150000, 'Full-Time', 'Quisquam quos deserunt voluptates atque doloremque assumenda quia voluptatum. Et porro sit quaerat rerum qui eligendi quia aut quam. Asperiores sunt nihil autem quo et autem maiores. Aliquid aliquid velit est maiores eaque incidunt rerum. Neque aperiam ea. Quaerat sunt modi laboriosam eius neque repudiandae unde a eveniet. Sunt doloremque et cumque. Necessitatibus accusantium modi. Illo quia fugit excepturi. Nesciunt rerum eaque a nihil et est eaque deleniti. Omnis ipsum magnam consequatur aut.', 'Todo', (SELECT id FROM companies WHERE company = 'Restless Bandit, Inc'));