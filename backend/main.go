package main

import (
	"assignment4/api"
	"assignment4/services"
	"os"

	"github.com/gofiber/fiber/v2"
)

const defaultPort = "3000"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}
	api.ConnectDB()
	defer api.DB.Close()

	app := fiber.New()
	app.Use(func(c *fiber.Ctx) error {
		c.Set("Access-Control-Allow-Origin", "*")
		c.Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
		c.Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if c.Method() == "OPTIONS" {
			return c.SendStatus(fiber.StatusNoContent)
		}
		return c.Next()
	})
	app.Post("/",services.ApiImportContactInfo)
	app.Listen(":" + port)
}
