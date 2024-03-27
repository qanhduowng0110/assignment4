// Code generated by ent, DO NOT EDIT.

package migrate

import (
	"entgo.io/ent/dialect/entsql"
	"entgo.io/ent/dialect/sql/schema"
	"entgo.io/ent/schema/field"
)

var (
	// ContactInfoColumns holds the columns for the "ContactInfo" table.
	ContactInfoColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt, Increment: true},
		{Name: "name", Type: field.TypeString, Nullable: true},
		{Name: "email", Type: field.TypeString, Nullable: true},
		{Name: "messages", Type: field.TypeString, Nullable: true},
		{Name: "created_at", Type: field.TypeTime, Nullable: true},
	}
	// ContactInfoTable holds the schema information for the "ContactInfo" table.
	ContactInfoTable = &schema.Table{
		Name:       "ContactInfo",
		Columns:    ContactInfoColumns,
		PrimaryKey: []*schema.Column{ContactInfoColumns[0]},
	}
	// SchemaMigrationsColumns holds the columns for the "schema_migrations" table.
	SchemaMigrationsColumns = []*schema.Column{
		{Name: "version", Type: field.TypeInt, Increment: true},
		{Name: "dirty", Type: field.TypeBool},
	}
	// SchemaMigrationsTable holds the schema information for the "schema_migrations" table.
	SchemaMigrationsTable = &schema.Table{
		Name:       "schema_migrations",
		Columns:    SchemaMigrationsColumns,
		PrimaryKey: []*schema.Column{SchemaMigrationsColumns[0]},
	}
	// Tables holds all the tables in the schema.
	Tables = []*schema.Table{
		ContactInfoTable,
		SchemaMigrationsTable,
	}
)

func init() {
	ContactInfoTable.Annotation = &entsql.Annotation{
		Table: "ContactInfo",
	}
}
