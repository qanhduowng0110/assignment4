package api

import (
	"assignment4/ent"
	"fmt"
	"log"
	"os"
	_ "entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect"
	"github.com/gofiber/fiber/v2"	
	_ "github.com/lib/pq"
)

var ctx *fiber.Ctx
var DB *ent.Client

func ConnectDB() *ent.Client {
	db, err := ent.Open(dialect.Postgres, "host=localhost port=5432 user=root dbname=postgres password=secret sslmode=disable")
	if err != nil {
		log.Fatalf("Failed opening connection to postgres: %v", err)
		os.Exit(1)
	}
	fmt.Println("Connected to postgres!")
	DB = db
	
	return DB
}
