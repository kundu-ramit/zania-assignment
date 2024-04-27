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
		{Type: "bank-draft", Title: "Bank Draft", Position: "1", Image: "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg"},
		{Type: "bill-of-lading", Title: "Bill of Lading", Position: "2", Image: "https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_960_720.jpg"},
		{Type: "maine-coon", Title: "Maine Coon", Position: "3", Image: "https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_640.jpg"},
		{Type: "bill-of-lading-2", Title: "Bill of Lading 4", Position: "4", Image: "https://cdn.pixabay.com/photo/2023/03/25/09/51/cat-7875506_640.jpg"},
		{Type: "Maine Coon-2", Title: "Maine Coon 5", Position: "5", Image: "https://cdn.pixabay.com/photo/2023/01/21/02/40/cat-7732877_640.jpg"},
	}

	// Loop through the data and create records
	for _, cat := range catList {
		if err := db.Create(&cat).Error; err != nil {
			log.Fatalf("Error seeding cat: %v", err)
		}
	}

	log.Println("Seeding completed successfully")
}
