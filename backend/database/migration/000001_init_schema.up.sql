CREATE TABLE "ContactInfo" (
  "id" bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" varchar,
  "email" varchar,
  "messages" varchar,
  "created_at" timestamp DEFAULT (now())
);