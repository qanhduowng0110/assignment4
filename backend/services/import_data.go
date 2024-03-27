package services

import (
	"assignment4/api"
	"assignment4/model"
	"context"
	"time"

	"github.com/gofiber/fiber/v2"
)

func ApiImportContactInfo(c *fiber.Ctx) error {
	formData := new(model.ContactModelView)
	if err := c.BodyParser(formData); err != nil {
		return err
	}

	api.DB.ContactInfo.Create().
		SetName(formData.Name).
		SetEmail(formData.Email).
		SetMessages(formData.Messages).
		SetCreatedAt(time.Now()).
		SaveX(context.Background())
	return c.SendString("Form data received successfully!")
}
