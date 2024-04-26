package cmd

import (
	"log"

	"gorm.io/gorm"
)

func SeedCats(db *gorm.DB) {
	type cats struct {
		Type     string `gorm:"column:type;"`
		Title    string `gorm:"column:title;"`
		Position string `gorm:"column:position;"`
		Image    string `gorm:"column:image;"`
	}
	// Define some sample data
	catList := []cats{
		{Type: "Persian", Title: "Fluffy", Position: "1", Image: "fluffy.jpg"},
		{Type: "Siamese", Title: "Whiskers", Position: "2", Image: "whiskers.jpg"},
		{Type: "Maine Coon", Title: "Garfield", Position: "3", Image: "garfield.jpg"},
	}

	// Loop through the data and create records
	for _, cat := range catList {
		if err := db.Create(&cat).Error; err != nil {
			log.Fatalf("Error seeding cat: %v", err)
		}
	}

	log.Println("Seeding completed successfully")
}
