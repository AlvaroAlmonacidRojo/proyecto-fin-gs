SET timezone = 'UTC';

CREATE TABLE IF NOT EXISTS employees (
    employee_id UUID PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS schedules (
    schedule_id UUID PRIMARY KEY,
    date DATE NOT NULL,
    check_in_time TIMESTAMPTZ,
    departure TIMESTAMPTZ,
    employee_id UUID NOT NULL
);