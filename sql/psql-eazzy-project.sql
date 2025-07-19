-- @path: /etc/diagram/2. ERD/psql-eazzy-project.sql
-- @author: [EazZy Project]
-- @license: https://opensource.org/licenses/MIT MIT License
--
-- Deskripsi: Skrip inisialisasi database untuk Eazzy Project.
-- Versi ini diperbaiki dengan menambahkan Primary Key pada setiap tabel
-- untuk mengatasi error saat pembuatan Foreign Key.
--

-- Hapus semua tabel yang ada untuk memastikan lingkungan bersih
DROP TABLE IF EXISTS 
  "order_payments", "order_items", "orders", "product_reviews", "product_images", 
  "products", "categories", "store_layouts", "stores", "user_profiles", "users", 
  "sessions", "customers", "media", "product_variants", "shipments" 
CASCADE;

-- =================================================================
-- Pembuatan Tabel
-- =================================================================

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(50) UNIQUE NOT NULL,
  "email" VARCHAR(255) UNIQUE NOT NULL,
  "password_hash" VARCHAR(255) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT (now()),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user_profiles" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT NOT NULL UNIQUE,
  "full_name" VARCHAR(100),
  "address" TEXT,
  "phone_number" VARCHAR(20),
  "profile_picture_url" VARCHAR(255),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT (now()),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "stores" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT NOT NULL UNIQUE,
  "store_name" VARCHAR(100) NOT NULL,
  "description" TEXT,
  "store_logo_url" VARCHAR(255),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT (now()),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "store_layouts" (
  "id" SERIAL PRIMARY KEY,
  "store_id" INT NOT NULL,
  "theme_name" VARCHAR(50),
  "layout_config_json" JSONB,
  "is_active" BOOLEAN DEFAULT false,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT (now()),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL,
  "description" TEXT,
  "parent_id" INT
);

CREATE TABLE "products" (
  "id" SERIAL PRIMARY KEY,
  "store_id" INT NOT NULL,
  "category_id" INT NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "price" DECIMAL(12, 2) NOT NULL,
  "stock" INT NOT NULL DEFAULT 0,
  "sku" VARCHAR(100) UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT (now()),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "product_images" (
  "id" SERIAL PRIMARY KEY,
  "product_id" INT NOT NULL,
  "image_url" VARCHAR(255) NOT NULL,
  "alt_text" VARCHAR(255),
  "display_order" INT DEFAULT 0
);

CREATE TABLE "product_reviews" (
  "id" SERIAL PRIMARY KEY,
  "product_id" INT NOT NULL,
  "user_id" INT NOT NULL,
  "rating" SMALLINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  "comment" TEXT,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT (now())
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT NOT NULL,
  "store_id" INT NOT NULL,
  "total_amount" DECIMAL(12, 2) NOT NULL,
  "status" VARCHAR(50) NOT NULL DEFAULT 'pending',
  "shipping_address" TEXT,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT (now()),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "order_items" (
  "id" SERIAL PRIMARY KEY,
  "order_id" INT NOT NULL,
  "product_id" INT NOT NULL,
  "quantity" INT NOT NULL,
  "price_at_purchase" DECIMAL(12, 2) NOT NULL
);

CREATE TABLE "order_payments" (
  "id" SERIAL PRIMARY KEY,
  "order_id" INT NOT NULL UNIQUE,
  "payment_method" VARCHAR(50),
  "amount" DECIMAL(12, 2) NOT NULL,
  "transaction_id" VARCHAR(255),
  "status" VARCHAR(50) NOT NULL DEFAULT 'unpaid',
  "paid_at" TIMESTAMPTZ
);

CREATE TABLE "sessions" (
  "sid" VARCHAR NOT NULL COLLATE "default",
  "sess" JSON NOT NULL,
  "expire" TIMESTAMP(6) NOT NULL,
  CONSTRAINT "sessions_pkey" PRIMARY KEY ("sid")
);


-- =================================================================
-- Komentar dan Penambahan Foreign Key
-- =================================================================

COMMENT ON TABLE "users" IS 'Menyimpan data login utama pengguna.';
COMMENT ON TABLE "user_profiles" IS 'Menyimpan data detail profil pengguna.';
COMMENT ON TABLE "stores" IS 'Menyimpan data toko yang dimiliki oleh pengguna.';
COMMENT ON TABLE "store_layouts" IS 'Konfigurasi tampilan dan tema untuk setiap toko.';

ALTER TABLE "user_profiles" ADD CONSTRAINT "fk_user_profiles_users" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;
ALTER TABLE "stores" ADD CONSTRAINT "fk_stores_users" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;
ALTER TABLE "store_layouts" ADD CONSTRAINT "fk_store_layouts_stores" FOREIGN KEY ("store_id") REFERENCES "stores" ("id") ON DELETE CASCADE;
ALTER TABLE "categories" ADD CONSTRAINT "fk_categories_parent" FOREIGN KEY ("parent_id") REFERENCES "categories" ("id") ON DELETE SET NULL;
ALTER TABLE "products" ADD CONSTRAINT "fk_products_stores" FOREIGN KEY ("store_id") REFERENCES "stores" ("id") ON DELETE CASCADE;
ALTER TABLE "products" ADD CONSTRAINT "fk_products_categories" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT;
ALTER TABLE "product_images" ADD CONSTRAINT "fk_product_images_products" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE;
ALTER TABLE "product_reviews" ADD CONSTRAINT "fk_product_reviews_products" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE;
ALTER TABLE "product_reviews" ADD CONSTRAINT "fk_product_reviews_users" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;
ALTER TABLE "orders" ADD CONSTRAINT "fk_orders_users" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT;
ALTER TABLE "orders" ADD CONSTRAINT "fk_orders_stores" FOREIGN KEY ("store_id") REFERENCES "stores" ("id") ON DELETE RESTRICT;
ALTER TABLE "order_items" ADD CONSTRAINT "fk_order_items_orders" FOREIGN KEY ("order_id") REFERENCES "orders" ("id") ON DELETE CASCADE;
ALTER TABLE "order_items" ADD CONSTRAINT "fk_order_items_products" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE RESTRICT;
ALTER TABLE "order_payments" ADD CONSTRAINT "fk_order_payments_orders" FOREIGN KEY ("order_id") REFERENCES "orders" ("id") ON DELETE CASCADE;

