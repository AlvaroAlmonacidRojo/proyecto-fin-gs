SET timezone = 'UTC';

CREATE EXTENSION pgcrypto;

CREATE TABLE IF NOT EXISTS users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS proyects (
    proyect_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS user_proyects (
    user_proyect_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(user_id),
    proyect_id UUID NOT NULL REFERENCES proyects(proyect_id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS fingerprint (
    fingerprint_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(user_id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    telework BOOLEAN NOT NULL DEFAULT FALSE
);

// created_at mas nuevo en ese dia
// created_at mas viejo
// week [ ]

select newest.user_id, newest.created_at as last_fingerprint, oldest.created_at as first_fingerprint from 
(select user_id, created_at from fingerprint where created_at::text like '2020-05%' AND user_id = '67390d41-a0f6-46e2-b1f7-935f6ca9cc3d' order by created_at desc limit 1) as newest,
(select created_at from fingerprint where created_at::text like '2020-05%' AND user_id = '67390d41-a0f6-46e2-b1f7-935f6ca9cc3d' order by created_at asc limit 1) as oldest;