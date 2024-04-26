package cmd

import (
	"fmt"
	"log"

	"github.com/go-gormigrate/gormigrate/v2"
	"gorm.io/gorm"
)

func ApplyMigration(db *gorm.DB) {

	m := gormigrate.New(db, gormigrate.DefaultOptions, []*gormigrate.Migration{{
		// create `cats` table
		ID: "201608301400_cats",
		Migrate: func(tx *gorm.DB) error {

			fmt.Println("Migrating 201608301400 create table")

			type cats struct {
				ID       uint   `gorm:"primaryKey"`
				Type     string `gorm:"column:type;"`
				Title    string `gorm:"column:title;"`
				Position string `gorm:"column:position;"`
				Image    string `gorm:"column:image;"`
			}
			// it's a good pratice to copy the struct inside the function,
			// so side effects are prevented if the original struct changes during the time
			return tx.Migrator().CreateTable(&cats{})
		},
		Rollback: func(tx *gorm.DB) error {
			return tx.Migrator().DropTable("cats")
		},
	}})

	if err := m.Migrate(); err != nil {
		panic(err)
	}
	log.Println("Migration did run successfully")
}
